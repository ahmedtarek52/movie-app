import React from 'react'
import MediaItem from '../MediaItem/MediaItem'
import { Helmet } from 'react-helmet'
import { useContext } from 'react';
import { DataContext } from '../../Context/Context';

export default function Movies() {
  let { trendingMovies} =useContext(DataContext);
  return (
  <>
  <Helmet>
      <meta charSet="utf-8" />
      <title>Movies</title>
  </Helmet>
  <div className='row py-5'>
      {trendingMovies.map((item , index)=><MediaItem key={index} item={item}/>)}
   </div>    
  </>
  
  )
}
