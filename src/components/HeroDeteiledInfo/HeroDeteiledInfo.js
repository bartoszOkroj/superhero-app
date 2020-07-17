import React from 'react';
import './DeteiledHeroInfo.css';
import { getHeroById } from "../../requests.js";
import Loader from "../Loader/Loader.js";

class HeroDeteiledInfo extends React.Component {
    constructor() {
        super();

        this.state= {
            isLoading: 'true',
            hero: {
                name: '',
                id: '',
                powerstats: {},
                biography: {
                    aliases: [],
                },
                appearance: {
                    height: [],
                    weight: [],
                },
                work: {},
                connections: {},
                image: {},
            }
        }
    }

    getAndRenderHero = async (id) => {
            const data = await getHeroById(id);
            const hero = data.data
            this.setState ({hero:hero});
            this.setState({isLoading:false});
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
        const id = this.state.hero.id;
        const name = this.state.hero.name;
        const img = this.state.hero.image.url;
        const {combat, durability, intelligence, power, speed, strength } = this.state.hero.powerstats
        const {'full-name':fullName,'alter-egos':alterEgos, aliases, 'place-of-birth':placeOfBirth, 'first-appearance':firstAppearance, publisher, alignment} = this.state.hero.biography;
        const {gender, race, height, weight, 'eye-color':eyeColor, 'hair:color':hairColor} = this.state.hero.appearance;
        const {occupation, base} = this.state.hero.work;
        const {'group-affiliation':groupAffiliation, relatives, } = this.state.hero.connections
        return (
            <>
                <h1>{name}</h1>
                {this.state.isLoading ? <Loader/> :
                <section className={'deteiledHeroInfo'}>
                    <img src={img} alt={`picture of ${name}`}/>
                    <div className={'box'}>
                        <article className={'info'}>
                            <h2>General Info:</h2>
                            <ul className={'generalInfo'}>
                                <li>name: {name}</li>
                                <li>full-name: {fullName}</li>
                                <li>alter-egos: {alterEgos}</li>
                                <li>aliases: {aliases.map ((alias) =>{
                                    return <span>{alias}, </span>
                                })}</li>
                                <li>place of birth: {placeOfBirth}</li>
                                <li>first appearance: {firstAppearance}</li>
                                <li>publisher: {publisher}</li>
                                <li>alignment: {alignment}</li>
                            </ul>
                        </article>
                        <article className={'info'}>
                            <h2>Appearence:</h2>
                            <ul className={'appearanceInfo'}>
                                <li>gender: {gender}</li>
                                <li>race: {race}</li>
                                <li>height: {height[1]}</li>
                                <li>weight: {weight[1]}</li>
                                <li>color of eyes: {eyeColor}</li>
                                <li>color of hair: {hairColor}</li>
                            </ul>
                        </article>
                        <article className={'info'}>
                            <h2>Connections:</h2>
                            <ul className={'connectionsInfo'}>
                                <li>group affiliation: {groupAffiliation}</li>
                                <li>relatives: {relatives}</li>
                            </ul>
                        </article>
                        <article className={'info'}>
                            <h2>PowerStats:</h2>
                            <ul className={'statsInfo'}>
                                <li>combat: {combat}</li>
                                <li>durability: {durability}</li>
                                <li>intelligence: {intelligence}</li>
                                <li>power: {power}</li>
                                <li>speed: {speed}</li>
                                <li>strength: {strength}</li>
                            </ul>
                        </article>
                        <article className={'info'}>
                            <h2>Work:</h2>
                            <ul className={'workInfo'}>
                                <li>occupation: {occupation}</li>
                                <li>base: {base}</li>
                            </ul>
                        </article>
                    </div>
                </section>}
            </>
        )
    }
}

export default HeroDeteiledInfo;
