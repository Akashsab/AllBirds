
import './App.css';

import Home from './pages/Home';

import Rerur from './pages/Rerur';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Men from './pages/Men';
import Moutf from './mapping/Moutf';
import Womencard from './mapping/Womencard';
import Women from './pages/Women';
import Socks from './pages/Socks';
import Cartpage from './pages/Cartpage';
import Upload from './pages/Upload';
import Post from './pages/Post';
import Update from './pages/Update';
import Posttable from './pages/Posttable';
import Edit from './pages/Edit';
import Edit2 from './pages/Edit2';
import Login from './pages/Login';
import Register from './pages/Register';
import Validation from './pages/Validation';
import Singlecrud from './pages/Singlecrud';
import Shoe from './pages/Shoe';
import Shoescard from './mapping/Shoescard';



function App() {
  return (
    
<BrowserRouter>

<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/rerur" element={<Rerur/>}/>
  <Route path="/men" element={<Men/>}/>
  <Route path="/moutf" element={<Moutf/>}/>
  <Route path="/women" element={<Women/>}/>
  <Route path="/womencard" element={<Womencard/>}/>
  <Route path="/socks" element={<Socks/>}/>
  <Route path="/cart" element={<Cartpage/>}/>
  <Route path="/upload" element={<Upload/>}/>
  <Route path="/post" element={<Post/>}/>
  <Route path="/update" element={<Update/>}/>
  <Route path='/posttable' element={<Posttable/>}/>
  <Route path='/edit/:id' element={<Edit/>}/>
  <Route path='/edit2/:id' element={<Edit2/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/register' element={<Register/>}/>
  <Route path='/validation' element={<Validation/>}/>
  <Route path='/singlecrud' element={<Singlecrud/>}/>
  <Route path='/shoe' element={<Shoe/>}/>
  <Route path='/shoescard' element={<Shoescard/>}/>
  </Routes>
  </BrowserRouter>
    
  );
}

export default App;
