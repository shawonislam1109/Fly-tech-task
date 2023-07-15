import React from "react";

const Summary = () => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bgcolor text-slate-200 ">
            <tr>
              <th>Pax Type</th>
              <th>Base Fare (BDT)</th>
              <th>Tax (BDT)</th>
              <th>Total (BDT)</th>
              <th>PX Count </th>
              <th>Service Fee (BDT)</th>
              <th>Sub Total (BDT)</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="bg-green-200">
              <th>Adult x1</th>
              <td>4090 tk</td>
              <td>275 tk</td>
              <td>4815 tk</td>
              <td>1</td>
              <td>0 BDT</td>
              <td>4815 tk</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>Child x1</th>
              <td>4090 tk</td>
              <td>275 tk</td>
              <td>4815 tk</td>
              <td>1</td>
              <td>0 BDT</td>
              <td>4815 tk</td>
            </tr>
            {/* row 3 */}
            <tr className="bg-green-200">
              <th>Infant x1</th>
              <td>4090 tk</td>
              <td>275 tk</td>
              <td>4815 tk</td>
              <td>1</td>
              <td>0 BDT</td>
              <td>4815 tk</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Summary;
