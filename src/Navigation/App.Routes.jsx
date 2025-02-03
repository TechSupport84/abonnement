import React from 'react'
import { BrowserRouter  as Router, Routes, Route} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import NavPage from '../components/NavPage';

function AppRoutes() {
  return (
   <Router>
    <NavPage/>
    <Routes>
        <Route path='/' element = {<HomePage/>}/>
    </Routes>
   </Router>
  )
}

export default AppRoutes;
