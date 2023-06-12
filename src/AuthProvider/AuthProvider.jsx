import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase';
import axios from 'axios';



export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);

    const auth = getAuth(app);

    const googleProvider = new GoogleAuthProvider();
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const signUpWithEmail = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInWithEmail = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            if (currentUser) {
                axios.post("http://localhost:4000/jwt", { email: currentUser.email })
                    .then(data => {
                        localStorage.setItem("access-token", data.data.token)
                    })
            }
            else {
                localStorage.removeItem("access-token")
            }
        })
        return () => unSubscribe();
    }, []);

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const authInfo = {
        googleLogin,
        user,
        loading,
        signInWithEmail,
        signUpWithEmail,
        logOut,
        updateUserProfile,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;