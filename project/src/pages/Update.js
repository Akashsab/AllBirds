

import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { FiEdit } from "react-icons/fi";
import Navbar from '../component/Navbar';
import './Update.css';

const Update = () => {
     const[ProductItems,setProductsItems]=useState([]);

  useEffect(()=>{
      fetch(`https://allbirds-backend.onrender.com/reviewget`)
      .then((res)=>res.json())
      .then((data)=>
          setProductsItems(data))
  },[])
  
   const DeleteItems=(id)=>{
    fetch(`https://allbirds-backend.onrender.com/${id}`,{
      method:"DELETE",})
      .then((res)=>res.json())
      .then((data)=>{
          toast.error('deleted successfully');
      setProductsItems((prevProductItems)=>prevProductItems.filter((Items)=>Items._id!==id))
   })
   }
   console.log(ProductItems,"data from")

   return (
    <div >
      
        <Navbar/>
        <div className='bg' >
      <div className='cardtable2' style={{marginLeft:"100px"}}>
      <div className='cardbody' style={{paddingTop:"100px" }}>
  <table>
        <div className='table1 '>
          <table class="table">
  <thead class="table-dark" style={{textAlign:"center"}}>
            <tr>
            <th >Brand</th>
            <th>Fit</th>
            <th>Improvement</th>
            <th>Quality</th>
            <th>QUANTITY</th>
            <th>ACTIONS</th>
        </tr>
  </thead>
  <tbody>
    
            {ProductItems?.map((Item) =>(
                    <tr key={Item._id} style={{backgroundColor:"white"}}>
                    <td style={{textAlign:"center"}}>{Item.brand}</td>
                    <td style={{textAlign:"center"}}>{Item.fit}</td>
                    <td style={{textAlign:"center"}}>{Item.improvement}</td>
                    <td style={{textAlign:"center"}}>{Item.quality}</td>
                    <td style={{textAlign:"center"}}>{Item.quantity}</td>
                  
                    <td> 
                    <button className='table3' placeholder='delete' style={{backgroundColor:"transparent" , border:"0px" , borderStyle:"none" , marginLeft:"20px"}}onClick={()=>DeleteItems(Item._id)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-icon lucide-trash"><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg></button>
                    <Link to={`/edit2/${Item._id}`}><button style={{backgroundColor:"transparent" , border:"0px" , borderStyle:"none" , marginLeft:"20px"}}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil-icon lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg></button></Link> 
                    </td>
                    </tr>  
            ))}
  </tbody>
</table>

        </div>
        {/* <div className='table2'>
        <button  placeholder='submit'>submit</button>
        </div> */}
  </table>
  </div>
  </div>
    </div>
    </div>
  )
}

export default Update
