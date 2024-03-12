import Navbar from "../components/Navbar/Navbar";
import { Outlet } from 'react-router-dom';

const LayoutPublic = () => {
    return (
      <>
      < Navbar />
      < Outlet />
      </>
    )
  }
  
  export default LayoutPublic;