import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import './List.css'
import { toast } from 'react-toastify'

const List = () => {
 
  const[list,setList] = useState([]);
  const url = 'http://localhost:4000';

  const fetchList = async()=> {
    const response = await axios.get(`${url}/api/food/list`);
    console.log(response.data);
    if(response.data.success){
      setList(response.data.foods);
    }else {
     toast.error("Error");
    }
  }
  useEffect(() => { 
    fetchList();
  },[])
  return (
    <div className='list add flex-col'>
      <p>All Foods List</p>
    </div>
  )
}

export default List