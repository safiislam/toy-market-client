import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Registaion = () => {
    const { registaion, setName, googleSignIn } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const email = data.email
        const password = data.password
        const name = data.name
        const photoUrl = data.url
        registaion(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                if (user) {
                    setName({ name, photoUrl })
                        .then(() => { })
                        .then(err => {
                            console.log(err)
                        })
                }
            })

    };
    const handleLoginWithGoogle = () => {
        googleSignIn()
            .then(result => {
                // eslint-disable-next-line no-unused-vars
                const user = result.user
            })
            .then(err => {
                console.log(err)
            })
    }
    
    return (
        <div className="h-screen w-full flex items-center justify-center text-white">
            <form className="border flex flex-col rounded-lg bg-black h-[80%] space-y-4 p-8  w-[40%]  mx-auto" onSubmit={handleSubmit(onSubmit)}>
                <p className="text-center text-xl font-bold">Registaion</p>
                <input type="text" className="border-b-2 h-10 bg-black outline-none border-white " placeholder="name" {...register("name")} />
                <input type="text" className="border-b-2 h-10 bg-black outline-none border-white " placeholder="photo url" {...register("url")} />
                <input type="text" className="border-b-2 h-10 bg-black outline-none border-white " placeholder="email" {...register("email")} />
                <input type="password" className="border-b-2 h-10 outline-none border-white bg-black  " placeholder="Password" {...register("password")} />

                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" className="w-[50%] cursor-pointer text-xl font-bold py-3 mx-auto rounded-lg bg-blue-400" value='login' />
                <div className="divider ">OR</div>
                <button onClick={handleLoginWithGoogle} className="border-2 w w-1/2 mx-auto py-2 border-white rounded ">Google</button>
                <p> Already  Have an account... <Link className="underline duration-500 hover:no-underline" to='/login' >Login</Link> </p>
            </form>
        </div>
    );
};

export default Registaion;