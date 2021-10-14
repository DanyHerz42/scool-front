import React from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import { CalendarScreen } from '../components/CalendarScreen';
import { ChatScreen } from '../components/ChatScreen';
import { HomeScreen } from '../components/HomeScreen';
import { ProfileScreen } from '../pages/Profile/ProfileScreen';
import {UiProvider } from '../context/uiContext';
import { ProfileEditScreen } from '../pages/Profile/ProfileEditScreen';

import Class from '../components/info/Class/ClassInfo'

export const MainRouter = () => {

    return (
        <UiProvider>
            <div>
                <Switch>
                    <Route exact path="/" component={HomeScreen} />
                    <Route exact path="/detallesDeClase" component={Class} />
                    <Route exact path="/calendar" component={CalendarScreen} />
                    <Route exact path="/chat" component={ChatScreen} />
                    <Route exact path="/goals" />
                    <Route exact path="/autodidact" />
                    <Route exact path="/homeworks" />
                    <Route exact path="/profile" component={ProfileScreen} />
                    <Route exact path="/profile/edit" component={ProfileEditScreen} />

                </Switch>
            </div>
        </UiProvider>
    )
}
