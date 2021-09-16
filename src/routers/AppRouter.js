import React from 'react';
import {
    BrowserRouter as Router,
    // Switch,
    Route,
    // Redirect
} from "react-router-dom";

import { AuthRouter } from './AuthRouter';
import { MainRouter } from './MainRouter';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Route path="/" component={MainRouter}/>
                <Route path="/auth" component={AuthRouter} />
                    
                {/* <Redirect to="/auth/login" /> */}
            </div>
        </Router>

    )
}
