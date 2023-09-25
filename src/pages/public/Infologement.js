import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from './data.json';
import arrowLeft from '@/pages/public/logokasa/arrow_left.png';
import arrowRight from '@/pages/public/logokasa/arrow_right.png';
import expandIcon from '@/pages/public/logokasa/expandIcon.png';
import collapseIcon from '@/pages/public/logokasa/collapseIcon.png';
import starActive from '@/pages/public/logokasa/starActive.png';
import starInactive from '@/pages/public/logokasa/starInactive.png';

import './infologement.scss';

const Infologement = () => {
    const { id } = useParams();
    const [logement, setLogement] = useState(null);
    const [index, setIndex] = useState(0);
    const [descriptionOpen, setDescriptionOpen] = useState(false);
    const [equipmentsOpen, setEquipmentsOpen] = useState(false);

    const toggleDescription = () => {
        setDescriptionOpen(!descriptionOpen);
        setEquipmentsOpen(false); // Ferme les détails liés aux équipements si ouverts
    };

    const toggleEquipments = () => {
        setEquipmentsOpen(!equipmentsOpen);
        setDescriptionOpen(false); // Ferme les détails liés à la description si ouverte
    };

    React.useEffect(() => {
        // Recherche le logement par son ID dans le fichier data.json
        const logementTrouve = data.find(item => item.id === id);

        if (logementTrouve) {
            setLogement(logementTrouve);
        } else {
            console.error('Logement introuvable.');
        }
    }, [id]);

    if (!logement) {
        return <p className='space'>Chargement en cours...</p>;
    }

    const RatingStars = (rating) => {
        const maxRating = 5;
        const stars = [];

        // Boucle générant les étoiles pleines
        for (let i = 0; i < rating; i++) {
            stars.push(<img key={i} src={starActive} alt="Étoile pleine" />);
        }

        // Boucle générant les étoiles vides
        for (let i = rating; i < maxRating; i++) {
            stars.push(<img key={i} src={starInactive} alt="Étoile vide" />);
        }

        return stars;
    };

    const previous = () => {
        if (index === 0) {
            // Si première photo, passage à la dernière.
            setIndex(logement.pictures.length - 1);
        } else {
            // Passage à la photo précédente.
            setIndex(index - 1);
        }
    };

    const next = () => {
        if (index === logement.pictures.length - 1) {
            // Si dernière photo, passage à la première.
            setIndex(0);
        } else {
            // Passage à la photo suivante.
            setIndex(index + 1);
        }
    };

    return (
        <div className="Infologement">
            <div className="pictures">
                <img src={arrowLeft} alt="Précédent" onClick={previous} className="nav_arrowleft nav_arrow" />
                <img src={logement.pictures[index]} alt={`Illustration ${index + 1}`} className="slide" />
                <img src={arrowRight} alt="Suivant" onClick={next} className="nav_arrowright nav_arrow" />
                <div className='indicators'>
                    {index + 1}/{logement.pictures.length}
                </div>
            </div>
            <div className='spacement1'>
                <h2>{logement.title}</h2>
                <div className="host">
                    <p className='host-name'>{logement.host.name}</p>
                    <img src={logement.host.picture} alt={`Hôte : ${logement.host.name}`} className='hostPicture' />
                </div>
            </div>
            <p>{logement.location}</p>
            <div className='spacement'>
                <div className="tags tagsmob">
                    {logement.tags.map((tag, index) => (
                        <li key={index} className='tag'>{tag}</li>
                    ))}
                </div>
                <div className="rating">
                    {RatingStars(logement.rating).map((star, index) => (
                        <span key={index}>{star}</span>
                    ))}
                </div>
            </div>
            <div className='details-container'>
                <div className='details-wrapper'>
                    <div className='description'>
                        <h3>Description :</h3>
                        <button onClick={toggleDescription} className="detail-button">
                            {descriptionOpen ? (
                                
                                <img src={expandIcon} alt="Expand Icon" />
                            ) : (
                                <img src={collapseIcon} alt="Collapse Icon" />
                            )}
                        </button>
                    </div>
                    {descriptionOpen && (
                        <div className="details-content">
                            <p>{logement.description}</p>
                        </div>
                    )}
                </div>
                <div className='details-wrapper'>
                    <div className='equipments'>
                        <h3>Équipements :</h3>
                        <button onClick={toggleEquipments} className="detail-button">
                            <span>
                                {equipmentsOpen ? (
                                    <img src={expandIcon} alt="Expand Icon" />
                                ) : (
                                    
                                    <img src={collapseIcon} alt="Collapse Icon" />
                                )}
                            </span>
                        </button>
                    </div>
                    {equipmentsOpen && (
                        <div className="details-content">
                            <ul>
                                {logement.equipments.map((equipment, index) => (
                                    <li key={index}>{equipment}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Infologement;
