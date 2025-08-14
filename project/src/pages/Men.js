import React from 'react'
import Navbar from '../component/Navbar';
import './Men.css';
import Moutf from '../mapping/Moutf';
import { useDispatch,useSelector } from 'react-redux';
import { deleteFromCart,addTocart } from '../Redux/Cardslice';

const Men = () => {
    const cartitems=useSelector((state)=>state.cart.cartitems);
    const dispatch=useDispatch();
    const addCart=(item)=>{
          dispatch(addTocart(item))
      } 
        const deleteCart=(item)=>{
          dispatch(deleteFromCart(item))
      }

  return (
    <div>
        <Navbar/>
        <div class="dress" >
            <div class="cardd-group" >
              {Moutf.map((item)=>(  
                <div class="card" key={item.id}>
    <img class="im" src={item.img} alt='' height="300px" width="300px"  style={{backgroundColor:'rgb(245, 245, 245);'}}/>
    <div class="card-body">
      <h5 class="card-title">{item.title} </h5>
      <p class="card-text">{item.price}</p>
      {
         cartitems.find(reduxdata=>reduxdata.id===item.id)?
                              (
                                    <button class="cartbuttonn" onClick={()=>deleteCart(item)} > REMOVE FROM CART </button>
                                    )
                                    :
                                    (<button class="cartbutton"  onClick={()=>addCart(item)} > ADD TO CART </button>
                                  )
                              }
      







    </div>

  </div>
  ))}
  </div>
  </div>
  {/* <div class="card" >
    <img class="im" src={pant1} alt="" height="300px" width="300px"/>
    
    <div class="card-body">
      <h5 class="card-title">Unisex Organic Cotton Graphic tee</h5>
      <p class="card-text">$35</p>

    </div>
  </div> */}
  {/* <div class="card">
    <img class="im" src={pant3} alt="" height="300px" width="300px" />
    <div class="card-body">
      <h5 class="card-title">anytime No Show Sock</h5>
      <p class="card-text">$35</p>

    </div>
  </div> */}

       
                {/* <div class="dress">
            <div class="card-group">
  <div class="card">
    <img class="im" src={greysh} alt='' height="300px" width="300px"/>
    <div class="card-body">
      <h5 class="card-title">Men's Merino Blend Sweatshirt</h5>
      <p class="card-text">$63</p>

    </div>
  </div>
  <div class="card" >
    <img class="im" src={greysh2} alt="" height="300px" width="300px" style={{backgroundColor:' rgb(245, 245, 245)'}}/>
    
    <div class="card-body">
      <h5 class="card-title">Men's Merino Blend Sweatpant</h5>
      <p class="card-text">$66</p>

    </div>
  </div>
  <div class="card">
    <img class="im" src={sock} alt="" height="300px" width="300px" />
    <div class="card-body">
      <h5 class="card-title">Men's Merino Blend Hoodie</h5>
      <p class="card-text">$69</p>

    </div>
  </div>
</div>
        </div> */}
    </div>
    
  )
}

export default Men