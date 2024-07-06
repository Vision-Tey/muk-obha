import React, { Fragment } from 'react'
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import HouseTypes from '../data/HouseTypes';
import Categories from '../components/Categories';
import Navbar from '../components/Navbar';
import AdminLeftMenu from '../components/AdminLeftMenu';
import './HouseType.css';
function HouseType() {
    return (
        <div>
            <Navbar />
            <div className='housetype_main'>
                <AdminLeftMenu />
                <Categories />
            </div>

        </div>
        // <Fragment>

        //     <div style={{margin:"10rem"}}>
        //         <Table striped bordered hover size="sm">
        //             <thead>
        //                 <tr>
        //                     <th>
        //                         Type
        //                     </th>
        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 {
        //                     HouseTypes && HouseTypes.length > 0
        //                     ?
        //                     HouseTypes.map((item) => {
        //                         return(
        //                             <tr>
        //                                 {item.Type}
        //                             </tr>
        //                         )
        //                     })
        //                     :
        //                     "No data available"
        //                 }
        //             </tbody>
        //         </Table>
        //     </div>
        // </Fragment>
    )
}

export default HouseType