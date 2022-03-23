import React from 'react';
import { useState } from 'react';
import { Route,Redirect } from 'react-router-dom';

export const PrivateRoute = ({children,isAuthenticated,...rest}) =>{
    
    const [isauth,setIsauth] = useState(false)
    const lItem = localStorage.getItem("Admin");
    if(lItem)
    {
        setIsauth(true)
    }else{
        setIsauth(false);
        localStorage.clear()
    }
    return(<Route {...rest} render={()=>isauth?(children):(<Redirect to={'/admin-login'} />)} />)
}