import React from 'react';
import './HeroesList.css';
import { getHeroById } from "../../requests.js";
import HeroesInfo from "../HeroesInfo/HeroesInfo.js";

const favoritesHeroesIds = [2, 17, 70, 176, 222, 666];

class HeroesList extends React.Component {
    constructor() {
        super();

        this.state= {
            heroesList: [],
        }
    }

    getAndRenderHeroes = async () => {
    const heroes = [];
    for (const id of favoritesHeroesIds) {
        const data = await getHeroById(id);
        heroes.push(data.data);
    }
        this.setState ({heroesList:heroes});
    }

    componentDidMount() {
        this.getAndRenderHeroes()
    }

    render() {
        return (
            <section className={'initial_heroes_list'}>
                        {this.state.heroesList.map(({id, name, image , powerstats}) =>{
                            return <HeroesInfo key={id} id={id} name={name} img={image} powerstats={powerstats} />
                            })}
            </section>
        )
    }
}

export default HeroesList;
