import React from 'react';
import {
    BrowserRouter as Router,
    // Switch,
    Route,
    // Redirect
} from "react-router-dom";
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Route path="/auth">
                    <AuthRouter />
                </Route>
                <Route path="/" exact>
                    {/* <AuthRouter /> */}
                </Route>
                {/* <Redirect to="/auth/login" /> */}
            </div>
        </Router>

    )
}
