import React, { useEffect, useState } from 'react'
import HousesList from '../data/HousesList'
import { useNavigate } from 'react-router-dom'
import HouseTypes from '../data/HouseTypes'
function EditHouse({ openModal }) {
    const [houseNo, setHouseNo] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState(0)

    let history = useNavigate();

    var index = HousesList.map((e) => {
        return e.id
    }).indexOf(houseNo)

    const handleSelectChange = (event) => {
        const newValue = event.target.value;
        setCategory(newValue);
    };

    function handleSubmit(e) {
        e.preventDefault();

        let a = HousesList[index];
        a.Price = price;
        a.Type = category;
        a.id = houseNo;
        a.Description = description;
        history('/houses')
        openModal(false)
    }

    useEffect(() => {
        setCategory(localStorage.getItem('Category'))
        setDescription(localStorage.getItem('Description'))
        setHouseNo(localStorage.getItem('HouseNo'))
        setPrice(localStorage.getItem('Price'))
    }, [])

    return (
        <div className='mx-5'>
            <div class="col-md-4" >
                <form action="" id="manage-house">
                    <div class="card">
                        <div class="card-header">
                            House Form
                        </div>
                        <div class="card-body">
                            <div class="form-group" id="msg"></div>
                            <input type="hidden" name="id" />
                            <div class="form-group">
                                <label class="control-label">House No</label>
                                <input type="text" class="form-control" name="house_no" value={houseNo} onChange={(e) => setHouseNo(e.target.value)} required="" />
                            </div>
                            <div class="form-group py-3">
                                <label class="control-label">Category</label>
                                <select onChange={handleSelectChange} value={category} name="category_id" id="" class="custom-select" required>
                                    <option selected="" disabled="">Check category list.</option>
                                    {
                                        HouseTypes && HouseTypes.length > 0
                                            ?
                                            HouseTypes.map((item) => {
                                                return (
                                                    <option selected="" value={item.type}>{item.type}</option>
                                                )
                                            }) : (
                                                "No house types listed"
                                            )
                                    }
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="" class="control-label">Description</label>
                                <textarea name="description" id="" cols="30" rows="4" class="form-control" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
                            </div>
                            <div class="form-group">
                                <label class="control-label">Price</label>
                                <input type="number" class="form-control text-right" value={price} onChange={(e) => setPrice(e.target.value)} name="price" step="any" required="" />
                            </div>
                        </div>
                        <div class="card-footer">
                            <div class="row">
                                <div class="col-md-12">
                                    <button onClick={(e) => handleSubmit(e)} class="btn btn-sm btn-primary col-sm-3 offset-md-3"> Save</button>
                                    <button onClick={() => openModal(false)} class="btn btn-sm btn-default col-sm-3" type="reset"> Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditHouse