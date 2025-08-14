import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { deleteFromCart,updateQuantity } from '../Redux/Cardslice';
import Navbar from '../component/Navbar';
import './Men.css';

const Cartpage = () => {
    const cartitems=useSelector((state)=>state.cart.cartitems);
    const dispatch=useDispatch();
    const deleteCart=(item)=>{
          dispatch(deleteFromCart(item))
      }

      const incrementCart=(id,quantity)=>{
         dispatch(updateQuantity({id,  quantity : quantity+1}))
      }

  const decrementCart=(id,quantity)=>{
    if(quantity>1){
      dispatch(updateQuantity(
        {id, quantity : quantity-1}
      )
      )
    }
  }
return (
    <div>

        <Navbar/>
              <div className='carr'>
        <h1>FASHION IS WHAT <br /> YOU BUY<br /> STYLE IS WHAT <br /> YOU DO WITH IT</h1>

      </div>
      <div className='yyu'>
        Your Cart Will Shown Below.
      </div> <br /><br />

      {cartitems.length===0?( <div style={{ textAlign: 'center', fontSize: '24px', color: 'gray' }}>
                    Your cart is empty
                </div>):(

            <div class="dress" >
            <div class="cardd-group" >
              {cartitems.map((item)=>(  
                <div class="card" key={item.id}>
    <img class="im" src={item.img} alt='' height="300px" width="300px"  style={{backgroundColor:'rgb(245, 245, 245);'}}/>
    <div class="card-body">
      <h5 class="card-title">{item.title} </h5>
      <p class="card-text">{item.price}</p>
       <div className='' style={{display:'flex',justifyContent:'center',marginBottom:'20px'}}>
                                <button className='quantity' onClick={()=>{decrementCart(item.id,item.quantity)}}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-minus-icon lucide-circle-minus"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/></svg></button>
                                {item.quantity}
                                 <button className='quantity' onClick={()=>{incrementCart(item.id,item.quantity)}} ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-plus-icon lucide-circle-plus"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg></button>
                            </div>
                      
 
                            <button class="cartbutto" onClick={()=>deleteCart(item)} > DELETE</button>

    </div>

  </div>
  ))}
  </div>
  </div>
  )}
  </div>
)}
export default Cartpage