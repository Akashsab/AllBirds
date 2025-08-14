import React from 'react'
import { ToastContainer ,toast } from 'react-toastify';
import Navbar from '../component/Navbar';
import './Upload.css';

const Post = () => {
    const handleSubmit=(event)=>{
        event.preventDefault();
        const form= event.target;
        const gender=form.gender.value;
        const favoutfit=form.favoutfit.value;
        const size=form.size.value;
        const favclr=form.favclr.value;
        const quantity=1;
        
        if(gender==="" || favoutfit==="" || size==="" || favclr==="")
        {
            toast.warn('Fill required');
        }
        else{
            const coll={gender,favoutfit,size,favclr,quantity};

            fetch('http://localhost:7000/insertpost' , {
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(coll),
            })
            .then((data)=>{
                toast.success('Added Successfully');
                form.reset();
                window.location.href="/posttable"
               
            })
        }
    }
  return (
    
    <div>
                    <Navbar/>

                <ToastContainer/>
              <div class="card6" >
         <div class="cardd" style={{width:"100%"}}>
            <div className='firm' >
        <form onSubmit={handleSubmit} className='form1' >
            
            <h2 className='cus'>CUSTOMER POST</h2>
            <div class="upload0">
                <label value="title"><b>WHATS YOUR GENDER? </b></label>
                <input type="text" name="gender" className='in1' style={{marginLeft:"150px"}}/>
            </div>
            <div class="upload1">
                <label value="img"><b>YOUR FAVORITE OUTFIT?</b></label>
                <input type='text' name="favoutfit" className='in2' style={{marginLeft:"140px"}}/>
                </div>
                <div class="upload2">
                <label value="img"><b>CLOTH SIZE?</b></label>
                <input type='text' name="size" className='in3' style={{marginLeft:"235px"}}/>
                </div>
                <div class="upload3">
                <label value="img"><b>YOUR FAVORITE COLOR?</b></label>
                <input type='text' name="favclr" className='in4' style={{marginLeft:"145px"}}/>
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

export default Post