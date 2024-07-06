import React, { useState } from 'react'
import HousesList from '../data/HousesList';
import HouseTypes from '../data/HouseTypes';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid'
import EditHouse from './EditHouse';

function Houses() {
	const [id, setId] = useState("");
	const [selectedValue, setSelectedValue] = useState('');
	const [description, setDescription] =useState("")
	const [price, setPrice] = useState(0);
	const [isOpenRejectionModal, setIsOpenRejectionModal] = useState(false);

	function handleEdit(id, category, price, description) {
		localStorage.setItem('Category', category);
		localStorage.setItem('Description', description);
		localStorage.setItem('HouseNo', id);
		localStorage.setItem('Price', price);
		setIsOpenRejectionModal(true)
	}

	let history = useNavigate();
	function handleDelete(id) {
		var index = HousesList.map(function (e) {
			return e.id
		}).indexOf(id);

		HousesList.splice(index, 1);

		history('/houses')

	}

	function createHouse(e) {
		e.preventDefault();

		const ids = uuid();
		let uniqueId = ids.slice(0, 8);
		
		let a = id
		let b = selectedValue
		let c = description
		let d = price

		HousesList.push({ id: a, Type: b, Description: c, Price: d  });
		history('/houses')
	}

	const handleSelectChange = (event) => {
		const newValue = event.target.value;
		setSelectedValue(newValue);
	  };
	
  return (
    <div class="container-fluid pt-4">
		{isOpenRejectionModal ? (
			<EditHouse openModal={setIsOpenRejectionModal} />
		) : (
			<div class="col-lg-12">
		<div class="row">
			{/* Form code */}
			<div class="col-md-4">
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
								<input type="text" class="form-control" name="house_no" onChange={(e) => setId(e.target.value)} required="" />
							</div>
							<div class="form-group py-3">
								<label class="control-label">Category</label>
								<select  onChange={handleSelectChange}  name="category_id" id="" class="custom-select" required>
										<option selected=""  disabled="">Check category list.</option>
										{
											HouseTypes && HouseTypes.length > 0
											? 
											HouseTypes.map((item) => {
												return (
													<option selected=""  value={item.type}>{item.type}</option>
												)
											}) : (
												"No house types listed"
											)
										}
								</select>
							</div>
							<div class="form-group">
								<label for="" class="control-label">Description</label>
								<textarea name="description" id="" cols="30" rows="4" class="form-control" onChange={(e) => setDescription(e.target.value)} required></textarea>
							</div>
							<div class="form-group">
								<label class="control-label">Price</label>
								<input type="number" class="form-control text-right" onChange={(e) => setPrice(e.target.value)} name="price" step="any" required="" />
							</div>
						</div>
						<div class="card-footer">
							<div class="row">
								<div class="col-md-12">
									<button onClick={(e) => createHouse(e)} class="btn btn-sm btn-primary col-sm-3 offset-md-3"> Save</button>
									<button class="btn btn-sm btn-default col-sm-3" type="reset"> Cancel</button>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
			
            {/* Table code */}
			<div class="col-md-8">
				<div class="card">
					<div class="card-header">
						<b>House List</b>
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
							<tbody>
							{
								HousesList && HousesList.length > 0
								? 
								HousesList.map((item) => {
									return(
										<tr>
										<td class="text-center">{item.id}</td>
										<td class="">
											<p>House #: <b>{item.id}</b></p>
											<p><small>House Type: <b>{item.Type}</b></small></p>
											<p><small>Description: <b>{item.Description}</b></small></p>
											<p><small>Price: <b>UGX{item.Price}</b></small></p>
										</td>
										<td class="text-center">
											<button class="btn btn-sm btn-primary edit_house mx-2" type="button" onClick={() => handleEdit(item.id, item.Type, item.Price, item.Description)}>Edit</button>
											<button class="btn btn-sm btn-danger delete_house mx-2" onClick={() => handleDelete(item.id)}  type="button" >Delete</button>
										</td>
									</tr>
									)
								}) : (
									"No houses data"
								)
							}

									
								
							</tbody>
						</table>
					</div>
				</div>
			</div>

		</div>
	</div>
		)}
	

</div>
  )
}

export default Houses