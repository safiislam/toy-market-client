import { useLoaderData } from "react-router-dom";
import AllToyTable from "../Shared/AllToyTable";


const AllToys = () => {
    const allToy = useLoaderData()
    console.log(allToy)
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th> Seller</th>
                            <th>Toy Name </th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            allToy?.map((toy, index) => <AllToyTable key={toy._id} index ={index} toy={toy}  />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;