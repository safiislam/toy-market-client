import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import MyToyTable from "../Shared/MyToyTable";


const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [myToys, setMyToys] = useState([])
    console.log(myToys)
    const url = `http://localhost:5000/toy?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [url])
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th> Toy Name</th>
                            <th>Seller name && email </th>
                            <th>Quantity && Ragting</th>
                            <th>price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            myToys?.map((toy ,index)=> <MyToyTable key={toy._id} index={index} toy={toy} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;


