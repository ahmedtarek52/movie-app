import React from 'react'
import MediaItem from '../MediaItem/MediaItem'
import {Helmet} from "react-helmet";
import { useContext } from 'react';
import { DataContext } from '../../Context/Context';

export default function Tv() {
  let {trendingTv} =useContext(DataContext);
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Tv</title>
    </Helmet>
    <div className='row py-5'>
      {trendingTv.map((item , index)=><MediaItem key={index} item={item}/>)}
   </div>
    </>
  )
}
