import React, { useContext } from 'react';
import { ButtonContext } from '../../../App';
import {MdTimeline} from "react-icons/md";
import image2 from "../logobi.png";
const Flight2 = () => {
    const {button1} = useContext(ButtonContext);
    return (
        <div>
             <div className="grid grid-cols-12 mb-10">
        {/* grid cols number 1  */}
        <div className="col-span-3 ml-1">
          <img className="w-16 h-16  mt-8 " src={image2} alt="" />
          <h1 className="font-medium  ">Biman Bangladesh Airlines</h1>
          <h1 className="color font-bold mt-3">BG 617</h1>
          <p className="text-medium text-slate-400">Operator by : BG</p>
          <p className="text-medium text-slate-400">Economy:G</p>
        </div>

        {/* grid cols number 2 */}
        {button1 ? (
          <div className="col-span-3 mt-8">
            <p className="font-medium text-slate-400">Dpart</p>
            <h1 className="text-4xl">DXB</h1>
            <p className="text-slate-500 font-medium mt-3">Dhaka,BD | 15.00</p>
            <p className=" font-medium text-slate-500 my-1">
              Terminal Hazrat Shajalal <br /> International Airport
            </p>
            <p className="text-slate-400 text-sm  mt-3">Sun 3rd Jun 2022</p>
          </div>
        ) : (
          <div className="col-span-3 mt-8">
            <p className="font-medium text-slate-400">Dpart</p>
            <h1 className="text-4xl">DXB</h1>
            <p className="text-slate-500 font-medium mt-3">
              Dhaka,BD <span></span> 15.00
            </p>
            <p className=" font-medium text-slate-500 my-1">
              Terminal Hazrat Shajalal <br /> International Airport
            </p>
            <p className="text-slate-400 text-sm  mt-3">Sun 3rd Jun 2022</p>
          </div>
        )}

        {/* Grid cols number 3  */}
        <div className="col-span-3 mt-20">
          <span className="text-slate-400 -mb-10">55 mintues</span>
          <MdTimeline className="w-24 h-24" />
        </div>

        {/* Grid cols number 4 */}
        {button1 ? (
          <div className="col-span-3 mt-8">
            <p className="font-medium text-slate-400">Dpart</p>
            <h1 className="text-4xl">JFK</h1>
            <p className="text-slate-500 font-medium mt-3">
              Dhaka,BD <span></span> 15.00
            </p>
            <p className=" font-medium text-slate-500 my-1">
              Terminal Hazrat Shajalal <br /> International Airport
            </p>
            <p className="text-slate-400 text-sm  mt-3">Sun 3rd Jun 2022</p>
          </div>
        ) : (
          <div className="col-span-3 mt-8">
            <p className="font-medium text-slate-400">Dpart</p>
            <h1 className="text-4xl">DAC</h1>
            <p className="text-slate-500 font-medium mt-3">
              Dhaka,BD <span></span> 15.00
            </p>
            <p className=" font-medium text-slate-500 my-1">
              Terminal Hazrat Shajalal <br /> International Airport
            </p>
            <p className="text-slate-400 text-sm  mt-3">Sun 3rd Jun 2022</p>
          </div>
        )}
      </div>
        </div>
    );
};

export default Flight2;