import React from 'react';
import './Nav.css';
import {Link} from "react-router-dom";
import '../AutocompleteInput/AutocompleteInput.js';
//import {getHeroBioById} from "../../requests";
//import AutoCompleteInput from "../AutocompleteInput/AutocompleteInput";

class Nav extends React.Component {
    constructor() {
        super();

        this.state= {
           heroName: '',
           heroId: 'random',
        }
    }

   /* getHeroesNames = async () => {
        const heroes = [];
        for (let i=0; i<729; i++) {
            const data = await getHeroBioById(i);
            heroes.push(data.data.name);
        }
        this.setState ({heroesNames:heroes});
        console.log(this.state.heroesNames);
    } */

    onInputChange = event => {
        let name = '';
        name = event.target.value;
        this.setState({heroName: name});
        console.log('test');
    };

    componentDidMount() {
     //   this.getHeroesNames();
    }

    render() {
        return (
            <nav>
                <div className={'container'}>
                    <Link to={`/`}><h1>SUPERHERO</h1></Link>
                    <div className={'get_heroes'}>
                        <Link to={`/hero/${this.state.heroId}`}><button className={'btn_nav'}>Radnom Hero</button></Link>
                        <Link to={`/games/memory`}><button className={'btn_nav'}>Memory Game</button></Link>
                        <div className={'search_hero'}>
                            <input suggestions={this.state.heroesNames} onChange={this.onInputChange}/>
                            <Link to={`/search/${this.state.heroName}`}><button className={'btn_nav'}>Find Hero</button></Link>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav;
