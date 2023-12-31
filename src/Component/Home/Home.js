import React, {useContext} from "react";
import image from "./logobi.png";
import "./Home.css";
import {ButtonContext} from "../../App";
import {BsAirplane, BsAirplaneFill} from "react-icons/bs";
import {TbCurrencyTaka} from "react-icons/tb";
import FlightDetails from "../FlightDetails/FlightDetails";

const Home = () => {
  const {button1, setButton1, Hide, SetHide} = useContext(ButtonContext);

  return (
    <div>
      <div className="lg:grid grid-cols-12 w-9/12 mx-auto gap-2">
        <div className="col-span-9 bg-slate-100 mt-24 mb-10  rounded-md">
          <div className="grid lg:grid-cols-12  md:grid-cols-1  md:justify-center md:items-center mb-5">
            {/* grid cols number 1  */}
            <div className="col-span-3 ml-8">
              <img className="w-16 h-16  mt-8 " src={image} alt="" />
              <h1 className="text-xl ">
                Biman Bangladesh <br /> Airlines
              </h1>
              <h1 className="color font-bold mt-3">
                BG 187 <span className="border"></span> W & BG 671{" "}
                <span className="border"></span> E{" "}
              </h1>
            </div>

            {/* grid cols number 2 */}
            {button1 ? (
              <div className="col-span-3 mt-8 ml-2 ">
                <h1 className="text-5xl">DAC</h1>
                <p className="text-slate-500 font-medium mt-3">
                  Hazrat Shajalal Intl Airport
                </p>
                <p className="text-xl font-bold my-1 color">19:05</p>
                <p className="text-slate-500 font-medium mt-3">
                  SUN 4TH JUL 2022
                </p>
                <div className="flex justify-around color mr-20 font-bold mt-12">
                  <p className="" >Refundable </p>
                  <p className="">Class-W</p>
                </div>
              </div>
            ) : (
              <div className="col-span-3 mt-4 ml-2 ">
                <h1 className="text-5xl ">JFK</h1>
                <p className="text-slate-500 font-medium mt-3">
                  JF Kennedy Intl Airport
                </p>
                <p className="text-xl font-bold my-1 color">12:05</p>
                <p className="text-slate-500 font-medium mt-3">
                  MON 6TH JUL 2022
                </p>
                <p className="text-slate-500 font-medium mt-12">
                  Baggage : 45 KG
                </p>
              </div>
            )}

            {/* Grid cols number 3  */}
            <div className="col-span-3 flex justify-center  items-center">
              {button1 ? (
                <button className=" rotate-90" type="button">
                  <BsAirplaneFill className="w-24 h-20" />
                </button>
              ) : (
                <button
                  onClick={() => setButton1(true)}
                  className=" rotate-90  mt-2"
                  type="button ">
                  <BsAirplane className="w-24 h-20" />
                </button>
              )}

              {!button1 ? (
                <button className=" -rotate-90 mt-20 -ml-9" type="button">
                  <BsAirplaneFill className="w-24 h-20 " />
                </button>
              ) : (
                <button
                  onClick={() => setButton1(false)}
                  className=" -rotate-90 mt-20 -ml-8"
                  type="button ">
                  <BsAirplane className="w-24 h-20" />
                </button>
              )}
            </div>

            {/* Grid cols number 4 */}
            {button1 ? (
              <div className="col-span-3 mt-8 text-end mr-10 ">
                <h1 className="text-5xl ">JFK</h1>
                <p className="text-slate-500 font-medium mt-3">
                  JF Kennedy Intl Airport{" "}
                </p>
                <p className="text-xl font-bold my-1 color">12:05</p>
                <p className="text-slate-500 font-medium mt-3">
                  MON 6TH JUL 2022
                </p>
                <p className="text-slate-500 font-medium mt-12 mb-5">
                  Baggage : 45 KG
                </p>
              </div>
            ) : (
              <div className="col-span-3 mt-8 md:mx-10 text-end mr-8">
                <h1 className="text-5xl">DAC</h1>
                <p className="text-slate-500 font-medium mt-3">
                  Hazrat Shajalal Intl Airport
                </p>
                <p className="text-xl font-bold my-1 color">19:05</p>
                <p className="text-slate-500 font-medium mt-3">
                  SUN 4TH JUL 2022
                </p>
                <div className="flex justify-around mb-5 color font-bold mt-7">
                  <p>Refundable </p>
                  <p className="">Class-W</p>
                </div>
              </div>
            )}
          </div>
          <div className="">
           { Hide ?  <FlightDetails /> : ' '}
          </div>
        </div>

        <div className="col-span-3 h-72 pb-10 md:mb-10 bg-slate-100 mt-24 rounded-md shadow-md">
          <p className="flex justify-end  text-5xl mr-9 mt-7">
            <TbCurrencyTaka className="w-12 h-12 " />
            1800
          </p>
          <div className="flex justify-center mr-5">
            <button className="w-40 h-12 rounded-full font-bold bgcolor text-slate-200 mt-16">
              BOOK NOW
            </button>
          </div>
          <div className="flex justify-end mr-10 mt-10">
            {Hide ? (
              <button
                onClick={() => SetHide(false)}
                className=" text-slate-600 font-bold ">
                Hide Details
              </button>
            ) : (
              <button
                onClick={() => SetHide(true)}
                className=" text-slate-600 font-bold ">
                Flight Details
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
