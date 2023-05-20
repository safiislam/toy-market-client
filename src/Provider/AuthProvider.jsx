
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from './../firebase/firebase.config';
import { createContext, useEffect, useState } from "react";

const auth = getAuth(app)

export const AuthContext = createContext()
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [loader,setLoader]= useState(true)
    const [user, setUser] = useState(null)
    console.log(user)
    const registaion = (email, password) => {
        //    setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const setName = ({ name, photoUrl }) => {
        return (updateProfile(auth.currentUser, { displayName: name, photoURL: photoUrl }))
    }
    const logOut = () => {
        setLoader(true)
        return signOut(auth)
    }

    const googleSignIn = () => {

        return signInWithPopup(auth, googleProvider)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setLoader(false)
            setUser(currentUser)
        })
        return () => {
            unsubscribe()
        }
    }, [])


    const authInfo = {
        loader,
        registaion,
        login,
        user,
        setName,
        googleSignIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;