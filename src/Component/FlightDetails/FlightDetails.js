import React from "react";
import {Link, Outlet} from "react-router-dom";

const FlightDetails = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 justify-around ml-5 items-center my-10">
        <Link to="/">
          {" "}
          <button className=" w-18 h-8 px-2  rounded-sm focus:bg-green-900 focus:text-white">
            FLIGHT DETAILS
          </button>{" "}
        </Link>
        <Link to="/summary">
          {" "}
          <button className=" w-18 h-8 px-2 rounded-sm focus:bg-green-800 focus:text-white">
            FARE SUMMARY{" "}
          </button>{" "}
        </Link>
        <Link to="/policy">
          {" "}
          <button className=" w-18 h-8 px-2 rounded-sm focus:bg-green-800 focus:text-white">
            FARE POLICY
          </button>{" "}
        </Link>
        <Link to="/Baggage">
          {" "}
          <button className=" w-18 h-8 px-2 rounded-sm focus:bg-green-800 focus:text-white">
            BAGGAGE
          </button>{" "}
        </Link>
      </div>
      <div className="ml-5">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default FlightDetails;
