import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import './App.css';
import HeroesList from "./components/HeroesList/HeroesList.js";
import HeroDeteiledInfo from "./components/HeroDeteiledInfo/HeroDeteiledInfo.js";
import Nav from "./components/Nav/Nav.js";
import SearchHero from "./components/SearchHero/SearchHero.js";
import Footer from "./components/Footer/Footer.js";
import Memory from "./components/SuperHeroesGames/Memory/Memory";

 class App extends React.Component {

     render() {
        return (
            <Router>
                <Nav/>
                <main>
                    <div className="container container--main">
                        <Switch>
                            <Route exact path="/" component={HeroesList} />
                            <Route path="/hero/:id" component={HeroDeteiledInfo} />
                            <Route path="/search/:name" component={SearchHero} />
                            <Route path="/games/memory" component={Memory} />
                        </Switch>
                    </div>
                </main>
                <Footer/>
            </Router>
        );
    }
}

export default App;
