
import React,{useState} from 'react'
import { register } from './Auth';
import { useNavigate } from 'react-router-dom';
import './regandlog.css';
import form from '../images/form.jpg';


const Register = () => {
    const [username,setusername]=useState('');
    const [password,setpassword]=useState('');
    const [error,seterror]=useState('');
    const [success,setsuccess]=useState('');
    const navigate=useNavigate();
          const Validation=()=>{
        const newError={}
        if(!username) newError.username="invalid username";

         if(!password) newError.password="invalid password";
        else{
          if(password.length<6) newError.password="must in 6 character";
          if(!/[a-z]/.test(password)) newError.password="must one lowercase character";
          if(!/[A-Z]/.test(password)) newError.password="must one uppercase character";
          if(!/[!@#$%&*?]/.test(password)) newError.password="must one in special character";
    
        }
        return newError;
      }
      

    const handleSubmit=async(e)=>{
        e.preventDefault();

       
        
        const validationerror=Validation();
        
        if(Object.keys(validationerror).length===0)
        {
                    try{
            await register(username,password);
            setsuccess('registered successfully');
            seterror('');
            navigate("/login");

        }catch(err){
            console.log("registration error",err);
            seterror("registration failed");
            setsuccess('');
        }

        }else{
            seterror(Object.values(validationerror).join(','));
            setsuccess('');
        }
          

        
             
    }
    


  return (
  <div className='reg'> <br /><br /><br /><br /><br /><br />

  <div className='fop'> 
 
      <form onSubmit={handleSubmit} >
                <label>UserName</label><br />
                <input 
                    type='text'
                    name='name' 
                    value={username}
                     className='inn'
                   
                    onChange={(e)=>setusername(e.target.value)}/>

            <br></br><br></br>

            <label>Password</label><br />
                <input 
                    type='password'
                    name='password' 
                    value={password}
                     className='inn'
                    onChange={(e)=>setpassword(e.target.value)}/>
        <br></br><br></br>

        <button type='submit' className='rl'>Register</button>
        {success && <p style={{color:"Green"}}>{success}</p>}
        {error && <p style={{color:'red'}}>{error}</p>}
     
            </form>
            </div>
            </div>
           
            
            
    )
}



export default Register