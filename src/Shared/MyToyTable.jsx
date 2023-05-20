import { Link } from "react-router-dom";


const MyToyTable = ({ toy, index }) => {
    const { _id, name, price, sellerEmail, sellerName, quantity, rating } = toy
    
    console.log(toy)
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td><div>
                <p>{sellerName}</p>
                <p>{sellerEmail}</p>
            </div></td>
            <td>
                <div>
                    <p>{quantity}</p>
                    <p>{rating}</p>
                </div>
            </td>
            <td>{price}</td>
            <td>
                <div>
                    <button  className="border-2 border-black rounded-s-full px-2" ><Link to={`/update/${_id}`} >Update</Link></button>
                    <button className="border-2 border-black rounded-e-full px-2" >Delete</button>
                </div>
            </td>
        </tr>
    );
};

export default MyToyTable;