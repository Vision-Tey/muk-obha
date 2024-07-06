import React from 'react'
import Navbar from '../components/Navbar'
import Leftmenu from '../components/Leftmenu'
import Doubles from '../components/Doubles'

function DoubleRooms() {
  return (
    <div>
        <Navbar />
        <div style={{display: "flex"}} >
          <Leftmenu />
          <Doubles />
        </div>
        
    </div>
  )
}

export default DoubleRooms