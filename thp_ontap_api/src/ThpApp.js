
import './App.css';
import ThpListUsers from './components/ThpListUsers';
import axios from './api/thpApi'
import { useEffect, useState } from 'react';
function ThpApp() {

  const [thpListUsers, setThpListUsers]=useState([]);

  //ham doc du lieu tu Api
  const thpGetAllUsers = async()=>{
    const thpRespone = await axios.get("thpUsers");
    console.log("Api Data:", thpRespone.data);
    setThpListUsers(thpRespone.data);
  }

  useEffect(()=>{
    thpGetAllUsers();
    console.log("State Data:",thpListUsers);
  },[])


  return (
    <div className="container border my-3">
      <h1>Lam viec vs Api</h1>
      <hr/>
      <ThpListUsers renderThpListUsers={thpListUsers}/>
    </div>
  );
}

export default ThpApp;
