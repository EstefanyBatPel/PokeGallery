import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/home/Home';
import Gallery from '../pages/gallery/Gallery';
import LayoutPublic from "../layout/LayoutPublic";
import Details from '../pages/details/Details';


const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutPublic />,
        children: [
        {
            index: true,
            element: <Home />, 
        },
        {
        path: '/gallery',
        element: <Gallery /> 
        },
        {
        path: '/detail/:id',
        element: <Details />
        }
        ]
    },
]);

export default router;