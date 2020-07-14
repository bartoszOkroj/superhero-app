import React from 'react';
import './SearchHero.css';
import { getHeroByName } from "../../requests.js";
import HeroesInfo from "../HeroesInfo/HeroesInfo.js";
import {getHeroById} from "../../requests.js";

const favoritesHeroesIds = [2, 17, 70, 176, 222, 666];

class SearchHero extends React.Component {
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
        console.log(this.state.heroesList);
    }

    componentDidMount() {
        const { name } = this.props.match.params
        console.log(name);
      //  this.getAndRenderHero(id)
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

export default SearchHero;
