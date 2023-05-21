import { useLoaderData } from "react-router-dom";



const ViewDetail = () => {
    
    const toy = useLoaderData()
    const {  name, price, sellerEmail, sellerName, quantity, rating, subCategory,photoUrl } = toy
    console.log(toy)
    return (
        <div>
            
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={photoUrl} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className="pt-6">Name{sellerName}</p>
                        <p className="pb-6">Email: {sellerEmail}</p>
                        <p className="">price:{price}</p>
                        <p>Quentity : {quantity}</p> 
                        <p>Ratings : {rating}</p>
                        <p>Sub-Category: {subCategory}</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetail;