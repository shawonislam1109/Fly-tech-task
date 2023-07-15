import React, { useContext } from 'react';
import { ButtonContext } from '../../App';
import Home from '../Home/Home';
import HomeSwitch from '../Home/HomeSwitch';

const MainHome = () => {
    const {button1} = useContext(ButtonContext);
    return (
        <div>
            {
                button1 ? <Home/> : <HomeSwitch/>
            }
        </div>
    );
};

export default MainHome;