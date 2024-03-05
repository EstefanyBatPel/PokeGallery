import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/home/Home';
import Gallery from '../pages/gallery/Gallery';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/gallery',
        element: <Gallery /> 
    }
]);

export default router;