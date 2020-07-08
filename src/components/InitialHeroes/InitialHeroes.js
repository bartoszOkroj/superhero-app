import React from 'react';
//import './InitialHeroes.css';
import { getHeroById } from "../../requests.js";
import InitialHeroesInfo from "./IntialHeroesInfo/InitialHeroesInfo.js";

const favoritesHeroesIds = [2, 17, 70, 176, 222];

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
                <div className={'container'}>
                    <div className={'initial_hereos_list'}>
                        {this.state.heroesList.map(({id, name, image , powerstats}) =>{
                            return <InitialHeroesInfo key={id} id={id} name={name} img={image} powerstats={powerstats} />
                            })}
                    </div>
                </div>
            </section>
        )
    }
}

export default InitialHeroes;
