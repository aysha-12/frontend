// import React, { createContext } from 'react';
// import app from '../firebase/firebase.config';
// import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

//  export const authContext=createContext()
//  const auth = getAuth(app);

// const UserContext = ({children}) => {
    
//     const signup=(email, password)=>{
//         return  createUserWithEmailAndPassword(auth, email, password)
//     }  

//     const authInfo={
//         signup
//     }
//     return (
//         <div>
//             <authContext.Provider value={authInfo}>
//                 {children}

//             </authContext.Provider>            
//         </div>
//     );
// };

// export default UserContext;