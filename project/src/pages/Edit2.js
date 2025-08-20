import React from 'react'
import Navbar from '../component/Navbar';
import react,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';

const Edit2 = () => {
    const {id}= useParams();
    const[productsItems,setProductsItems]=useState({})

    useEffect(()=>
    {
        fetch(`https://allbirds-backend.onrender.com/${id}`)
        .then((res)=>res.json())
        .then((data)=>setProductsItems(data))
    },[])

    const handleUpdate=(event)=>{
        event.preventDefault();
        const form= event.target
        const quality=form.quality.value;
        const fit=form.fit.value;
        const brand=form.brand.value;
        const improvement=form.improvement.value;
        const quantity=1;

        const update={quality,fit,brand,improvement,quantity}
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
            window.location.href="/update"

        })
    }
 return (
            <div>
                    <Navbar/>

                <ToastContainer/>
              <div class="card6" >
         <div class="card5" style={{width:"100%"}}>
            <div className='firm'>
        <form onSubmit={handleUpdate}  className='fo'>
            
            <h2 className='cus'>CUSTOMER REVIEW</h2>
            <div class="upload0">
                <label value="title"><b>OUR PRODUCT IS IN HIGH QUALITY? </b></label>
                <input type="text" name="quality" defaultValue={productsItems?.quality} className='in1'/>
            </div>
            <div class="upload1">
                <label value="img"><b>OUR PRODUCT IS FIT FOR YOU?</b></label>
                <input type='text' name="fit" defaultValue={productsItems?.fit} className='in2'/>
                </div>
                <div class="upload2">
                <label value="img"><b>WHAT BRAND WOULD YOU LIKE MOST?</b></label>
                <input type='text' name="brand" defaultValue={productsItems?.brand} className='in3'/>
                </div>
                <div class="upload3">
                <label value="img"><b>WHAT IMPROVEMENT WE WANT TO DO?</b></label>
                <input type='text' name="improvement" defaultValue={productsItems?.improvement} className='in4'/>
                </div> <br />

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

export default Edit2
