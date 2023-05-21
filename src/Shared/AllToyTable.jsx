/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";



const AllToyTable = ({ index, toy }) => {
    const { _id, name, price, sellerEmail, sellerName, quantity, rating, subCategory } = toy
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{sellerName}</td>
            <td>
               {name}
            </td>
            <td>
            {subCategory}
            </td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>
                <div>
                    <button className="border-2 border-black rounded-s-full px-2" ><Link to={`/detail/${_id}`} >Detail</Link></button>
                    
                </div>
            </td>
        </tr>
    );
};

export default AllToyTable;