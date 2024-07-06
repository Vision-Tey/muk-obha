import React from 'react'
import './CreateNewTenant.css'

function CreateNewTenant() {
    return (
        <div class="container-fluid create_tenant">
            <form action="" id="manage-tenant">
                <input type="hidden" name="id" value="" />
                <div class="row form-group">
                    <div class="col-md-4">
                        <label for="" class="control-label">Name</label>
                        <input type="text" class="form-control" name="lastname" value="" required />
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-md-4">
                        <label for="" class="control-label">Email</label>
                        <input type="email" class="form-control" name="email" value="" required />
                    </div>
                    <div class="col-md-4">
                        <label for="" class="control-label">Contact</label>
                        <input type="text" class="form-control" name="contact" value="" required />
                    </div>

                </div>
                <div class="form-group row">
                    <div class="col-md-4 py-3">
                        <label for="" class="control-label px-2">House</label>
                        <select name="house_id" id="" class="custom-select select2 px-2">
                            <option value="">House 1</option>

                            <option value="" >House 2</option>

                        </select>
                    </div>
                    <div class="col-md-4">
                        <label for="" class="control-label">Registration Date</label>
                        <input type="date" class="form-control" name="date_in" value="" required />
                    </div>
                    <div class="col-md-8 pt-4">
                        <button  className="btn btn-sm btn-primary col-sm-3 offset-md-3"> Save</button>
                        <button className="btn btn-sm btn-default col-sm-3" type="button" > Cancel</button>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default CreateNewTenant