import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";



const Login = () => {
    const { login, googleSignIn } = useContext(AuthContext)
    const [show, setShow] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const email = data.email
        const password = data.password
        login(email, password)
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
            <form className="border flex flex-col rounded-lg bg-black h-[55%] space-y-4 p-8  w-[40%]  mx-auto" onSubmit={handleSubmit(onSubmit)}>
                <p className="text-center text-xl font-bold">login</p>
                <input type="text" className="border-b-2 h-10 bg-black outline-none border-white " placeholder="email" {...register("email")} />
                <div className="flex items-center" >
                    <input type={show ?'text': 'password' } className=" flex-grow border-b-2 h-10 outline-none border-white bg-black  " placeholder="Password" {...register("password")} />
                    <p onClick={() => setShow(!show)}>{
                        show ? <FaEyeSlash /> : <FaEye />
                    }</p>
                </div>
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" className="w-[50%] cursor-pointer text-xl font-bold py-3 mx-auto rounded-lg bg-blue-400" value='login' />
                <div className="divider ">OR</div>
                <button onClick={handleLoginWithGoogle} className="border-2 w w-1/2 mx-auto py-2 border-white rounded ">Google</button>
                <p>Have not account... <Link className="underline duration-500 hover:no-underline" to='/register' >Register</Link> </p>
            </form>
        </div>
    );
};

export default Login;