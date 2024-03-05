import charmander from '../../assets/img/charmanderPNG 4.png';
import pikachu from '../../assets/img/pikachu.png';
import './Gallery.css';

const Gallery = () => {
  return (
    <div className='container-items'>
    <div className='item'>
        <h2 className='title-char'>Charmander</h2>
        <img className='img-char' src={charmander} alt="img-poke" />
    </div>
    <div className='item'>
        <h2 className='title-pica'>Pikachu</h2>
        <img className='img-pica' src={pikachu} alt="img-poke" />
    </div>
    {/* <div className='item'>
        <h2 className='title-poke'>Charmander</h2>
        <img className='img-poke' src={charmander} alt="img-poke" />
    </div> */}
    </div>
  )
}

export default Gallery