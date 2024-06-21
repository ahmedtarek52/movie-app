import React from 'react'
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute(props) {
// console.log(props);
if(!localStorage.getItem('userToken'))
{
    alert("You must be logged in to view this page");
    // console.log('yes');
    return <Navigate to='/login'/>
}
else{ 
    // console.log('no');
    return props.children;

}


} 
