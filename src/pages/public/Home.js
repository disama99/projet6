import React from 'react';
import { Link } from 'react-router-dom';
import data from './data.json';
import EnteteAccueil from '@/pages/public/EnteteAccueil';

import './Home.scss';

const Home = () => {
 

  return (
    <div className='Home'>
      <EnteteAccueil />
      <div className='teste'>
        {data.map(item => (
          <Link to={`/logement/${item.id}`} key={item.id} className="card">
            <img src={item.cover} alt={`Illustration de ${item.title}`} />
            <h2>{item.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
