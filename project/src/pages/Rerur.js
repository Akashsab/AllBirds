import React from 'react'
import './Rerur.css';
import rerunimg1 from '../images/rerunimg1.avif';
import Navbar2 from '../component/Navbar2';

const Rerur = () => {
  return (
    <div >
        <Navbar2/>
        <div class="sec111" style={{backgroundColor:' white'}}>
            <div class="column10">
                <img src={rerunimg1} alt="" class="rer"/>

            </div>
            <div class="column11">
                <h1 class="allb">Allbirds ReRun™ <br/><br/>
A New Way To Get Old Favorites</h1><br/>
<p class="re">Allbirds ReRun™ is a marketplace where you can shop slightly <br/> imperfect and gently used products, extending their life and <br/>lowering our impact on the planet. Allbirds has partnered with Trove,<br/> a company that specializes in circular commerce, to run Allbirds <br/> ReRun™ on our behalf.<br/></p>
<p class="by">By clicking the link below, you will be leaving allbirds.com and <br/> heading to the ReRun marketplace site.</p>
<button class="start">START SHOPING RERUN™</button>
            </div>
        </div> <br/><br/><br/><br/>
        <div class="r2">
            <div class="sbr1">
                <h1 class="the">The Allbirds Approach</h1>
            </div><br/>
            <div class="sbr2">
                <div class="cl1">
                    <h1 class="we">Wear-All-Day Comfort</h1>
                    <p class="lig">Lightweight, bouncy, and wildly comfortable,<br/> Allbirds shoes make any outing feel effortless.<br/> Slip in, lace up, or slide them on and enjoy the <br/> comfy support.<br/><span class="sp">Learn More</span></p>
                    
                </div>
                <div class="cl2">
                    <h1 class="we">Sustainability In Every Step</h1>
                    <p class="lig">From materials to transport, we’re working to reduce <br/> our carbon footprint to near zero. Holding ourselves <br/> accountable and striving for climate goals isn’t a 30-<br/>year goal—it’s now.<br/><span class="sp">Learn More</span></p>
                    
                </div>
                <div class="cl3">
                    <h1 class="we">Materials From The Earth</h1>
                    <p class="lig">We replace petroleum-based synthetics with natural <br/> alternatives wherever we can. Like using wool, tree fiber,<br/> and sugar cane. They’re soft, breathable, and better for the <br/> planet—win, win, win.<br/><span class="sp">Learn More</span></p>
                    
                </div>

            </div>
        </div>
<div class="sec8" style={{backgroundColor:'black' , color:'white'}}><br/><br/>
  <h1 class="want">Want First Dibs?</h1><br/>
  <p class="join">Join our email list and be the first to know about new limited edition products,<br/> material innovations, and lots of other fun updates.</p><br/>
  <input type="text" placeholder='Enter Your Email Address' id="textt" />
  <button class="upp">SIGN UP</button>
  <p class="note">Note: You can opt-out at any time. See our <span style={{color:'white' , textDecoration:'underline' , fontWeight:'bold'}}>Privacy Policy</span> and <span style={{color:'white' , textDecoration:'underline' , fontWeight:'bold'}} >Terms.</span></p><br/>
</div>

    </div>
  )
}

export default Rerur