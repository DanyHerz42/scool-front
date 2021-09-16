import React, { useReducer } from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import { CalendarScreen } from '../components/CalendarScreen';
import { ChatScreen } from '../components/ChatScreen';
import { HomeScreen } from '../components/HomeScreen';
import { UiContext } from '../context/uiContext';
import { uiReducer } from '../reducers/uiReducer';

export const MainRouter = () => {

    const initialState = {
        menuOpen: true
    }

    const [menu, dispatch] = useReducer(uiReducer, initialState);
    
    return (
        <UiContext.Provider value={{menu, dispatch}}>
            <div>
                <Switch>
                    <Route exact path="/" component={HomeScreen} />
                    <Route exact path="/calendar" component={CalendarScreen} />
                    <Route exact path="/chat" component={ChatScreen} />
                    <Route exact path="/goals" />
                    <Route exact path="/autodidact" />
                    <Route exact path="/homeworks" />

                </Switch>
            </div>
        </UiContext.Provider>
    )
}
