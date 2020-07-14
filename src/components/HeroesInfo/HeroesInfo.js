import React from 'react';
import './HeroesInfo.css';
import { Link } from 'react-router-dom';

function HeroesInfo (params) {
   const {id, name, img, powerstats} = params;
   const {combat, durability, intelligence, power, speed, strength } = powerstats;
    return (
        <article className={'initial_hero_info'}>
            <h2>{name}</h2>
            <Link to={`hero/${id}`}><img src={img.url} alt={`picture of ${name}`}/></Link>
            <div className={'powerstats'}>
                <p>combat: {combat}</p>
                <p>durability: {durability}</p>
                <p>intelligence: {intelligence}</p>
                <p>power: {power}</p>
                <p>speed: {speed}</p>
                <p>strength: {strength}</p>
            </div>
        </article>
    );
}

export default HeroesInfo;