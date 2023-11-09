import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../../firebase.config";
import axios from "axios";




export const AuthContext = createContext(null)
const google = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);




    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const updateUserDetails = ( name, photo) => {
        setLoading(true);
     return (  updateProfile(auth, {
            displayName: name,
            photoURL: photo,
        }))
           
    };



    // const loginUser = (email, password) => {
    //     setLoading(true);
    //     return signInWithEmailAndPassword(auth, email, password)
    // }
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
          .catch(error => {
      
            console. Error("Error signing in:", error);
          });
      }
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }
    const loginGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, google)
    }


    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (userInfo) => {
            
            const userEmail = userInfo?.email || user?.email
            
            setUser(userInfo)
            setLoading(false);
            console.log(userInfo,loading)
            const loggedUser = { email: userEmail };

           
            if (userInfo) {

                axios.post('https://assignment-11-server-side-black.vercel.app/jwt', loggedUser,
                    { withCredentials: true })
                    .then(res => {
                        console.log('token', res.data)
                    })
            }
            else {
                axios.post('https://assignment-11-server-side-black.vercel.app/logout', loggedUser, {
                    withCredentials: true
                })
                    .then(res => {
                        console.log(res.data)
                    })
            }
            setUser(userInfo)
            setLoading(false);
        })
        return () => {
            unsub();
        }
    }, [])



    const AuthInfo = { user, createUser, loginUser, logOut, loginGoogle,  loading, updateUserDetails }
    return (
        <>
            <AuthContext.Provider value={AuthInfo}>
                {children}
            </AuthContext.Provider >
        </>
    );
};


export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node
}