import React from 'react';
import './Nav.css';
import {Link} from "react-router-dom";

const name = 'batman';
class Nav extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <nav>
                <div className={'container'}>
                    <p>logo</p>
                    <div className={'search_hero'}>
                        <input type={'text'}/>
                        <Link to={`search:${name}`}><button className={'btn'}>Szukaj</button></Link>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav;
