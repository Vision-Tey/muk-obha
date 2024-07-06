import React from 'react'
import Houses from '../components/Houses'
import Navbar from '../components/Navbar'
import AdminLeftMenu from '../components/AdminLeftMenu'

function HousesPage() {
  return (
   <div>
    <Navbar />
    <div style={{display: "flex"}}>
        <AdminLeftMenu />
        <Houses />
    </div>
    
   </div>

  )
}

export default HousesPage