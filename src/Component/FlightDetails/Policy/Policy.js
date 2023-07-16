import React from "react";

const Policy = () => {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-3 justify-between items-center my-10">
      <div>
        <button className="bg-green-200 text-slate-500 rounded-md w-40 h-9">
          Cancelation
        </button>
        <p className="text-slate-500 mt-3">
          Refund Amount = Paid Amount - Airlines Cancelation fee{" "}
        </p>
      </div>
      <div>
        <button className="bg-green-200 text-slate-500 rounded-md w-40 h-9">
          Void
        </button>
        <p className="text-slate-500 mt-3">
          Re-issu Fee = Airlines Fee - Fare Differance
        </p>
      </div>
      <div>
        <button className="bg-green-200 text-slate-500 rounded-md w-40 h-9">
          RE-Issu
        </button>
        <p className="text-slate-500 mt-3">
          Re-issu Fee = Airlines Fee - Fare Differance
        </p>
      </div>
      <div>
        <button className="bg-green-200 text-slate-500 rounded-md w-40 h-9">
          Refund
        </button>
        <p className="text-slate-500 mt-3">
          Re-issu Fee = Airlines Fee - Fare Differance
        </p>
      </div>
    </div>
  );
};

export default Policy;
