import axios from 'axios';

const accessToken = '3062745497127182'

export const  getHeroById = id => {
    return ( axios.get(`https://superheroapi.com/api/${accessToken}/${id}/`))
}

export const  getHeroPicById = id => {
    return ( axios.get(`https://superheroapi.com/api/${accessToken}/${id}/image`))
}

export const  getHeroBioById = id => {
    return ( axios.get(`https://superheroapi.com/api/${accessToken}/${id}/biography`))
}

export const getHeroByName = name => {
    return axios.get(`https://superheroapi.com/api/${accessToken}/search/${name}`)
}

