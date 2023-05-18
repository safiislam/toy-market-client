import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";



const Login = () => {
    const {login} = useContext(AuthContext)
    
        const { register, handleSubmit, watch, formState: { errors } } = useForm();
        const onSubmit = data => {
            const email = data.email
            const password = data.password
            login(email,password)
        };
    
        console.log(watch("example"));
    return (
        <div className="h-screen w-full flex items-center justify-center text-white">
        <form className="border flex flex-col rounded-lg bg-black h-[50%] space-y-4 p-8  w-[40%]  mx-auto" onSubmit={handleSubmit(onSubmit)}>
            <p className="text-center text-xl font-bold">login</p>
            <input type="text" className="border-b-2 h-10 bg-black outline-none border-white " placeholder="email" {...register("email")} />
            <input type="password" className="border-b-2 h-10 outline-none border-white bg-black  " placeholder="Password" {...register("password")} />

            {errors.exampleRequired && <span>This field is required</span>}

            <input type="submit" className="w-[50%] cursor-pointer text-xl font-bold py-3 mx-auto rounded-lg bg-blue-400" value='login' />

            <p>Have not account... <Link className="underline duration-500 hover:no-underline" to='/register' >Register</Link> </p>
        </form>
    </div>
    );
};

export default Login;