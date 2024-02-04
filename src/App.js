
import React from 'react';
import { Routes ,Route} from 'react-router-dom';
import Home from './routes/Home';
import Activities from './routes/Activities';
import Events from './routes/Events';
import Aboutus from './routes/Aboutus';
import ContactUs from './routes/contact-us';
import JoinUs from './routes/join-us';




function App() {
  return (
    <>
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/Activities' element={<Activities/>}/>
     <Route path='/Events' element={<Events/>}/>
     <Route path='/About us' element={<Aboutus/>}/>
     <Route path='/ContactUs' element={<ContactUs/>}/>
     <Route path='/joinUs' element={<JoinUs/>}/>



     
     

     </Routes>
  </>
  );
}

export default App;
