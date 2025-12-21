import React from 'react'
import { Routes, Route } from 'react-router-dom';
import PortalLayout from '../src/layout/layout';
import Home from './component/Home';
import ListButton from './component/ListButton';
const Router = () => {
  return (
    <div>


        <Routes>
            <Route element={<PortalLayout />}>
        
            < Route path='/' element={<Home />} />
        < Route path='/hello' element={<ListButton/>} />
            </Route>
           
        </Routes>
    </div>
  )
}

export default Router