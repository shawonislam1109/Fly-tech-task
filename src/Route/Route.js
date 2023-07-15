import { createBrowserRouter } from "react-router-dom";
import MainHome from "../Component/Main/MainHome";

 
export const route = createBrowserRouter([
      {
        path: '/',
        element: <MainHome/>
      }
])