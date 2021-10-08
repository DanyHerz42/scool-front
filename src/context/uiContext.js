import React, {createContext, useReducer} from 'react';

import { uiReducer } from "../reducers/uiReducer";

export const UiContext = createContext();

export const UiProvider = ({children}) => {
    const initialState = {
        menuOpen: true
    }

    const [menu, dispatch] = useReducer(uiReducer, initialState);

    return (
        <UiContext.Provider value={{menu, dispatch}}>
            {children}
        </UiContext.Provider>
    )
}