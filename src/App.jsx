import React, { StrictMode } from "react";
import { ReactDOM } from "react";
import { BrowserRouter,Routes,Route,Link, Outlet} from 'react-router-dom'
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import './App.css';
import './server.js'
import Vans from "./Pages/Vans.jsx";
import VanDetail from "./Pages/VanDetail.jsx";
import Layout from "./Components/Layout.jsx";
import Dashboard from './Pages/Host/Dashboard.jsx';
import Income from './Pages/Host/Income.jsx';
import Reviews from "./Pages/Host/Reviews.jsx";
import HostLayout from "./Components/HostLayout.jsx";
import Hostvans from "./Pages/Host/Hostvans.jsx";
import HostvansDetail from "./Pages/Host/HostvansDetail.jsx";
import HostVanInfo from "./Pages/Host/HostVanInfo.jsx";
import HostVanPhotos from "./Pages/Host/HostVanPhotos.jsx";
import HostVanPricing from "./Pages/Host/HostVanPricing.jsx";

function App() {
  return (
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='vans' element={<Vans/>}/>
    <Route path='vans/:id' element={<VanDetail/>}/>

    <Route path='host' element={<HostLayout/>}> 
       <Route index element={<Dashboard/>}/>
       <Route path='income' element={<Income/>}/>
       <Route path='reviews' element={<Reviews/>}/>
       <Route path="vans" element={<Hostvans/>}/>
       <Route path="vans/:id" element={< HostvansDetail/>}>
         <Route index element={< HostVanInfo/>}/>
         <Route path='pricing' element={< HostVanPricing/>}/>
         <Route path ='photos'  element={< HostVanPhotos/>}/>

       </Route>
    </Route>
    </Route>
    </Routes>
    </BrowserRouter>
  )
}
export default App;


