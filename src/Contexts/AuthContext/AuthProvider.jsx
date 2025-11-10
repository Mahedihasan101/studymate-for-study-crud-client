import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../../Firebase/Firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

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
       
    }
    return (
      <AuthContext value={authInfo}>
        {children}
      </AuthContext>
    );
};

export default AuthProvider;