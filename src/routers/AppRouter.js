import React, { useContext, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Redirect
} from "react-router-dom";
import { AuthContext } from '../context/authContext';
import { startChecking } from '../services/auth';
import { types } from '../types/types';

import { AuthRouter } from './AuthRouter';
import { MainRouter } from './MainRouter';

import jwt_decode from 'jwt-decode';
import { PublicRoute } from './PublicRouter';
import { PrivateRoute } from './PrivateRouter';
import { LoadingApp } from '../components/ui/LoadingApp';

export const AppRouter = () => {

    const {dispatch, user} = useContext(AuthContext);
   
    useEffect(() => {
        dispatch(handleStartChecking());
    }, [dispatch])

   

    const handleStartChecking = async () => {
        const resData = await startChecking();
        if (resData.ok) {
            localStorage.setItem('token', resData.token);
            const { id_user, name_user, id_role, nickname } = jwt_decode(resData.token).userFound[0];
            dispatch(login({
                id: id_user,
                name: name_user,
                token: resData.token,
                rol: id_role,
                nickname
            }))
        } else {
            dispatch(checkingFinish());
        }
    }
    const login = (user) => ({
        type: types.authLogin,
        payload: user
    });
    
    const checkingFinish = () => ({ type: types.authCheckingFinish });
    
    if(user.checking) {
        return <LoadingApp />
    }
    

    return (
        // <AuthProvider>
            <Router>
                <div>
                    <PrivateRoute path="/" component={MainRouter} isAuthenticated={!!user.id} />
                    <PublicRoute path="/auth" component={AuthRouter} isAuthenticated={!!user.id} />

                    <Redirect to="/auth/login" />
                </div>
            </Router>
        // </AuthProvider>

    )
}
