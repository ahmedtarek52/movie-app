import React from 'react'
import { Helmet } from 'react-helmet';

export default function Profile({userData}) {
    let {id }= userData;
    console.log(userData);
  return (
    <>

<Helmet>
                <meta charSet="utf-8" />
                <title>Profile</title>
            </Helmet>
    <h4>id :{id}</h4>
   
   
    </>
  )
}
