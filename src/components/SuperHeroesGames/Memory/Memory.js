import React from 'react';
import './Memory.css';
import {Link} from "react-router-dom";
import {getHeroById} from "../../../requests";
import Loader from "../../Loader/Loader";

let firstCardClicked = 0 ;
let secondCardClicked = 0 ;

class Memory extends React.Component {

    constructor() {
        super();
        this.state= {
            heroesList: [],
            isLoading: true,
            isFirstCardClicked: false,
            isSecondCardClicked: false,
            firstCardClicked: 0,
            secondCardClicked: 0,
        }
        this.clicked = this.clicked.bind(this)
    }

    getAndRenderHeroes = async (doubledheroesIds) => {
        const heroes = [];
        for (const id of doubledheroesIds) {
            const data = await getHeroById(id);
            heroes.push(data.data);
        }
        this.setState ({heroesList:heroes});
        this.setState ({isLoading:false});
    }

    getAndMixedHeroesIds = () => {
        let heroesIds = [];
        for (let i=0; i<=17; i++ ) {
            let heroId = Math.floor(Math.random()*731);
            if (!heroesIds.includes(heroId)) {
                heroesIds.push(heroId);
            }
            else {
                i--;
            }
        }
        let doubledheroesIds = heroesIds.concat(heroesIds);
        for (let i=doubledheroesIds.length-1; i>0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [doubledheroesIds[i], doubledheroesIds[j]] = [doubledheroesIds[j], doubledheroesIds[i]];
        }
        return doubledheroesIds;
    }

     clicked(event) {
        if (firstCardClicked === 0) {
            firstCardClicked = event.target.id;
            console.log('pierwsze klikniecie')
            console.log(event.target.key)
            let card = document.getElementById(firstCardClicked);
            card.classList.add('heroPicCovered');
        }
        else if (secondCardClicked === 0) {
            secondCardClicked = event.target.id;
            if (firstCardClicked === secondCardClicked) {
                console.log('drugie klikniecie')
                console.log(secondCardClicked)
                console.log('succses');
            }
            else {
                console.log('try again');
            }
            firstCardClicked = 0;
            secondCardClicked = 0;
        }
    }

    componentDidMount() {
        let doubledheroesIds = this.getAndMixedHeroesIds();
        this.getAndRenderHeroes(doubledheroesIds)
    }

    render() {
        return (
            this.state.isLoading ? <Loader /> :
                    <section className={'heroPicList'}>
                        {this.state.heroesList.map(({id, image}) =>{
                            return <div id={id} className={'heroPic'} onClick={this.clicked}><img src={image.url} key={id} id={id} alt={`picture of hero nr ${id}`}/></div>
                        })}
                    </section>
        )
    }
}

export default Memory;