import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const FlightDetails = () => {
    return (
        <div >
         <div className='grid grid-cols-4 justify-around ml-5 items-center my-10'>
         <Link to='/'>  <button>FLIGHT DETAILS</button> </Link>
         <Link to= '/summary'>  <button>FARE SUMMARY </button> </Link>
         <Link to='/policy'> <button>FARE POLICY</button> </Link>
         <Link to='/Baggage'> <button>BAGGAGE</button> </Link>
         </div >
          <div className='ml-5'>
            <Outlet></Outlet>
          </div>
        </div>
    );
};

export default FlightDetails;