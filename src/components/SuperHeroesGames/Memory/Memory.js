import React from 'react';
import './Memory.css';
import {getHeroById} from "../../../requests";
import Loader from "../../Loader/Loader";
import {Link} from "react-router-dom";

let firstCardClicked = 0 ;
let secondCardClicked = 0 ;
let firstCardToFlip;
let secondCardToFlip;
let foundCards = 0;
let turnsCounter = 0;

class Memory extends React.Component {

    constructor() {
        super();
        this.state= {
            heroesList: [],
            isLoading: true,
            isFinished: false,
            foundCards: 0,
            turnsCounter: 0,
        }
        this.clickedCard = this.clickedCard.bind(this)
        this.clickedBtn = this.clickedBtn.bind(this)
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

     clickedCard(event) {
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
            turnsCounter++;
            this.setState({turnsCounter:turnsCounter});
            setTimeout(() => {
                if (firstCardClicked === secondCardClicked) {
                    foundCards ++;
                    this.setState({foundCards:foundCards});
                    if (foundCards === 18) {
                        this.setState({isFinished: true});
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
            }, 2000);
        }
    }

    clickedBtn() {
        foundCards = 0;
        this.setState({foundCards:foundCards});
        turnsCounter = 0;
        this.setState({turnsCounter:turnsCounter});
        this.setState ({isLoading:true});
        this.setState({isFinished:false});
        let doubledheroesIds = this.getAndMixedHeroesIds();
        this.getAndRenderHeroes(doubledheroesIds);
    }

    componentDidMount() {
        let doubledheroesIds = this.getAndMixedHeroesIds();
        this.getAndRenderHeroes(doubledheroesIds);
    }

    render() {
        return (
            this.state.isLoading ? <Loader /> :(
                this.state.isFinished ?
                    <section className={'finishedGame'}>
                        <h1>Congratulations, you did it in {this.state.turnsCounter} turns, you're the best! Wanna again try with different heroes?</h1>
                        <article className={'memoryFinishedBtns'}>
                            <Link to={`/`}><button className={'btn_memory'}>Go to home page</button></Link>
                            <button className={'btn_memory'} onClick={this.clickedBtn}>Play again</button>
                        </article>
                    </section>
                    :
                    <section className={'gamePanel'}>
                        <article className={'gameStats'}>
                            <h1>Found Heroes: {this.state.foundCards} </h1>
                            <h1>Turns: {this.state.turnsCounter} </h1>
                        </article>
                        <article className={'heroPicList'}>
                            {this.state.heroesList.map(({id, image, uniNr}) =>{
                                return <div id={uniNr} className={'heroPic heroPicCovered'} onClick={this.clickedCard}><img src={image.url} id={uniNr} alt={`picture of hero nr ${id}`}/></div>
                            })}
                        </article>
                    </section>)
        )
    }
}

export default Memory;