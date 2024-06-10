import React from 'react'
import { Helmet } from 'react-helmet'
import MediaItem from '../MediaItem/MediaItem'
import { useContext } from 'react';
import { DataContext } from '../../Context/Context';

export default function People() {
  let {trendingPerson} =useContext(DataContext);

  return (
    <>

<Helmet>
  <meta charSet="utf-8" />
  <title>People</title>
</Helmet>
<div className='row  py-5'>
    {trendingPerson.filter((item)=>item.proile_path !== null).map((item , index)=><MediaItem key={index} item={item}/>)}
   </div>

    </>
  )
}
