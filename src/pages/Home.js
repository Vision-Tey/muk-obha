import React from 'react'
import Navbar from '../components/Navbar';
import Leftmenu from '../components/Leftmenu';
import MainSection from '../components/MainSection';
import './Home.css'
import ViewHouses from '../components/ViewHouses';
function Home() {
  return (
    <div>
        <Navbar />
        <div className='home'>
          <Leftmenu />
          <ViewHouses />
        </div>
        
    </div>
  )
}

export default Home