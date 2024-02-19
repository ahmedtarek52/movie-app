import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
export default function ItemDetails() {
    let {id , media_type} = useParams();
const [itemDetails, setitemDetails] = useState({})

    async function getItemDetails(id , mediaType)
    {
        let {data} =await axios.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=93615ac3784952116c3b1a543ac98a15`)
        setitemDetails(data);
    
    }
useEffect(()=>{
    getItemDetails(id , media_type)
}, [])

  return (
    <div className='row'>
        <div className='col-md-3'>
        {itemDetails.poster_path?<img src={'https://image.tmdb.org/t/p/w500/'+itemDetails.poster_path} className='w-100' alt="" />:<img src={'https://image.tmdb.org/t/p/w500/'+itemDetails.profile_path} className='w-100' alt="" />}
        </div>
        <div className='col-md-9'>
            <h2>{itemDetails.title}{itemDetails.name}</h2>
            <p className='py-2 text-light'>{itemDetails.overview}</p>
            <h6 className='py-2'>vote_average:            {itemDetails.vote_average && <div className="vote p-2 text-light ">{itemDetails.vote_average?.toFixed(1)}</div>}</h6>
            <h6 className='py-2'>vote_count:            {itemDetails.vote_average && <div className="vote p-2 text-light ">{itemDetails.vote_count?.toFixed(1)}</div>}</h6>
        </div>
    </div>
  )
  }