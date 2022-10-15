import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"


export const getPokemons = ( pag = 0) => {
    return async( dispatch, getState ) => {
        dispatch(startLoadingPokemons());

        /* PETICION API A TRAVES DE FETCH
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`);
        const data = await resp.json();
         */

        // PETICION DE API A TRAVES DE AXIOS
        // const { data } = await pokemonApi.get(`pokemon?limit=10&offset=${pag * 10}`);
        const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${ pag * 10 }`);
        // console.log(data);

        dispatch(setPokemons({ pokemons: data.results, page: pag + 1}));
    }
}