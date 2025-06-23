import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

 export const authContext=createContext()
 const auth = getAuth(app);
 const provider = new GoogleAuthProvider();

const UserContext = ({children}) => {
    const[user,setuser]=useState({})
    

    // create user
    const createuaer=(email, password)=>{
        return  createUserWithEmailAndPassword(auth, email, password)
    }  

    // login
   const login=( email, password)=> {
     return signInWithEmailAndPassword(auth, email, password)
   }

    // sign up withgoogle

    const google=()=>{
      return signInWithPopup(auth, provider)
    }
    


//    logout

   const logout=()=>{
     signOut(auth)
     .then(() => {
  
     }).catch((error) => {
  
     });
    
   }

   // manage user
    const manage=onAuthStateChanged(auth, (user) => {
         setuser(user)
  if (user) {
    
    const uid = user.uid;
   
      
   
  } else {
      console.log('kldjfsdkjf');
      
  }
});



    const authInfo={
       createuaer,
       user,
       login,
       logout,
       google,
       manage
      
    }
    return (
        <div>
            <authContext.Provider value={authInfo}>
                {children}

            </authContext.Provider>            
        </div>
    );
};

export default UserContext;