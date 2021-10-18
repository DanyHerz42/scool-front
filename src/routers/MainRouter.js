import React, { useContext } from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";

import { HomeScreenPage } from '../pages/Classes/HomeScreen';
import { ProfileScreen } from '../pages/Profile/ProfileScreen';
import { UiProvider } from '../context/uiContext';
import { ProfileEditScreen } from '../pages/Profile/ProfileEditScreen';
import { ChatScreen } from '../pages/Chat/ChatScreen';
import { CalendarScreen } from '../pages/Calendar/CalendarScreen';
import { HomeworkScreen } from '../pages/Homework/HomeworkScreen';
import { Goal } from '../pages/Goal/Goal';
import { AuthContext } from '../context/authContext';
import { HomeworkTeacherScreen } from '../pages/Homework/HomeworkTeacherScreen';
import { HomeTeacherScreen } from '../pages/home/HomeTeacherScreen';
import { CalendarTeacherScreen } from '../pages/Calendar/CalendarTeacherScreen';
import { ChatTeacherScreen } from '../pages/Chat/ChatTeacherScreen';

// import { Class } from '../components/info/Class/ClassInfo'
// import { WorkFlow } from '../components/info/Class/workFlow';
import { WorkFlowPage } from '../pages/Classes/WorkFlowPage';
import { IntegrantsPage } from '../pages/Classes/IntegrantsPage';
import { CalendarPage } from '../pages/Classes/CalendarPage';

export const MainRouter = () => {

    const { user } = useContext(AuthContext)

    return (
        <UiProvider>
            <div>
                {
                    user.rol === 1 ? (
                        <Switch>
                            <Route exact path="/" component={HomeScreenPage} />
                            <Route exact path="/calendar" component={CalendarScreen} />
                            <Route exact path="/chat" component={ChatScreen} />
                            <Route exact path="/goals" component={Goal} />
                            <Route exact path="/autodidact" />
                            <Route exact path="/homeworks" component={HomeworkScreen} />
                            <Route exact path="/profile" component={ProfileScreen} />
                            <Route exact path="/profile/edit" component={ProfileEditScreen} />

                        </Switch>
                    )
                    :
                        (
                            <Switch>
                                <Route exact path="/" component={HomeTeacherScreen} />
                                <Route exact path="/calendar" component={CalendarTeacherScreen} />
                                <Route exact path="/chat" component={ChatTeacherScreen} />
                                <Route exact path="/homeworks" component={HomeworkTeacherScreen} />
                                <Route exact path="/profile" component={ProfileScreen} />
                            </Switch>
                        )
                }
            </div>
        </UiProvider>
    )
}
