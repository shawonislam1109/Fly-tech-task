import { createBrowserRouter } from "react-router-dom";
import Home from "../Component/Home/Home";

 
export const route = createBrowserRouter([
      {
        path: '/',
        element: <Home/>
      }
])