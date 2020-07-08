import React from 'react';
//import './DeteiledHeroeInfo.css';
import { getHeroById } from "../../requests.js";


class HeroDeteiledInfo extends React.Component {

    constructor() {
        super();
        this.state= {
        }

    }
    componentDidMount() {
        const { id } = this.props.match.params
        console.log(id);
    }

    render() {
        return (
            <section>
                <h1>Whatever</h1>
            </section>
        )
    }
}

export default HeroDeteiledInfo;
