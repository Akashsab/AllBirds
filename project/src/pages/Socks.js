import React from 'react'
import Navbar from '../component/Navbar'
import Navbar2 from '../component/Navbar2'
import "./Socks.css";
import Sockcard from '../mapping/Sockcard';
import "./Men.css";
import { useSelector,useDispatch } from 'react-redux';
import { deleteFromCart,addTocart } from '../Redux/Cardslice';

const Socks = () => {
  const cartitems=useSelector((state)=>state.cart.cartitems);
  const dispatch=useDispatch();
  const addCart=(item)=>{ 
    dispatch( addTocart(item))
  }
  const deleteCart=(item)=>{
    dispatch(deleteFromCart(item))
  }
  return (
    <div>
         <Navbar2/>
        <div className='so' style={{textAlign:'center'}}>
        <h1 className='any'>Anytime Socks</h1>
        <p className='made'>Made with a blend of light, breathable <br /> materials like tree fiber and Organic Cotton,<br /> our socks keep your feet cool, dry, and <br /> smiling (if feet could smile).</p>
    </div><br /><br /><br />
    <div className='no'>
        <h1 className='sho' style={{fontSize:'25px' , fontWeight:'bold'}}>
            No Show Socks
        </h1> <br />
        <p className='lig' style={{fontSize:'17px'}}>Light, breathable and made to move and groove without budging.</p>
    </div>
            <div class="dress" >
            <div class="cardd-group" >
              {Sockcard.map((item)=>(  
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
                                    (<button class="cartbutton"  onClick={()=>addCart(item)} >ADD TO CART </button>
                                  )
      }

    </div>

  </div>
  ))}
  </div>
  </div>
    </div>

  )
}

export default Socks