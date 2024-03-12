import '../../components/Navbar/Navbar.css';
import title from '../../assets/img/title.png';

const Navbar = () => {
  return (
    <>
    <div className="nav">
    <img className='img-nav' src={title} alt="title" />
    <ul className="menu">
      <li><strong><a href="/" className="a-list"><button className='button-nav'>INICIO</button></a></strong></li>
      <li><strong><a href="/gallery" className="a-list"><button className='button-nav'>GALERIA</button></a></strong></li>
    </ul>                
    </div>
    </>
  )
}

export default Navbar