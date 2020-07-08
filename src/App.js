import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import './App.css';
import InitialHeroes from "./components/InitialHeroes/InitialHeroes.js";
import HeroDeteiledInfo from "./components/HeroDeteiledInfo/HeroDeteiledInfo.js";

 class App extends React.Component {

     render() {
        return (
            <>
                <Router>
                    <main>
                        <div className="container">
                            <Switch>
                                <Route exact path="/" component={InitialHeroes} />
                                <Route path="/hero/:id" component={HeroDeteiledInfo} />
                            </Switch>
                        </div>
                    </main>
                </Router>
            </>
        );
    }
}

export default App;
