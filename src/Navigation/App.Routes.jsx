import React from 'react'
import { BrowserRouter  as Router, Routes, Route} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import NavPage from '../components/NavPage';
import RetirePage from '../components/RetirePage';
import MyBank from '../components/MyBank';
import RegistrationForm from '../auth/RegistrationForm';
import SupprimerPage from '../pages/SupprimerPage';

function AppRoutes() {
  return (
   <Router>
    <NavPage/>
    <Routes>
        <Route path='/' element = {<HomePage/>}/>
        <Route path='/withdraw' element={<RetirePage/>}/>
        <Route path='/mybank' element ={<MyBank/>}/>
        <Route path='/Supprimer' element ={<SupprimerPage/>}/>
        <Route path ="/Register" element ={<RegistrationForm/>}/>
    </Routes>
   </Router>
  )
}

export default AppRoutes;
