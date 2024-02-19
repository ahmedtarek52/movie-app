import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MediaItem from '../MediaItem/MediaItem'
import {Helmet} from "react-helmet";


export default function Home() {


  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingTv, setTrendingTv] = useState([]);
  const [trendingPerson, setTrendingPerson] = useState([]);

async function getTrending(mediaType , callback)
{
  let {data}  = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=93615ac3784952116c3b1a543ac98a15`)
  callback(data.results);
  
}

  useEffect(()=>{
    getTrending('movie',setTrendingMovies)
    getTrending('tv' , setTrendingTv)
    getTrending('person' , setTrendingPerson)
  
  },[]);
  return (
    <>

            <Helmet>
                <meta charSet="utf-8" />
                <title> Home</title>
            </Helmet>



   <div className='row py-5'>
    <div className='col-md-4 d-flex align-items-center'>
      <div>
      <div className='brdr w-25 mb-3'></div>
      <h2 className='h5'> Trending Movies</h2>
      <p className='py-2 text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam mollitia aspernatur perferendis pariatur error possimus?</p>
      <div className='brdr w-100 mb-3'></div>
      </div>
    </div>

      {trendingMovies.slice(0,10).map((item , index)=><MediaItem key={index} item={item}/>)}
  
   </div>
   <div className='row py-5'>
    <div className='col-md-4 d-flex align-items-center'>
      <div>
      <div className='brdr w-25 mb-3'></div>
      <h2 className='h5'> Trending Tv</h2>
      <p className='py-2 text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam mollitia aspernatur perferendis pariatur error possimus?</p>
      <div className='brdr w-100 mb-3'></div>
      </div>
    </div>

      {trendingTv.slice(0,10).map((item , index)=><MediaItem key={index} item={item}/>)}
  
   </div>
   <div className='row  py-5'>
    <div className='col-md-4 d-flex align-items-center'>
      <div>
        <div className='brdr w-25 mb-3'></div>
        <h2 className='h5'> Trending People</h2>
        <p className='py-2 text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam mollitia aspernatur perferendis pariatur error possimus?</p>
        <div className='brdr w-100 mb-3'></div>
        </div>
      </div>
   
    {trendingPerson.filter((item)=>item.proile_path !== null).slice(0,10).map((item , index)=><MediaItem key={index} item={item}/>)}

   </div>
   </>)
}
