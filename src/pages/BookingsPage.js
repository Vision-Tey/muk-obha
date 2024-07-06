import React from 'react'
import Navbar from '../components/Navbar'
import AdminLeftMenu from '../components/AdminLeftMenu'
import Bookings from '../components/Bookings'

function BookingsPage() {
  return (
    <div>
        <Navbar />
        <div style={{display: "flex"}}>
            <AdminLeftMenu />
            <Bookings />
        </div>
    </div>
  )
}

export default BookingsPage