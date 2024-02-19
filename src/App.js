
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Movies from './Components/Movies/Movies';
import Tv from './Components/Tv/Tv';
import Profile from './Components/Profile/Profile';
import People from './Components/People/People';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from 'react';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import ItemDetails from './Components/ItemDetails/ItemDetails';
import { Offline, Online } from 'react-detect-offline';




function App() { 
useEffect(()=>{
  if(localStorage.getItem('userToken') !==null)
  {
    saveUserData()
  }
},[])

const [userData, setuserData] = useState(null)
function saveUserData(){
let encodedToken = localStorage.getItem('userToken');
let decodedToken = jwtDecode(encodedToken);
// console.log(decodedToken);
setuserData(decodedToken);


}
  let routers = createBrowserRouter ([
    {path:'/' , element:<Layout setuserData={setuserData} userData={userData}/> , children:[
       { index:true ,element:<ProtectedRoute userData={userData}><Home/></ProtectedRoute>},
       { path:"movies" ,element:<ProtectedRoute userData={userData}><Movies/> </ProtectedRoute>},
       { path:"tv" ,element:<ProtectedRoute userData={userData}> <Tv/></ProtectedRoute>},
       { path:"profile" ,element:<ProtectedRoute userData={userData}><Profile userData={userData}/> </ProtectedRoute>},
       { path:"people" ,element:<ProtectedRoute userData={userData}> <People/></ProtectedRoute>},
       { path:"itemdetails/:id/:media_type" ,element:<ProtectedRoute userData={userData}> <ItemDetails/></ProtectedRoute>},
       { path:"login" ,element:<Login  saveUserData={saveUserData}/>},
       { path:'register' ,element:<Register/>}
    ]}
  ])



  return (
   <>

   <div>
    <Offline><div className=' offline bg-danger text-center'>YOU ARE OFFLINE</div></Offline>
   </div>
   <RouterProvider router={routers}/> 
 
   </>
 
  );
}

export default App;
