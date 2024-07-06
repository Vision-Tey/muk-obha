import React, { useState, useEffect } from 'react'
import CategoriesList from '../data/CategoriesList'
import { useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

function EditCategory({openModal}) {
    const [name, setName] = useState("")
    const [id, setId] = useState("")

    let history = useNavigate();

    var index = CategoriesList.map(function (e) {
        return e.id
    }).indexOf(id);

    function handleSubmit(e) {
        e.preventDefault();

        let a = CategoriesList[index];
        a.category = name;
        a.id = id;

        history('/housetype')
        openModal(false)
        
    }

    useEffect(() => {
        setName(localStorage.getItem('Category'))
        setId(localStorage.getItem('Id'))
    }, [])


    return (
        <div class="col-md-8 px-5">
            <form action="" id="manage-category">
                <div class="card">
                    <div class="card-header">
                        Category Editing Form
                    </div>
                    <div class="card-body">
                        <input type="hidden" name="id" />
                        <div class="form-group">
                            <label className="control-label">Name</label>
                            <input type="text" class="form-control" value={name} name="name" required onChange={(e) => setName(e.target.value)} />
                            {/* <label className="control-label">Id</label>
                            <input type="text" class="form-control" value={id} name="id" required onChange={(e) => setId(e.target.value)} />
                    */}
                        </div>
                    </div>

                    <div class="card-footer">
                        <div className="row">
                            <div class="col-md-12">
                                <button  onClick={(e) => handleSubmit(e)} className="btn btn-sm btn-primary col-sm-3 offset-md-3"> Update</button>
                                <button onClick={()=> openModal(false)} className="btn btn-sm btn-default col-sm-3" type="button" > Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>

    )

}

export default EditCategory