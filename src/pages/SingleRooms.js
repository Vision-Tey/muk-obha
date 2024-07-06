import React from 'react'
import Leftmenu from '../components/Leftmenu'
import Singles from '../components/Singles'
import Navbar from '../components/Navbar'

function SingleRooms() {
  return (
    <div>
        <Navbar />
        <div style={{display: "flex"}} >
          <Leftmenu />
          <Singles />
        </div>
        
    </div>
  )
}

export default SingleRooms