import React from 'react'
import './Login.css'
import ImageComp from '../components/ImageComp'


function Login() {
    return (
        <div id="main" class=" bg-light">
            <ImageComp />
            <div id="login-right" class="bg-light">
                <div class="w-100 login-right-1">
                    <h4 class="text-info text-center"><b>LANDLORD MANAGEMENT SYSTEM</b></h4>
                    <br />
                    <div class="card">
                        <span className='text-one'>Are you looking for a house? Book rooms here: </span>
                        <a href="/home"><button class="btn btn-primary text-white">Book</button></a>
                    </div>
          
                </div>
            </div>
        </div>



    )
}

export default Login