import axios from 'axios';

const accessToken = '3062745497127182'

export const  getHeroById = id => {
    return ( axios.get(`https://superheroapi.com/api/${accessToken}/${id}`))
}
