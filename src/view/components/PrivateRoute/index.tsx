import React, {FC} from 'react';
import {Navigate} from 'react-router-dom';
import {routes} from '../../../init/constants/routes';
import {shallowEqual, useSelector} from "react-redux";
import {authStateSelector} from "../../../init/store/selectors";

export const PrivateRoute: FC<{ children: JSX.Element }> = ({children}) => {
    const isAuthenticated = useSelector(authStateSelector, shallowEqual)

    if (!isAuthenticated) {
        return <Navigate to={routes.signIn} replace />
    }

    return children;
}