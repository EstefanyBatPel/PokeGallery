import {pokemonOneInfo} from '../../services/pokemonServices';
import { useState, useEffect } from 'react';   
import { useParams } from "react-router";

const Details = () => {
      const [isPlaying, setIsPlaying] = useState(false);
      const { id } = useParams();
      const [ pokemon, setPokemon ] = useState(null);

      useEffect(() => {
        const fetchData = async () =>{
            const response = await pokemonOneInfo(id); 
            setPokemon(response); 
        }
        fetchData()
    }, [id]);


    const sound = (audioSrc) => {
        const audio = new Audio(audioSrc);
        if (isPlaying) {
          audio.pause();
        } else {
          audio.play();
        }
        setIsPlaying(!isPlaying);
      };


  return (
    <>
      <div>
          {pokemon ? (
           <article key={pokemon.id}>
           <h1 className='n'>Nombre: {pokemon.name}</h1><br />
           <img src={pokemon.sprites.other.dream_world.front_default} alt='img-animal' className='image' onClick={() => sound(pokemon.cries.latest)}/>
           <h3 className='title-ability'>Habilidades</h3>
           <p>{pokemon.abilities?.map(ability => <span key={ability}>{ability.ability.name}</span>)}</p>  
         </article>
          ) : (
            <p>Loading data...</p>
          )}
        </div>
    </>
  )
}

export default Details;

