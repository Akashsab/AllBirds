import Navbar from '../component/Navbar';

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';


const Edit = () => {
  
    const{id}=useParams();

    const [productsItems,setproductsItems]=useState ({})

    useEffect(()=>{
     fetch(`https://allbirds-backend.onrender.com/${id}`)
       .then((res)=>res.json())
       .then((data)=>setproductsItems(data))
      },[])

    const handleUpdate=(event)=>{
    event.preventDefault();
    const form=event.target;
    const gender=form.gender.value
    const favoutfit=form.favoutfit.value
    const size=form.size.value
    const favclr=form.favclr.value
    const quantity=1

    const update={gender,favoutfit,size,favclr,quantity};
    console.log(update);

    fetch(`https://allbirds-backend.onrender.com/${id}`,{
        method:"PATCH",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(update),
        })
        .then((data)=>{
        toast.success("successfully updated");
        window.location.href="/posttable";
        })
    } 
 
 return (
    
    <div>
                    <Navbar/>

                <ToastContainer/>
              <div class="card6" >
         <div class="cardd" style={{width:"100%"}}>
            <div className='firm' >
        <form onSubmit={handleUpdate} className='form1' >
            
            <h2 className='cus'>CUSTOMER POST</h2>
            <div class="upload0">
                <label value="title"><b>WHATS YOUR GENDER? </b></label>
                <input type="text" name="gender" className='in1' defaultValue={productsItems?.gender} style={{marginLeft:"150px"}}/>
            </div>
            <div class="upload1">
                <label value="img"><b>YOUR FAVORITE OUTFIT?</b></label>
                <input type='text' name="favoutfit" className='in2' defaultValue={productsItems?.favoutfit} style={{marginLeft:"140px"}}/>
                </div>
                <div class="upload2">
                <label value="img"><b>CLOTH SIZE?</b></label>
                <input type='text' name="size" className='in3' defaultValue={productsItems?.size} style={{marginLeft:"235px"}}/>
                </div>
                <div class="upload3">
                <label value="img"><b>YOUR FAVORITE COLOR?</b></label>
                <input type='text' name="favclr" className='in4' defaultValue={productsItems?.favclr} style={{marginLeft:"145px"}}/>
                </div><br />

            <div class="upload7">
                <button type="submit" class="btnn">UPDATE</button>
                
            </div>
            
        </form>
        </div>
        </div>
        </div>
    </div>
 
  )
}


export default Edit

