import { useState, useEffect } from 'react';
const url_default = 'https://pokeapi.co/api/v2/pokemon?limit=20';

export const useGetPokemon = () => { 
const [pokemones, setPokemones] = useState([])
const [ nUrl, setNextUrl] = useState('')
const [seeMore, setSeeMore] = useState(true)

const getPokemones = async (url = url_default) => {
    const response = await fetch(url) ;
    const dataPokemones = await response.json();
    const { next, results} = dataPokemones;   

    const newPokemones = await Promise.all(
    results.map( async (pokemon) =>{ //retorna un array de promesas por eso hacemos mas abajo un Promise.all
        const response = await fetch(pokemon.url)        
        const poke = await response.json()


       const abilities = poke.abilities.map(abil => abil.ability.name) //para acceder a las habilidades por q estan dentro de otro array
        return {
            id:poke.id,
            name:poke.name,
            img: poke.sprites.other.dream_world.front_default || poke.sprites.front_default,
            audio: poke.cries.latest,
            abilities
        }
    })
    )
    return { next, newPokemones }

}

const obtainPokemones = async () =>{
    const { next, newPokemones } = await getPokemones();
    setPokemones(newPokemones)
    setNextUrl(next)
}

const morePokemones = async () =>{
    const { next, newPokemones } = await getPokemones(nUrl);
    setPokemones(prev => [...prev, ...newPokemones]) //los pokemones previos y los siguientes
    next === null && setSeeMore(false)
    setNextUrl(next)
}

useEffect(() => { obtainPokemones()}, [])
    return { pokemones, morePokemones, seeMore }
}


/*por nombre*/
export const pokemonOneInfo = async(name) =>{
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
    const data = await response.json()
       console.log(data);
}