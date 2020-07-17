import React from 'react';
import './Nav.css';
import {Link} from "react-router-dom";

class Nav extends React.Component {
    constructor() {
        super();

        this.state= {
           heroName: '',
           heroId: 'random',
        }
    }

    onInputChange = event => {
        let name = '';
        name = event.target.value;
        this.setState({heroName: name});
    };

    render() {
        return (
            <nav>
                <div className={'container'}>
                    <p>logo</p>
                    <Link to={`/hero/${this.state.heroId}`}><button className={'btn'}>Radnom Hero</button></Link>
                    <div className={'search_hero'}>
                        <input onChange={this.onInputChange} />
                        <Link to={`/search/${this.state.heroName}`}><button className={'btn'}>Find Hero</button></Link>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav;
