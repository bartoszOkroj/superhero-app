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

 class App extends React.Component {

     render() {
        return (
            <Router>
                <Nav/>
                <main>
                    <div className="container">
                        <Switch>
                            <Route exact path="/" component={HeroesList} />
                            <Route path="/hero/:id" component={HeroDeteiledInfo} />
                            <Route path="/search/:name" component={SearchHero} />
                        </Switch>
                    </div>
                </main>
            </Router>
        );
    }
}

export default App;
