import { useGetPokemon } from '../../services/pokemonServices';
import '../gallery/Gallery.css';
import InfiniteScroll from 'react-infinite-scroll-component';
// import { pokemonInfo } from '../../services/pokemonServices';
import { useNavigate } from 'react-router-dom';

const Gallery = () => {
    const { pokemones, morePokemones, seeMore } = useGetPokemon() // importo la funcion de services para pode usarla aqui y llamar a todas las propiedades
    const navigate = useNavigate();
  return (
<>
      <h1 className='title'>Aqui podrás encontrar tus pokemones favoritos.</h1>
    <InfiniteScroll dataLength={pokemones.length} next={morePokemones} hasMore={seeMore} loader={<h3>Cargando...</h3>} endMessage={<h3>No hay más pokemones...</h3>}>
      <div className='container-pokemon'>
      {pokemones.map((pokemon) => (
          <article className='article-pokemon' key={pokemon.id}>
            <p className='pokemon-name'>{pokemon.name}</p>
            <img className='img-pokemon' src={pokemon.img} alt={pokemon.name} onClick={()=> navigate(`/detail/${pokemon.id}`)}/>
          </article>
        ))}
      </div>
    </InfiniteScroll>
</>
)
}

export default Gallery

//inifiniteScroll viene en la documentacion