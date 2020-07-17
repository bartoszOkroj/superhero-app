import React from 'react';
import './SearchHero.css';
import { getHeroByName } from "../../requests.js";
import HeroesInfo from "../HeroesInfo/HeroesInfo.js";
import Loader from "../Loader/Loader";

class SearchHero extends React.Component {
    constructor(props) {
        super();
        this.state = {
            isLoading: true,
            searchName: props.match.params.name,
            searchHeroesList: [],
            errorInfo: ''
        }
    }

    searchForHero = () => {
        const {searchName} = this.state
        getHeroByName(searchName).then(searchResults => {
            const { data } = searchResults;
            if (data.error) {
                this.setState({errorInfo: data.error})
                this.setState({searchHeroesList: []})
                this.setState({isLoading:false})
                return;
            }
            const { results } = data;
            this.setState({searchHeroesList: results})
            this.setState({errorInfo: ''})
            this.setState({isLoading:false})
        })
    }

    componentDidMount() {
        this.searchForHero();
    };

    //componentDidUpdate(prevProps) {



    render() {
        return (
            <>
                {this.state.isLoading ? <Loader /> :
                    <section className={'initial_heroes_list'}>
                    {this.state.errorInfo && <h2>{this.state.errorInfo}</h2>}
                    {this.state.searchHeroesList.map(({id, name, image , powerstats}) =>{
                        return <HeroesInfo key={id} id={id} name={name} img={image} powerstats={powerstats} />
                    })}
                </section>}
            </>
        )
    }
}

export default SearchHero;
