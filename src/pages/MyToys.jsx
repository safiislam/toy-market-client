/* eslint-disable no-undef */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import MyToyTable from "../Shared/MyToyTable";

import Swal from "sweetalert2";
import CreatableSelect from "react-select/creatable";

const options = [
    { value: 'sports car', label: 'sports car' },
    { value: 'truck', label: 'truck' },
    { value: 'regular car', label: 'regular car' },

];

const MyToys = () => {

    const { user } = useContext(AuthContext)
    const [myToys, setMyToys] = useState([])
    const [sort, setShort] = useState(myToys)

    const handleShort = (event) => {


        if (event) {
            const text = event.value
            const result = myToys.filter(cata => cata.subCategory == text)
            setShort(result)
        }
        else {
            setShort(myToys)
        }
    }


    const url = `http://localhost:5000/toy?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setShort(data)
                setMyToys(data)
            })
    }, [url])

    const handleDeleteToy = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                const url = `http://localhost:5000/toy/${id}`
                fetch(url, {
                    method: 'DELETE',

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = myToys.filter(toy => toy._id !== id);
                            setMyToys(remaining)
                        }
                    })
            }
        })
    }

    return (
        <div>
            <div>
                <CreatableSelect

                    defaultValue=''

                    onChange={handleShort}

                    options={options}
                    name="input"
                    className="w-96 mx-auto"
                />
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th> Toy Name</th>
                            <th>Seller name && email </th>
                            <th>Quantity && Ragting</th>
                            <th>SubCategory</th>
                            <th>price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            sort?.map((toy, index) => < MyToyTable key={toy._id} handleDeleteToy={handleDeleteToy} index={index} toy={toy} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;


