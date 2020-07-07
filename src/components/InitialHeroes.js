import React from 'react';
//import './InitialHeroes.css';
import { getHeroById } from "../requests.js";
import InitialHeroesInfo from "./InitialHeroesInfo.js";

const favoritesHeroesIds = [2, 17, 53, 176, 222];

class InitialHeroes extends React.Component {
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
        this.getAndRenderHeroes()
    }

    render() {
        return (
            <section>
                <h2>jkhniugluyg</h2>
            </section>
        )
    }
}

export default InitialHeroes;
