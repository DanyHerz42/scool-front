import { createContext, useReducer } from "react";
import { authReducer } from "../reducers/authReducer";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const initialState = {
        checking: true,
    }

    const [user, dispatch] = useReducer(authReducer, initialState);

    return (
        <AuthContext.Provider value={{user, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}