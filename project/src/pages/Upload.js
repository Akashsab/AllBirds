import React from 'react'
import { ToastContainer ,toast } from 'react-toastify';
import Navbar from '../component/Navbar';
import './Upload.css';
// import { useEffect } from 'react';

const Upload = () => {

    const handleSubmit=(event)=>{

        event.preventDefault();
        
        const form=event.target;
        const quality=form.quality.value;
        const fit=form.fit.value;
        const brand=form.brand.value;
        const improvement=form.improvement.value;
      
        const quantity=1;

        if(quality==="" || fit==="" || brand==="" || improvement==="" )
        {
            toast.warn('fill Required ');
        }else{
            const foods={quality,fit,brand,improvement,quantity};
            // console.log(foods,"foods in object ");
            
            fetch('https://all-birds-clone-2.onrender.com/reviewpost',{
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(foods),
            })
            // .then((res)=>res.json())
            .then((data)=>{
                toast.success('added successfully');
                form.reset();
                window.location.href="/update"
            }
            )

        }

        }

        return (
            <div>
                    <Navbar/>

                <ToastContainer/>
              <div class="card6" >
         <div class="card5" style={{width:"100%"}}>
            <div className='firm'>
        <form onSubmit={handleSubmit}  className='fo'>
            
            <h2 className='cus'>CUSTOMER REVIEW</h2>
            <div class="upload0">
                <label value="title"><b>OUR PRODUCT IS IN HIGH QUALITY? </b></label>
                <input type="text" name="quality" className='in1'/>
            </div>
            <div class="upload1">
                <label value="img"><b>OUR PRODUCT IS FIT FOR YOU?</b></label>
                <input type='text' name="fit" className='in2'/>
                </div>
                <div class="upload2">
                <label value="img"><b>WHAT BRAND WOULD YOU LIKE MOST?</b></label>
                <input type='text' name="brand" className='in3'/>
                </div>
                <div class="upload3">
                <label value="img"><b>WHAT IMPROVEMENT WE WANT TO DO?</b></label>
                <input type='text' name="improvement" className='in4'/>
                </div> <br />

            <div class="upload7">
                <button type="submit" class="btnn">UPLOAD</button>
                
            </div>
            
        </form>
        </div>
        </div>
        </div>
    </div>
    
       )

}


export default Upload
