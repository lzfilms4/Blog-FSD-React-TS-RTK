import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entityes/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

const RequireAuth = ({ children }: {children: JSX.Element}) => {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();

    if (!auth) {
        return <Navigate to={RoutePath.main} state={{ form: location }} replace />;
    }
    return children;
};

export default RequireAuth;
