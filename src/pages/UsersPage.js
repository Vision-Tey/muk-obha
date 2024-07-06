import React from 'react'
import Navbar from '../components/Navbar'
import AdminLeftMenu from '../components/AdminLeftMenu'
import Users from '../components/Users'

function UsersPage() {
  return (
    <div>
        <Navbar />
        <div style={{display: "flex"}}>
            <AdminLeftMenu />
            <Users />
        </div>
    </div>
  )
}

export default UsersPage