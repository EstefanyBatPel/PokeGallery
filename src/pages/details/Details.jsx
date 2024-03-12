// import { pokemonInfo } from '../../services/pokemonServices';
import { useGetPokemon } from '../../services/pokemonServices';


const Details = () => {
    const { pokemones } = useGetPokemon()
  return (
    <>
     {pokemones.map((pokemon) => (
          <article className='article-pokemon' key={pokemon.id}>

            <p className='pokemon-name'>{pokemon.name}</p>
            <img className='img-pokemon' src={pokemon.img} alt={pokemon.name} /*onClick={() => pokemonInfo(pokemon.name)}*/ /*onClick={() => sound(pokemon.audio)}*/ />
            {/* <section>
              {pokemon.types?.map(type => <span key={type}>{pokemon.type}</span>)}
              <div/>
            </section> */}
            {/* <article className='container-ability'>
                <h3 className='title-ability'>Habilidades</h3>
                {pokemon.abilities?.map(ability => <span className='ability' key={ability}>{ability}</span>)}
            </article> */}
          </article>
        ))}
    </>
  )
}

export default Details