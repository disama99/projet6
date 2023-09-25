import React, { useState } from 'react';

import "./menuderoulantapropo.scss"
import expandIcon from '@/pages/public/logokasa/expandIcon.png';
import collapseIcon from '@/pages/public/logokasa/collapseIcon.png';

const Apropos = () => {
  const [expandedMenu, setExpandedMenu] = useState(null);

  const toggleMenu = (menuIndex) => {
    if (expandedMenu === menuIndex) {
      setExpandedMenu(null);
    } else {
      setExpandedMenu(menuIndex);
    }
  };

  const menus = [
    { title: 'Fiabilité', description: 'Les annonces postées sur Kasa garentissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulierement vérifiées par nos équipes.' },
    { title: 'Respect', description: 'La bienveillance fait partie des valeurs fondatrices de Kasa.Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.' },
    { title: 'Service', description: 'La bienveillance fait partie des valeurs fondatrices de Kasa.Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.' },
    { title: 'Sécurité', description: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." }
  ];

  return (
    <div className="apropos">
      {menus.map((menu, index) => (
        <div className={`menu ${expandedMenu === index ? 'expanded' : 'collapsed'}`} key={index}>
          <button className="menu-trigger" onClick={() => toggleMenu(index)}>
            <span className="menu-title">{menu.title}</span>
            <span className={`menu-icon ${expandedMenu === index ? 'expanded' : ''}`}>
              <img
                src={expandedMenu === index ? expandIcon : collapseIcon}
                alt={expandedMenu === index ? 'Expand Icon' : 'Collapse Icon'}
              />
            </span>
          </button>
          {expandedMenu === index && <p className="menu-description contenu">{menu.description}</p>}
        </div>
      ))}
    </div>
  );
};

export default Apropos;
