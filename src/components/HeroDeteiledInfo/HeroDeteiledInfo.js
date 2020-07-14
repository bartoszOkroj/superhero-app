import React from 'react';
import './DeteiledHeroInfo.css';
import { getHeroById } from "../../requests.js";


class HeroDeteiledInfo extends React.Component {
    constructor() {
        super();

        this.state= {
            hero: [],
        }
    }

    getAndRenderHero = async (id) => {
            const data = await getHeroById(id);
            const hero = data.data
            this.setState ({hero:hero});
    }

    componentDidMount() {
        let { id } = this.props.match.params
        if (id==='random') {
            id = Math.floor(Math.random()*731);
            this.getAndRenderHero(id)
        } else {
            this.getAndRenderHero(id)
        }
    }

    render() {
        const {id, name, img, powerstats, biography, appearance, connections, work } = this.state.hero;
       // const {'eye-color':eye, gender, 'hair-color':hair, height, race, weight} = appearance;
        return (
            <section>
                <h1>Whatever</h1>
                <h1>{name}</h1>
                <h1>{id}</h1>
                <h1>{img}</h1>
            </section>
        )
    }
}

export default HeroDeteiledInfo;
