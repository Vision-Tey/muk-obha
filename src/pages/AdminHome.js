import React from 'react'
import Navbar from '../components/Navbar'
import AdminLeftMenu from '../components/AdminLeftMenu'
import MainSection from '../components/MainSection'
import './AdminHome.css'
function AdminHome() {
    return (
        <div>
            <Navbar />
            <div className='admin_home'>
                <AdminLeftMenu />
                <MainSection />
            </div>


        </div>
    )
}

export default AdminHome