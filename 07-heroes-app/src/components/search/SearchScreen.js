import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useNavigate, useLocation } from 'react-router-dom';
import { getHeroesByName } from '../../helpers/getHeroesByName';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../hero/HeroCard';

export const SearchScreen = () => {
  
  const navigate = useNavigate();
  const location = useLocation();

  //me traigo el parametro que se llama q, el cual va a contener el nombre del heroe a buscar.
  const { q = '' } = queryString.parse(location.search);


  //el input va a tener como valor por defecto el valor de q. 
  //Es decir, si entro por primera vez q va a ser vacio y no trae nada. Si por parametro q tiene valor entonces mostrara ese valor en el input
  const initialForm = {
    searchText: q
  };

  //este hook es para poder escribir en el input.
  const [ formValues, handleInputChange ] = useForm( initialForm );
  const { searchText } = formValues

  //se ejecuta el getHeroesByName siempre que el parametro q cambie. Tip: "Q" va a cambiar cuando se le de al boton de buscar nomas.
  const heroesByName = useMemo( () => getHeroesByName(q), [q]) ;

  const handleSearch = (e) => {
    e.preventDefault();

    navigate(`?q=${searchText}`);
  }
  
  return (
    <>
        <h1 className="mt-3">Busquedas</h1>
        <hr />

        <div className="row">
          <div className="col-5">
            <h4>Buscar</h4> <hr />
          
            <form onSubmit={ handleSearch }>
              <input type="text" placeholder="Spiderman..." className="form-control" name="searchText" autoComplete="off" value={searchText} onChange={handleInputChange} />
              <button type="submit" className="btn btn-outline-primary mt-1">Buscar</button>
            </form>
          
          </div>

          <div className="col-7">
            <h4>Resultados</h4> <hr />

            {
              (q === '') ? <div className="alert alert-info">Debe buscar un heroe</div>
               : (heroesByName.length === 0) && <div className='alert alert-danger'>No se encontraron resultados: {q}</div>
            }

            {
              heroesByName.map(hero => (
                <HeroCard key={hero.id} {...hero} />) 
              )
            }
          </div>
        </div>
    </>
  )
}
