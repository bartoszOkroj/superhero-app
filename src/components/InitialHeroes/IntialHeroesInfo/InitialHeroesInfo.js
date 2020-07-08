import React from 'react';
//import './InitialHeroesInfo.css';
import { Link } from 'react-router-dom';

function InitialHeroesInfo (params) {
   const {id, name, img, powerstats} = params;
    return (
        <article className={'initial_hero_info'}>
            <Link to={`hero/${id}`}><img src={img.url} alt={`picture of ${name}`}/></Link>
            <h2>{name}</h2>
        </article>
    );
}

export default InitialHeroesInfo;