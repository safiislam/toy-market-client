/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from './../firebase/firebase.config';
import { createContext, useEffect, useState } from "react";

const auth = getAuth(app)

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [loader,setLoader]= useState(true)
    const [user,setUser] = useState(null)

    const registaion =(email,password) =>{
       loader(true)
        return createUserWithEmailAndPassword(auth,email,password) 
    }
    const login=(email,password)=>{
        loader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoader(false)
        })
        return ()=>{
            return unsubscribe
        }
    },[])


    const authInfo ={
        loader,
        registaion,
        login,
        user
    }
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;