import React from 'react'
import './Leftmenu.css'
import LinkButton from './LinkButton'

function Leftmenu() {
    return (
        <div className='leftmenu'>
            <div className='left_top'>
                <LinkButton name="View Houses" icon="" link="/home" />
            </div>
            <div class="sidebar-list">
            <LinkButton name="Single Rooms" icon="" link="/singleroom" />
            <LinkButton name="Double Rooms" icon="" link="/doubleroom" />
            <LinkButton name="Triple Rooms" icon="" link="/tripleroom" />
           </div>
        </div>
    )
}

export default Leftmenu