import { useLoaderData } from "react-router-dom";

const UpdateToy = () => {
    const toyData = useLoaderData()
    console.log(toyData)
    const { _id, name, price, sellerEmail, sellerName, quantity, rating,subCategory,photoUrl,description} = toyData
    return (
        <div>
            
        </div>
    );
};

export default UpdateToy;