import React from 'react'
import Triples from '../components/Triples'
import Navbar from '../components/Navbar'
import Leftmenu from '../components/Leftmenu'

function TripleRooms() {
  return (
    <div>
        <Navbar />
        <div style={{display: "flex"}} >
          <Leftmenu />
          <Triples />
        </div>
        
    </div>
  )
}

export default TripleRooms