
import Navbar from '../component/Navbar';
import './Men.css';
import { useDispatch,useSelector } from 'react-redux';
import { deleteFromCart,addTocart } from '../Redux/Cardslice';
import Shoescard from '../mapping/Shoescard';

const Shoe = () => {
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
              {Shoescard.map((item)=>(  
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
   </div>
     
  )
}

export default Shoe