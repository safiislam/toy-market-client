import { useLoaderData } from "react-router-dom";


const AllToys = () => {
    const allToy = useLoaderData()
    console.log(allToy)
    return (
        <div>
            
        </div>
    );
};

export default AllToys;