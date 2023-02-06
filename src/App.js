import {
  BrowserRouter,
  Routes,
  Route,
 
  
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
// import { BrowserRouter } from 'react-router-dom';


import Home from './Pages/Home';
import Features from './Pages/Features';
import Pricing from './Pages/Pricing';


const App = () => {
  return (
    <>
        
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path = "/" element ={<Home/>} />
          <Route path="features" element={<Features/>} />
          <Route path = "pricing" element={<Pricing/>} />
        </Routes>
      </BrowserRouter>

    </>  
  );
}

export default App;
