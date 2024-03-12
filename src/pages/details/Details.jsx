// import { useGetPokemon } from '../../services/pokemonServices';
import { useState, useEffect } from 'react';
import { useParams } from "react-router";
// import { pokemonInfo } from '../../services/pokemonServices';
import { pokemonOneInfo } from '../../services/pokemonServices';

const Details = () => {
    const { id } = useParams();
    const [isPlaying, setIsPlaying] = useState(false);
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
    <h1>Hola</h1>
    <div>
          {pokemon ? (
           <article key={pokemon.id}>
           <h1 className='n'>{pokemon.name}</h1><br/>
           <img src={pokemon.sprites.front_default} alt='img-animal' className='image' onClick={() => sound(pokemon.cries.legacy)}/>
           {/* <section>
              {pokemon.types?.map(type => <span key={type}>{type}</span>)}
              <div/>
            </section> */}
            {/* <article className='container-ability'>
                <h3 className='title-ability'>Habilidades</h3>
                {pokemon.abilities?.map(ability => <span className='ability' key={ability}>{ability}</span>)}
            </article> */}
         </article>
          ) : (
            <p>Loading data...</p>
          )}
        </div>
    </>
  )
}

export default Details