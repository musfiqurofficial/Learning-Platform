import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();

    if (loading) {
        return <div className='w-8/12 mx-auto text-center m-5'><button type="button" class="bg-indigo-500 ..." disabled>
            <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
            </svg>
            Processing...
        </button></div>
    }
    else if (user && user.uid) {
        return children;
    }
    else { return <Navigate to='/signIn' state={{ from: location }} replace></Navigate> }
};
export default PrivateRoute;