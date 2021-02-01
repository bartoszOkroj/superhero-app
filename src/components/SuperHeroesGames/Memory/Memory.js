import React from 'react';
import './Memory.css';
import {getHeroById} from "../../../requests";
import Loader from "../../Loader/Loader";

let firstCardClicked = 0 ;
let secondCardClicked = 0 ;
let firstCardToFlip;
let secondCardToFlip;
let counter = 0;

class Memory extends React.Component {

    constructor() {
        super();
        this.state= {
            heroesList: [],
            isLoading: true,
            isFinished: false,
            counter: 0,
        }
        this.clicked = this.clicked.bind(this)
    }

    getAndRenderHeroes = async (doubledheroesIds) => {
        const heroes = [];
        for (const id of doubledheroesIds) {
            const data = await getHeroById(id);
            heroes.push(data.data);
        }
        for (let i=0; i<heroes.length; i++){
            heroes[i].uniNr = i;
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
            firstCardClicked = event.target.src;
            firstCardToFlip = document.getElementById(event.target.id);
            firstCardToFlip.classList.remove('heroPicCovered');
            firstCardToFlip.classList.add('heroPicUncovered');
            console.log('pierwsze klikniecie')
        }
        else if (secondCardClicked === 0) {
            secondCardClicked = event.target.src;
            secondCardToFlip = document.getElementById(event.target.id);
            secondCardToFlip.classList.remove('heroPicCovered');
            secondCardToFlip.classList.add('heroPicUncovered');
            console.log('drugie klikniecie');
            setTimeout(() => {
                if (firstCardClicked === secondCardClicked) {
                    console.log('succses');
                    counter ++;
                    if (counter === 18) {
                        this.setState({isFinished: true})
                        console.log(this.state.isFinished);
                    }
                }
                else {
                    console.log('try again');
                    firstCardToFlip.classList.add('heroPicCovered');
                    secondCardToFlip.classList.add('heroPicCovered');
                    firstCardToFlip.classList.remove('heroPicUncovered');
                    secondCardToFlip.classList.remove('heroPicUncovered');
                }
                firstCardClicked = 0;
                secondCardClicked = 0;
            }, 3);
            /* function checkCards () {
                if (firstCardClicked === secondCardClicked) {
                    console.log('succses');
                    counter ++;
                    if (counter === 18) {
                        this.setState({isFinished: true})
                    }
                }
                else {
                    console.log('try again');
                    firstCardToFlip.classList.add('heroPicCovered');
                    secondCardToFlip.classList.add('heroPicCovered');
                    firstCardToFlip.classList.remove('heroPicUncovered');
                    secondCardToFlip.classList.remove('heroPicUncovered');
                }
                firstCardClicked = 0;
                secondCardClicked = 0;
            } */
        }
    }

    componentDidMount() {
        let doubledheroesIds = this.getAndMixedHeroesIds();
        this.getAndRenderHeroes(doubledheroesIds);
    }

    render() {
        return (
            this.state.isLoading ? <Loader /> :(
                this.state.isLoading ? <div>wanna try again?</div> :
                <section className={'heroPicList'}>
                {this.state.heroesList.map(({id, image, uniNr}) =>{
                    return <div id={uniNr} className={'heroPic heroPicCovered'} onClick={this.clicked}><img src={image.url} id={uniNr} alt={`picture of hero nr ${id}`}/></div>
                })}
            </section>)
        )
    }
}

export default Memory;