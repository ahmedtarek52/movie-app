import {Helmet} from "react-helmet";
import MediaItem from '../MediaItem/MediaItem'
import { useContext } from 'react';
import { DataContext } from '../../Context/Context';

export default function Home() {
  let { trendingMovies,trendingTv,trendingPerson} =useContext(DataContext);


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
