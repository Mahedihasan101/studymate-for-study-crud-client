import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth, provider } from '../../Firebase/Firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)

    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signInUser = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const signOutUser = ()=>{
        return signOut(auth);
    }

    const signInWithGoogle = ()=>{
        return signInWithPopup(auth,provider);
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(User)=>{
            setUser(User)
        })
        return ()=>{
            unsubscribe();
        }
    },[])
    const authInfo = {
        user,
        createUser,
         signInUser,
         signOutUser,
         signInWithGoogle,
       
    }
    return (
      <AuthContext value={authInfo}>
        {children}
      </AuthContext>
    );
};

export default AuthProvider;