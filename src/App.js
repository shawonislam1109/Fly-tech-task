import {RouterProvider} from "react-router-dom";
import "./App.css";
import {route} from "./Route/Route";
import {createContext, useState} from "react";

export const ButtonContext = createContext();

function App() {
  const [button1, setButton1] = useState(true);
  const [Hide , SetHide ] = useState(false) ; 

  const buttonValue = {setButton1, button1,Hide,SetHide};
  return (
    <div>
      <ButtonContext.Provider value={buttonValue}>
        <RouterProvider router={route}>
          
        </RouterProvider>
      </ButtonContext.Provider>
    </div>
  );
}

export default App;
