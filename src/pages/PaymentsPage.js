import React from 'react'
import Navbar from '../components/Navbar'
import AdminLeftMenu from '../components/AdminLeftMenu'
import Payments from '../components/Payments'

function PaymentsPage() {
  return (
    <div>
        <Navbar />
        <div style={{display: "flex"}}>
            <AdminLeftMenu />
            <Payments />
        </div>
    </div>
  )
}

export default PaymentsPage