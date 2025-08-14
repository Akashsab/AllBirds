import React from 'react'
import './Navbar.css';
import logo1 from '../images/logo1.png';
import{Link} from 'react-router-dom';


const Navbar2 = () => {
  return (
    <div>
              <div class="row1">
                <ul class="list">
                  <Link to="/men" style={{textDecoration:'none' , color:'black'}}><li>MEN</li></Link>
                  <Link to="/women" style={{textDecoration:'none' , color:'black'}}><li>WOMEN</li></Link>
                  <Link to="/socks" style={{textDecoration:'none' , color:'black'}}><li>SOCKS</li></Link>
                  <Link to="/posttable" style={{textDecoration:'none' , color:'black'}}><li>TABLE</li></Link>
                  
                 
                 <Link to="/" style={{textDecoration:'none' , color:'black'}}> <li><img src={logo1} alt="" height="55px"class="img1"/> </li></Link>
                 
                  <Link to="/rerur" style={{textDecoration:'none' , color:'black'}}><li>RERUN</li></Link>
                   <Link to="/upload" style={{textDecoration:'none' , color:'black'}}><li>REVIEW</li></Link>
                   <Link to="/post" style={{textDecoration:'none' , color:'black'}}><li>POST</li></Link> 
                   <Link to="/update" style={{textDecoration:'none' , color:'black'}}><li>UPDATE</li></Link>
                   
                  
                   <Link to="/validation" style={{textDecoration:'none' , color:'black'}}> <li class="sv"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg></li></Link>
                  <Link to='/login' style={{textDecoration:'none' , color:'black'}}> <li class="sv"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></li></Link>
                   <Link to='/register' style={{textDecoration:'none' , color:'black'}}> <li class="sv"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-question-mark-icon lucide-circle-question-mark"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg></li></Link> 
                  <Link to='/cart'  style={{textDecoration:'none' , color:'black'}}> <li class="sv1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart-icon lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg></li></Link>
                </ul>
              </div>
    </div>
  )
}

export default Navbar2