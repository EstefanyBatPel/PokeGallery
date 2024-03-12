import { useGetPokemon } from '../../services/pokemonServices';
import '../gallery/Gallery.css';
import InfiniteScroll from 'react-infinite-scroll-component';
// import { useState } from 'react';
// import { pokemonInfo } from '../../services/pokemonServices';
// import { useNavigate } from 'react-router-dom';

const Gallery = () => {
    const URL = 'https://pokeapi.co/api/v2/pokemon/';
    const { data, loading, error } = useGetPokemon(URL);

  console.log(data);

    if (loading) {
        return <p>Cargando...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    if (!data) {
        return null;
    }

    // Haz lo que necesites con los datos obtenidos, por ejemplo:
    return (
        <div>
            <h1>{data.name}</h1>
            {<img src={data.sprites.front_default} alt={data.name} />}
        </div>
    );
};

export default Gallery;



// import { getPokemon } from '../../services/pokemonServices';
// import './Gallery.css';

// let URL = 'https://pokeapi.co/api/v2/pokemon/';

// const Gallery = () => {
//     const{data} = getPokemon(URL)
//     console.log(data);

//     return(
//         <section className='containerCard'>
//             <ul>
//                 {
//                     data?.map((pokemon) =>(
//                         <li key={pokemon.id}>
//                             <div className='Card' style={{backgroundImage: `url(${pokemon.sprites.front_default})`}}>
//                                 <h3 className='Card__title'>{pokemon.name} <span>{pokemon.name}</span></h3>
//                                 </div>
//                         </li>
//                     ))
//                 }
//             </ul>
//         </section>
//     )
// };

// export default Gallery;

// for (let i = 1; i <= 151; i++) {
//   fetch(URL + i) /* El resultado de esta operacion sera https://pokeapi.co/api/v2/pokemon/1 <-poniendo al final el numero pokemon hasta llegar a 151*/
//       .then((response) => response.json())
//       .then(data => mostrarPokemon(data))
// }

// const Gallery = () => {
//   return (
//     <div className='container-items'>
//     <div className='item'>
//         <h2 className='title-char'>Charmander</h2>
//         <img className='img-char' src={charmander} alt="img-poke" />
//     </div>
//     <div className='item'>
//         <h2 className='title-pica'>Pikachu</h2>
//         <img className='img-pica' src={pikachu} alt="img-poke" />
//     </div>
//     { <div className='item'>
//         <h2 className='title-poke'>Charmander</h2>
//         <img className='img-poke' src={charmander} alt="img-poke" />
//     </div> }
//     </div>
//   )
// }

// export default Gallery