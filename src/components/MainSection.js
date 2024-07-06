import React from 'react'
import './MainSection.css'
function MainSection() {
    return (
        <div className='main_section'>
            <div class="container-fluid">
                <div class="row mt-3 ml-3 mr-3">
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-4 mb-3">
                                            <div class="card border-primary">
                                                <div class="card-body bg-primary">
                                                    <div class="card-body text-white">
                                                        <span class="float-right summary_icon"> <i class="fa fa-home "></i></span>
                                                        <h4><b>
                                                        </b></h4>
                                                        <p><b>Total Houses</b></p>
                                                    </div>
                                                </div>
                                                <div class="card-footer">
                                                    <div class="row">
                                                        <div class="col-lg-12">
                                                            <a href="/houses" class="text-primary float-right">View List <span class="fa fa-angle-right"></span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 mb-3">
                                            <div class="card border-warning">
                                                <div class="card-body bg-warning">
                                                    <div class="card-body text-white">
                                                        <span class="float-right summary_icon"> <i class="fa fa-user-friends "></i></span>
                                                        <h4><b>
                                                
                                                        </b></h4>
                                                        <p><b>Total Tenants</b></p>
                                                    </div>
                                                </div>
                                                <div class="card-footer">
                                                    <div class="row">
                                                        <div class="col-lg-12">
                                                            <a href="/tenants" class="text-primary float-right">View List <span class="fa fa-angle-right"></span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 mb-3">
                                            <div class="card border-success">
                                                <div class="card-body bg-success">
                                                    <div class="card-body text-white">
                                                        <span class="float-right summary_icon"> <i class="fa fa-file-invoice "></i></span>
                                                        <h4><b>
                                                          
                                                        </b></h4>
                                                        <p><b>Payments This Month</b></p>
                                                    </div>
                                                </div>
                                                <div class="card-footer">
                                                    <div class="row">
                                                        <div class="col-lg-12">
                                                            <a href="/payments" class="">View Payments <span class="fa fa-angle-right"></span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MainSection