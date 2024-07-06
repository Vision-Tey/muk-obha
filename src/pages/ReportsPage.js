import React from 'react'
import Navbar from '../components/Navbar'
import AdminLeftMenu from '../components/AdminLeftMenu'
import Reports from '../components/Reports'

function ReportsPage() {
  return (
    <div>
        <Navbar />
        <div style={{display:"flex"}}>
            <AdminLeftMenu />
            <Reports />
        </div>
    </div>
  )
}

export default ReportsPage