import React, { useMemo } from 'react'
import { getHeroeByPublisher } from '../../helpers/getHeroeByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {

    //hacemos uso de este hook para que solamente se vuelva a ejecutar este metodo solamente si cambia el publisher.
    //En caso de no cambiarlo, va a tener esa informacion guardada y no va a consultar cada vez que renderice este mismo componente.
    //Si viene por otro lado por primera vez claramente se va a ejecutar. Lo mismo al ejecutar getHeroeById
    const heroes = useMemo( () => getHeroeByPublisher(publisher), [publisher]);

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn">
            
                {
                    heroes.map(hero => (
                    <HeroCard key={hero.id} {...hero} />)
                    )
                }
        </div>
    )
}
