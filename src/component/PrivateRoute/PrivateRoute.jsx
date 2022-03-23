import Cookies from 'js-cookie';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Route,Redirect } from 'react-router-dom';

export const PrivateRoute = ({children,isAuthenticated,...rest}) =>{
    
    const [isauth,setIsauth] = useState(false)
    const lItem = Cookies.get("Admin");
    console.log("10-->".lItem)
    useEffect(()=>{
        if(lItem)
    {
        setIsauth(true)
    }else{
        setIsauth(false);
        // localStorage.clear()
    }
    })
    
    return(<Route {...rest} render={()=>isauth?(children):(<Redirect to={'/admin-login'} />)} />)
}