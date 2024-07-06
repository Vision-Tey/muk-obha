import React from 'react'
import HousesList from '../data/HousesList'

function Singles() {

    const singleRoomsArray = HousesList.filter(item => item.Type.includes('Single room'))
    return (
        <div class="container-fluid">

            <div class="col-lg-12">
                <div class="row">

                    <div class="col-md-12">

                        <div class="card">
                            <div class="card-header">
                                <b>Available Houses </b>
                            </div>
                            <div class="card-body">
                                <table class="table table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th class="text-center">#</th>
                                            <th class="text-center">House</th>
                                            <th class="text-center">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody id="table-body">
                                        {singleRoomsArray && singleRoomsArray.length > 0
                                            ? singleRoomsArray.map((item) => {
                                                return (
                                                    <tr>
                                                        <td class="text-center">{item.id}</td>
                                                        <td class="">
                                                            <p id="house_no" >House #: <b>{item.id}</b></p>
                                                            <p><small>House Type: <b>{item.Type}</b></small></p>
                                                            <p><small>Description: <b>{item.Description}</b></small></p>
                                                            <p><small>Price: <b>{item.Price}</b></small></p>
                                                        </td>
                                                        <td class="text-center">
                                                            <button class="btn btn-sm btn-primary book_house" type="button">Book</button>
                                                        </td>

                                                    </tr>
                                                )
                                            }) : ("No houses data")
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div >
    )
}

export default Singles