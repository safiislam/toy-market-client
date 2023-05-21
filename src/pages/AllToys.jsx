import { useLoaderData } from "react-router-dom";
import AllToyTable from "../Shared/AllToyTable";
import { useState } from "react";


const AllToys = () => {
    const allToy = useLoaderData()
    console.log(allToy)
    const [toyes,setToyes] = useState(allToy)
    console.log(allToy)
    const handleSearch =(event)=>{
        
        const text = event.target.value
        fetch(`https://b7a11-toy-marketplace-server-side-safiislam.vercel.app/${text}`)
        .then(res=> res.json())
        .then(data =>setToyes(data) )

    }
    console.log(toyes)
    return (
        <div>
            <div className="flex justify-end my-3">
                <div className="form-control ">
                    <div className="input-group">
                        <input type="text" name="search" onChange={handleSearch} placeholder="Search…" className="input input-bordered" />
                        <button className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="overflow-x-auto mx-3">
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
                            toyes?.map((toy, index) => <AllToyTable key={toy._id} index={index} toy={toy} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;