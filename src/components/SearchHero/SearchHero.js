import React from 'react';
import './SearchHero.css';
import { getHeroByName } from "../../requests.js";
import HeroesInfo from "../HeroesInfo/HeroesInfo.js";
import {getHeroById} from "../../requests.js";

const favoritesHeroesIds = [2, 17, 70, 176, 222, 666];

class SearchHero extends React.Component {
    constructor(props) {
        super();
        console.log(props.match.params.name);
        this.state = {
            searchName: props.match.params.name,
            searchHeroesList: [],
            errorInfo: ''
        }
    }

    searchForHero = () => {
        const {searchName} = this.state
        getHeroByName(searchName).then(searchResults => {
            const { data } = searchResults;
            if (data.error) {
                this.setState({errorInfo: data.error})
                this.setState({searchHeroesList: []})
                return;
            }
            const { results } = data;
            this.setState({searchHeroesList: results})
            this.setState({errorInfo: ''})
        })
    }

    componentDidMount() {
        this.searchForHero();
    };

    render() {
        return (
            <section className={'initial_heroes_list'}>
                { this.state.errorInfo && <h2>{this.state.errorInfo}</h2>}
                {this.state.searchHeroesList.map(({id, name, image , powerstats}) =>{
                    return <HeroesInfo key={id} id={id} name={name} img={image} powerstats={powerstats} />
                })}
            </section>
        )
    }
}

export default SearchHero;
