import title from '../../assets/img/title.png';
import '../Navbar/Navbar.scss';

const Navbar = () => {
  return (
    <>
    <div className="nav">
    <img className='nav_img' src={title} alt="title" />
    <ul className="nav_menu">
      <li><strong><a href="/" className="nav_a">INICIO</a></strong></li>
      <li><strong><a href="/gallery" className="nav_a">GALERIA</a></strong></li>
    </ul>                
    </div>
    </>
  )
}

export default Navbar;