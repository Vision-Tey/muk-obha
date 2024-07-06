import React, { useState } from 'react'
import CategoriesList from '../data/CategoriesList'
import { useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import EditCategory from './EditCategory';


function Categories() {
	const [isOpenRejectionModal, setIsOpenRejectionModal] = useState(false);
	const [name, setName] = useState('')

	function handleEdit(id, category) {
		localStorage.setItem('Category', category);
		localStorage.setItem('Id', id);
		setIsOpenRejectionModal(true)
	}

	let history = useNavigate();
	function handleDelete(id) {
		var index = CategoriesList.map(function (e) {
			return e.id
		}).indexOf(id);

		CategoriesList.splice(index, 1);

		history('/housetype')

	}
	function createCategory(e) {
		e.preventDefault();

		const ids = uuid();
		let uniqueId = ids.slice(0, 8);

		let a = name

		CategoriesList.push({ id: uniqueId, category: a });
		history('/housetype')
	}


	return (
		<div class="container-fluid pt-4">


			{isOpenRejectionModal ? (
				<EditCategory
					openModal={setIsOpenRejectionModal}

				/>
			) :
				(

					<div class="col-lg-12">
						<div class="row">

							<div class="col-md-4">
								<form action="" id="manage-category">
									<div class="card">
										<div class="card-header">
											Category Form
										</div>
										<div class="card-body">
											<input type="hidden" name="id" />
											<div class="form-group">
												<label className="control-label">Name</label>
												<input type="text" class="form-control" name="name" onChange={(e) => setName(e.target.value)} />
											</div>
										</div>

										<div class="card-footer">
											<div className="row">
												<div class="col-md-12">
													<button onClick={(e) => createCategory(e)} className="btn btn-sm btn-primary col-sm-3 offset-md-3"> Save</button>
													<button className="btn btn-sm btn-default col-sm-3" type="button" > Cancel</button>
												</div>
											</div>
										</div>
									</div>
								</form>
							</div>


							<div class="col-md-8">
								<div class="card">
									<div class="card-header">
										<b>Category List</b>
									</div>
									<div class="card-body">
										<table class="table table-bordered table-hover">
											<thead>
												<tr>
													<th class="text-center">#</th>
													<th class="text-center">Category</th>
													<th class="text-center">Action</th>
												</tr>
											</thead>
											<tbody>
												{
													CategoriesList && CategoriesList.length > 0
														?
														CategoriesList.map((item) => {
															return (
																<tr>
																	<td class="text-center">{item.id}</td>
																	<td class="">
																		{item.category}
																	</td>
																	<td class="text-center">
																		<button onClick={() => handleEdit(item.id, item.category)} class="btn btn-sm btn-primary edit_category" type="button" data-id="" data-name="<?php echo $row['name'] ?>" >Edit</button>
																		<button onClick={() => handleDelete(item.id)} class="btn btn-sm btn-danger delete_category" type="button" data-id="">Delete</button>
																	</td>
																</tr>
															)

														})
														: "no category data"
												}


											</tbody>
										</table>
									</div>
								</div>
							</div>

						</div>
					</div>
				)
			}

		</div>

	)
}

export default Categories