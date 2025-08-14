import React from 'react'
import './Home.css';
import background1 from '../images/background1.jpg';
import background2 from '../images/background2.jpg';
import allb from '../images/allb.svg';
import cd1 from '../images/cd1.png';
import cd2 from '../images/cd2.png';
import cd3 from '../images/cd3.png';
import cd4 from '../images/cd4.png';
import cd5 from '../images/cd5.png';
import cd6 from '../images/cd6.png';
import cd7 from '../images/cd7.png';
import cd8 from '../images/cd8.png';
import cd9 from '../images/cd9.png';
import cd10 from '../images/cd10.png';
import Navbar from '../component/Navbar';
import { Link } from 'react-router-dom';



const Home = () => {
  return (
    <div>
      <Navbar/>
    
        <div class="row2">
            <ul>
                <li class="list2">Men's Shoes</li>
                <li class="list2">Women's Shoes</li>
                <li class="list2">New Arrivals</li>
            </ul>
        </div>
        <div class="sec2">
           <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={background1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1 class="sn">White Sneaker<br/> Season</h1>
        <p class="par1">Classic summer style starts with our wildly comfortable kicks.</p>
       <Link to="/men"> <button class="men">SHOP MEN</button></Link>
        <Link to="/women"><button class="women">SHOP WOMEN</button></Link>
      </div>
    </div>
    <div class="carousel-item">
      <img src={background2} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 class="ne">New Colors.<br/> Iconic Comfort.</h5>
        <p class="par2">Our limited-edition collection pairs breathability with versatility.</p>
        <button class="men">SHOP MEN</button>
        <button class="women">SHOP WOMEN</button>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

        </div>
        <br/> <br/>
        <div class="sec3">
            <div class="column1"><br/><br/>
                <h1 class="bes">Bestsellers</h1>
                <p class="par3">Fan-Favorite Sneakers, Flats, and Slip-Ons</p>
                <Link to="/men"><button class="hover2">SHOP MEN</button></Link>
                <Link to="/women"><button class="hover2">SHOP WOMEN</button></Link>
            </div>
            <div class="column2"><br/><br/>
                <h1 class="bes">New Arrivals</h1>
                <p class="par3">The Latest Styles & Limited-Edition Colors</p>
                <Link to="/men"><button class="hover2">SHOP MEN</button></Link>
                <Link to="/women"><button class="hover2">SHOP WOMEN</button></Link>

            </div>
            <div class="column3"><br/><br/>
                <h1 class="bes">Summer Essentials</h1>
                <p class="par3">Breezy Shoes For Warmer Days</p>
               <Link to="/men"> <button class="hover3">SHOP MEN</button></Link>
                <Link to="/women"><button class="hover3">SHOP WOMEN</button></Link>

            </div>
        </div><br/>
        <div class="sec4">
          <h1 class="hh">We Make Better Things In A Better Way</h1><br/>
          <p class="parr">By looking to the world’s greatest innovator—Nature—we create shoes that deliver <br/> unrivaled comfort that you feel good in and feel good about.</p>
          <br/><img class="nan" src={allb} alt="" height="50px"/> <br/><br/><br/>
        </div><br/>
        <div class="sec5">
          <div class="column4">
            <h1 class="rock">Rock And Stroll In Comfort</h1>
            <p class="eff">Effortlessly comfy styles take color cues from the Southwest’s rustic <br/> rock formations.</p>
             <Link to="/men"><button class="bu1">SHOP MEN</button></Link>
            <Link to="/women"><button class="bu2">SHOP WOMEN</button></Link>
          </div>
          <div class="column5">
            <div class="row3">
              <div class="subcl1">
                <h5 class="tree"><pre>Tree Dasher2                <span class="d">$108 </span>̶<span class="dd">̶$135</span></pre></h5>
                <p class="rus">Rustic Orange <Link to="/shoe"><button class="shoe">View More</button></Link></p>
                
              </div>
              <div class="subcl2">
                <h5 class="tree"><pre>Tree Runner Go               <span class="d">$96 </span>̶<span class="dd">̶̶$120</span></pre></h5>
                <p class="rus">Natural White/Rustic Orange <Link to="/shoe"><button class="shoe">View More</button></Link></p>
              </div>
              
            </div>
            <div class="row4">
              <div class="subcl3">
                <h5 class="tree"><pre>Tree piper                   <span class="d">$73 </span>̶<span class="dd">̶̶̶$150</span></pre></h5>
                <p class="rus">Blizzard/Rustic Orange <Link to="/shoe"><button class="shoe">View More</button></Link></p>
              </div>
              <div class="subcl4">
                <h5 class="tree"><pre>Tree Runner                   <span class="d">$68 </span>̶<span class="dd">̶̶̶$98</span></pre></h5>
                <p class="rus">Natural White/Rustic Orange <Link to="/shoe"><button class="shoe">View More</button></Link></p>
              </div>
            </div>
          </div>
        </div><br/>
        <div class="sec6">
          <div class="column6">
            <h1 class="c">Cards On The Table</h1>
            <p class="hos">Hosted by Stanly Tucci</p>
            <button class="watch">WATCH NOW</button>
          </div>
          <div class="column7">
            <h1 class="c">Canvas Piper</h1>
            <p class="hos">Versatile Style, Durable Design</p>
            <Link to="/men"><button class="s">SHOP MEN</button></Link>
           <Link to="/women"><button class="sh">SHOP WOMEN</button></Link> 
          </div>
        </div><br/>
        <div class="sec7">
          <h1 class="more">MORE TO SHOP</h1><br/>
          
        </div>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" >
  <div class="carousel-inner">
    <div class="carousel-item active" >
<div class="card-group">
  <div class="card">
    <img src={cd1} class="card-img-top" style={{backgroundColor:'rgb(245, 245, 245)'}} alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Women's Canvas Paper</h5>
      <p class="card-text">Blizzard <br/>$90 <Link to="/shoe"><button class="shoe">View More</button></Link></p>

    </div>
  </div>
    <div class="card">
    <img src={cd2} class="card-img-top" style={{backgroundColor:'rgb(245, 245, 245)'}} alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Men's Tree Runner Go</h5>
      <p class="card-text">Blizzard/Hanami Night<br/><span style={{color:'rgb(181, 0, 0)'}}>$72</span> <span style={{textDecoration:'line-through'}}>$120</span> <Link to="/shoe"><button class="shoe">View More</button></Link></p>
 
    </div>
  </div>
  <div class="card">
    <img src={cd3} class="card-img-top" style={{backgroundColor:'rgb(245, 245, 245)'}} alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Women's Tree Glider</h5>
      <p class="card-text">Blizzard/Hanami Blue <br/>$135 <Link to="/shoe"><button class="shoe">View More</button></Link></p>

    </div>
  </div>
  <div class="card">
    <img src={cd4} class="card-img-top" style={{backgroundColor:'rgb(245, 245, 245)'}} alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Men's Tree Dasher 2-Utility</h5>
      <p class="card-text">Natural White/Rustic Brown <br/>$145 <Link to="/shoe"><button class="shoe">View More</button></Link></p>

    </div>
  </div>
</div>
    </div>
    <div class="carousel-item">
     <div class="card-group">
  <div class="card">
    <img src={cd5} class="card-img-top" style={{backgroundColor:'rgb(245, 245, 245)'}} alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Women's Luonger Lift </h5>
      <p class="card-text">Zen Mauve <br/><span style={{color:'rgb(181, 0, 0)'}}>$89</span> <span style={{textDecoration:'line-through'}}>$105</span> <Link to="/shoe"><button class="shoe">View More</button></Link></p>
    
    </div>
  </div>
    <div class="card">
    <img src={cd6} class="card-img-top" style={{backgroundColor:'rgb(245, 245, 245)'}} alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Men's Tree Runner</h5>
      <p class="card-text">Hazy Pine<br/><span style={{color:'rgb(181, 0, 0)'}}>$68</span> <span style={{textDecoration:'line-through'}}>$98</span> <Link to="/shoe"><button class="shoe">View More</button></Link></p>

    </div>
  </div>
  <div class="card">
    <img src={cd7} class="card-img-top" style={{backgroundColor:'rgb(245, 245, 245)'}} alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Women's Tree Runner Go-Utility</h5>
      <p class="card-text">Blizzard/Hazy Pine<br/><span style={{color:'rgb(181, 0, 0)'}}>$104</span> <span style={{textDecoration:'line-through'}}>$130</span> <Link to="/shoe"><button class="shoe">View More</button></Link></p>
     
    </div>
  </div>
  <div class="card">
    <img src={cd8} class="card-img-top" style={{backgroundColor:'rgb(245, 245, 245)'}} alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Men's Tree Luonger</h5>
      <p class="card-text">Hazy Pine <br/>$100 <Link to="/shoe"><button class="shoe">View More</button></Link></p>
 
    </div>
  </div>
</div>
    </div>
    <div class="carousel-item">
      <div class="card-group">
  <div class="card">
    <img src={cd7} class="card-img-top" style={{backgroundColor:'rgb(245, 245, 245)'}} alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Women's Tree Runner Go-Utility</h5>
      <p class="card-text">Blizzard/Hazy Pine<br/><span style={{color:'rgb(181, 0, 0)'}}>$104</span> <span style={{textDecoration:'line-through'}}>$130</span> <Link to="/shoe"><button class="shoe">View More</button></Link></p>
     
    </div>
  </div>
    <div class="card">
    <img src={cd8} class="card-img-top" alt="..." style={{backgroundColor:'rgb(245, 245, 245)'}}/>
    <div class="card-body">
      <h5 class="card-title">Men's Tree Luonger</h5>
      <p class="card-text">Hazy Pine <br/>$100 <Link to="/shoe"><button class="shoe">View More</button></Link></p>
 
    </div>
  </div>
  <div class="card">
    <img src={cd9} class="card-img-top" style={{backgroundColor:'rgb(245, 245, 245)'}} alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Women's Tree Breezer</h5>
      <p class="card-text">Light Khaki <br/>$100 <Link to="/shoe"><button class="shoe">View More</button></Link></p>
      
    </div>
  </div>
  <div class="card">
    <img src={cd10}class="card-img-top" style={{backgroundColor:'rgb(245, 245, 245)'}} alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Women's Tree Dasher 2</h5>
      <p class="card-text">Blizzard/Rustic Cobalt<br/><span style={{color:'rgb(181, 0, 0)'}}>$67</span> <span style={{textDecoration:'line-through'}}>$135</span> <Link to="/shoe"><button class="shoe">View More</button></Link></p>
     
    </div>
  </div>
</div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div><br/>
<div class="sec8"><br/><br/>
  <h1 class="want">Want First Dibs?</h1><br/>
  <p class="join">Join our email list and be the first to know about new limited edition products,<br/> material innovations, and lots of other fun updates.</p><br/>
  <input type="text" placeholder='Enter Your Email Address' id="textt" />
  <button class="up">SIGN UP</button>
  <p class="note">Note: You can opt-out at any time. See our <span style={{color:'black' , textDecoration:'underline' , fontWeight:'bold'}}>Privacy Policy</span> and <span style={{color:'black' , textDecoration:'underline' , fontWeight:'bold'}} >Terms.</span></p>
</div>


       
    </div>
  )
}

export default Home