import axios from 'axios'

export const pokemonApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
});

//permite crear una config estandar que me ayuda a no repetir codigo.
