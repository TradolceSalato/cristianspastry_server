

import { onAuthStateChanged } from 'firebase/auth';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import {Auth} from '../../firebase/config'
import {FirebaseFunctions} from '../../firebase/functions'

const AuthContext = createContext<any>({});
const useAuth = () => useContext(AuthContext)

function AuthContextProvider({children}:{children : React.ReactNode}) {
    const [user,setUser] = useState<any>(null);
    const [loading,setLoading] = useState<boolean>(true);
    console.log(user);

 useEffect(()=> {
    
  const unsubscribe = onAuthStateChanged(Auth,(user) => {
    if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        })
      } else {
        setUser(null)
      }
     setLoading(false)
  })
  return () => unsubscribe();
 },[])
 
 const Login = new FirebaseFunctions().Login;
 const Logout = new FirebaseFunctions().Logout;
  return (
    <AuthContext.Provider value={{user,Login,Logout}}>
      {loading ? null : children}
    </AuthContext.Provider>
  )
}

export {
    useAuth,
}
export default AuthContextProvider;