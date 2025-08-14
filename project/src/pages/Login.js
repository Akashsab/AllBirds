import React, {  useState } from 'react'

import { login } from './Auth';
import { useNavigate } from 'react-router-dom';
import './regandlog.css';

const Login = props => {

    const [username,setusername]=useState('');
    const [password,setpassword]=useState('');
    const [error,seterror]=useState('');
    const [success,setsuccess]=useState('');
    const navigate=useNavigate();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const token=await login(username,password);
            console.log('login successful, token: ',token);
            alert('login successfully');
            setusername('')
            setpassword('')
            setsuccess('successfully logged in')
            seterror('')
             navigate("/");
        }catch(err){
            console.log('login error',err);
            seterror('logged failed');
            setsuccess('')
        }

    }
  return (
    <div className='regg'><br /><br /><br /><br /><br /><br />
        <div className='fopp'>
    
   <form onSubmit={handleSubmit}>
    <label>UserName</label>
    <input 
        type='text'
        name='name' 
        value={username}
        className='inn'
        onChange={(e)=>setusername(e.target.value)}/>

 <br></br><br></br>

 <label>Password</label>
    <input 
        type='password'
        name='password' 
        value={password}
        className='inn'
        onChange={(e)=>setpassword(e.target.value)}/>

<br></br><br></br>

    <button type='submit' className='rl'>Login</button>
    {success && <p style={{color:"Green"}}>{success}</p>}
    {error && <p style={{color:'red'}}>{error}</p>}

</form>
</div></div>
  )
}

Login.propTypes = {}

export default Login