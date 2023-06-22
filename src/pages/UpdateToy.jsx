import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
// import Select from 'react-select';
import CreatableSelect from "react-select/creatable";   
import { useState } from "react";


const options = [
    { value: 'sports car', label: 'sports car' },
    { value: 'truck', label: 'truck' },
    { value: 'regular car', label: 'regular car' },
];

const UpdateToy = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const toyData = useLoaderData()
    console.log(toyData)
    const { _id, name, price, sellerEmail, sellerName, quantity, rating, subCategory, photoUrl, description } = toyData
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    console.log(selectedOption?.value)
    const onSubmit = data => {
        data.subCategory = selectedOption?.value
        console.log(data)

        fetch(`https://toy-market-server-gules.vercel.app/${_id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    };
    console.log(watch("example"));
    return (
        <div className="flex flex-col justify-center items-center py-6 mt-3" >
            <p className="text-4xl font-bold py-4" >Update Toy</p>
            <form className="flex flex-col w-full px-3 md:px-0 md:w-1/2" onSubmit={handleSubmit(onSubmit)}>

                <label >Picture URL of the toy</label>
                <input type="text" className="outline-none border-2 border-black rounded h-10 pl-2 " placeholder="Url" defaultValue={photoUrl} {...register("photoUrl")} />
                <label >Name</label>
                <input type="text" className="outline-none border-2 border-black rounded h-10 pl-2 " placeholder="Name" defaultValue={name}  {...register("name")} />
                <label >Seller Name</label>
                <input type="text" className="outline-none border-2 border-black rounded h-10 pl-2 " placeholder="" defaultValue={sellerName} {...register("sellerName")} />
                <label >Seller Email</label>
                <input type="text" className="outline-none border-2 border-black rounded h-10 pl-2 " placeholder="" defaultValue={sellerEmail} {...register("sellerEmail")} />
                <label >Sub-category</label>
                <CreatableSelect
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                />

                <div className="mt-2 w-full flex justify-center flex-col gap-5 md:flex-row">
                    <div className="w-full md:w-1/2">
                        <label >Price</label>
                        <input type="text" className="outline-none border-2 border-black rounded h-10 w-full  pl-2 " defaultValue={price} placeholder="Price" {...register("price")} />

                    </div>
                    <div className="w-full md:w-1/2">
                        <label >Rating</label>
                        <input type="text" className="outline-none border-2 border-black rounded w-full h-10 pl-2 " placeholder="Rating" defaultValue={rating}  {...register("rating")} />

                    </div>
                </div>
                <label >Available quantity</label>
                <input type="text" className="outline-none border-2 border-black rounded h-10 pl-2 " placeholder="Quantity" defaultValue={quantity}  {...register("quantity")} />
                <label >Detail description</label>
                <input type="text" className="outline-none border-2 border-black rounded h-10 pl-2 " placeholder="description" defaultValue={description} {...register("description")} />






                {errors.exampleRequired && <span>This field is required</span>}

                <input className="bg-orange-600 mt-4 py-2 rounded text-black font-bold cursor-pointer " type="submit" />
            </form>
        </div>
    );
};

export default UpdateToy;