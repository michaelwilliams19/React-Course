import React, { useMemo } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { getHeroeById } from '../../helpers/getHeroeById';
import { heroesImages } from '../../helpers/heroImages';
// import batman from '../../assets/dc-batman.jpg'


export const HeroScreen = () => {

  const params = useParams();
  const navigate = useNavigate();

  const hero = useMemo( () =>  getHeroeById(params.heroeId), [params.heroeId]); 
  
  if (!hero) 
  {
    return <Navigate to="/" />
  }

  const {id, superhero, publisher, alter_ego, first_appearance, characters} = hero;
  const imgPath = `/assets/${hero.id}.jpg`;

  const handleReturn = () => {
    navigate(-1); //regresa a la pagina anterior.
  }

  return (
    <div className="row mt-5 ">
       <div className="col-4">
         <img 
          // src={imgPath} Esto funciona si la carpeta assets esta dentro de Public.
          // src={batman} //recurso estatico
          src = {heroesImages(`./${hero.id}.jpg`)}
          alt={superhero} className="img-thumbnail animate__animated animate__backInLeft" />
       </div>

       <div className="col-8 animate__animated animate__backInRight">
         <h3>{hero.superhero}</h3>
         <ul className="list-group">
            <li className="list-group-item"> <b> Alter ego: </b> {alter_ego} </li>
            <li className="list-group-item"> <b> Publisher: </b> {publisher} </li>
            <li className="list-group-item"> <b> First Appearance: </b> {first_appearance} </li>
         </ul>


         <h5 className="mt-3">Characters</h5>
         <p>{characters}</p>
         <button className="btn btn-outline-info" onClick={handleReturn} >Regresar</button>
       </div>

    </div>
  )
}
