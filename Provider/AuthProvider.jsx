import { createContext, useState, useEffect } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/firebase.init";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";





export const AuthContext = createContext(null)
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

   const [user, setUser ] = useState(null)
   const [loading, setLoading] = useState(true)
   const [brands, setBrands] = useState()
 
   const createUser = (email, password) => {
  
    return createUserWithEmailAndPassword(auth, email, password)
   }
   const signIn = (email, password) => {
     setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
   }

   const googleSignIn = () => {
    return signInWithPopup(auth, provider)

   }

   useEffect( () =>{
    fetch("https://et-ech-shop-server-side-34smdum6q-tansimrinky.vercel.app/brands")
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setBrands(data)
    })
    const unSubscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser)
        setLoading(false)
    })
    return () => {
        unSubscribe()
    }
   } , [])
   

   const logOut = () =>{
    setLoading(true)
    return signOut(auth)
   }


   const authInfo = {
    brands,
    user,
    loading, 
    createUser,
    logOut,
    signIn,
    googleSignIn

   }
    return (
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
  children : PropTypes.node
}

export default AuthProvider;