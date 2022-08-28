import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext()
const initState = {
    isAuth: false,
    token: null,
}
export function AppContextProvider({children}){
    const [auth, setAuth] = useState(initState)
    const handleLogin = (token)=>{
        setAuth({
            ...auth,
            isAuth:true,
            token: token
        })
    }
    const handleLogout = ()=>{
        setAuth({
            ...auth,
            isAuth: false,
            token: null
        })
    }
    return (
        <AppContext.Provider value={{auth, handleLogin,handleLogout}}>
            {children}
        </AppContext.Provider>
    )
}