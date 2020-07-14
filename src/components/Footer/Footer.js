import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    constructor() {
        super();

    }

    render() {
        return (
            <footer>
                <div className={'container'}>
                    <p>All credits to <a href="https://superheroapi.com/">Superhero API</a></p>
                    <p>B. Okroj all rights reserved</p>
                </div>
            </footer>
        )
    }
}

export default Footer;