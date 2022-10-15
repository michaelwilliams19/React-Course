import React from 'react'
import { heroes } from '../data/heroes'

export const getHeroesByName = (name = '') => {
    return name.length === 0 ? [] : heroes.filter(p => p.superhero.toLowerCase().includes(name)); 
}
