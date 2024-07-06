import React from 'react'
import Navbar from '../components/Navbar'
import AdminLeftMenu from '../components/AdminLeftMenu'
import Tenants from '../components/Tenants'


function TenantsPage() {
  return (
    <div>
        <Navbar />
        <div style={{display: "flex"}}>
            <AdminLeftMenu />
            <Tenants />
        </div>
    </div>
  )
}

export default TenantsPage