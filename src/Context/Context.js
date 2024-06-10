import { createContext,  useEffect, useState  } from "react";
import axios from 'axios';

export let DataContext = createContext('');
function DataContextProvide(props)
{
   
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


    return <DataContext.Provider value={{trendingMovies,trendingTv,trendingPerson}}>
        {props.children}
    </DataContext.Provider>
}
export default DataContextProvide;