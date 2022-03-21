import React from 'react';
import { useState } from 'react';
import { Route,Redirect } from 'react-router-dom';

export const PrivateRoute = ({children,...rest}) =>{
    
    const [isauth,setIsauth] = useState(false)
    const lItem = localStorage.getItem("Admin");
    lItem?setIsauth(true):setIsauth(false)
    return(<Route {...rest} render={()=>isauth?(children):(<Redirect to={'/admin-login'} />)} />)
}