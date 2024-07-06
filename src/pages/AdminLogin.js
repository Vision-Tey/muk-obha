import React from 'react'
import './AdminLogin.css'
import ImageComp from '../components/ImageComp'

function AdminLogin() {
    return (
        <div id="main" class="main bg-light">
            <ImageComp />
            <div class="login-right">
                <div class="">
                    <span>Are you landlord? Login here: </span>
                </div>
                <div class="login-right-1">
                    <form id="login-form">
                        <div class="form-group">
                            <label for="username" class="control-label">Username</label>
                            <input type="text" id="username" name="username" class="form-control" />
                        </div>
                        <div class="form-group">
                            <label for="password" class="control-label">Password</label>
                            <input type="password" id="password" name="password" class="form-control" />
                        </div>
                        <center><button class="btn-sm btn-block btn-wave col-md-4 btn-primary">Login</button></center>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default AdminLogin