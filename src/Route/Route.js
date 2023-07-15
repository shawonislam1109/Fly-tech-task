import { createBrowserRouter } from "react-router-dom";
import MainHome from "../Component/Main/MainHome";
import FlightDetails from "../Component/FlightDetails/FlightDetails";
import Home from "../Component/Home/Home";
import Flight from "../Component/FlightDetails/Flight/Flight";
import Policy from "../Component/FlightDetails/Policy/Policy";
import Baggage from "../Component/FlightDetails/Baggage/Baggage";
import Summary from "../Component/FlightDetails/Summary/Summary";

 
export const route = createBrowserRouter([
    
      {
        path: '/',
        element: <Home/>,
        children: [
          {
            path: '/',
            element: <Flight/>
          },
          {
            path: '/policy',
            element: <Policy/>
          },
          {
            path: '/Baggage',
            element: <Baggage/>
          }
          ,
          {
            path: '/summary',
            element: <Summary/>
          }
        ]
      }
])