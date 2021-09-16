import { types } from "../types/types";

// const initialState = {
//     menuOpen: true
// }

export const uiReducer = (state = {} , action) => {
    switch (action.type) {
        case types.uiOpenMenu:
            return {
                ...state,
                menuOpen: true
            }
        case types.uiCloseMenu:
            return {
                ...state,
                menuOpen: false
            }
        default:
            return state;
    }
}