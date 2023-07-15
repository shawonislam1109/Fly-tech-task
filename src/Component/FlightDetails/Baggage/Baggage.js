import React from 'react';

const Baggage = () => {
    return (
        <div className='my-5 mr-5'>
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="bgcolor text-slate-200 ">
        <th>Baggage</th>
        <th>Check In </th>
        <th>Cabin </th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr className="bg-green-200">
        <th>Adult</th>
        <td>20 KG </td>
        <td>M </td>
       
      </tr>
      {/* row 2 */}
      <tr>
        <th>Child</th>
        <td>20 KG </td>
        <td>M </td>
      </tr>
      {/* row 3 */}
      <tr className="bg-green-200">
        <th>Infant</th>
        <td>20 KG </td>
        <td>M </td>
      </tr>
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Baggage;