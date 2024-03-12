import './Home.css';
import charmander from '../../assets/img/charmanderPNG 4.png';
import title from '../../assets/img/PokemonTitle 1.png';

const Home = () => {
  return (
    <div className='container'>
        <img className='title-home' src={title} alt="title-pokemon" />
        <a className='home-charmander' href="/gallery"><img  src={charmander} alt="img-pokemon" /></a>
    </div>
  )
}

export default Home