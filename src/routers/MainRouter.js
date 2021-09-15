import React from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import { CalendarScreen } from '../components/CalendarScreen';
import { ChatScreen } from '../components/ChatScreen';
import { HomeScreen } from '../components/HomeScreen';

export const MainRouter = () => {
    return (
        <div className="container-main-complete">
            <Switch>
                <Route exact path="/" component={HomeScreen}  />
                <Route exact path="/calendar" component={CalendarScreen}  />
                <Route exact path="/chat" component={ChatScreen}/>
                <Route exact path="/goals" />
                <Route exact path="/autodidact"/>
                <Route exact path="/homeworks" />

            </Switch>
        </div>
    )
}
