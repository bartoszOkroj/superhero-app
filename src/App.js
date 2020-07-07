import React from 'react';
import './App.css';
import { getHeroById } from './requests'

const favoritesHeroesIds = [2, 17, 53, 176, 222];

 class App extends React.Component {
    constructor() {
        super();

        this.state= {
            heroList: [],
        }
    }

     getAndRenderHeroes = () => {
         const heroes = [];
          favoritesHeroesIds.forEach( async (id)  => {
           await getHeroById(id).then(resp => {
                  heroes.push(resp.data.id);
               })
              this.setState ({heroList:heroes});
              console.log(this.state.heroList);
              })
    }
     componentDidMount() {
        this.getAndRenderHeroes()
    }

    render() {
        return (
            <main> whatever</main>
        )
    }
}

export default App;
