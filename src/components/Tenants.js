import React from 'react'
import TenantsList from '../data/TenantsList'
import { useNavigate } from 'react-router-dom';
import CreateNewTenant from './CreateNewTenant';


function Tenants() {

	let history = useNavigate();
	function handleDelete(id) {
		var index = TenantsList.map(function (e) {
			return e.id
		}).indexOf(id);

		TenantsList.splice(index, 1);

		history('/tenants')

	}

	function createTenant(e) {
		e.preventDefault();

		// const ids = uuid();
		// let uniqueId = ids.slice(0, 8);
		
		// let a = lastName
		// let b = firstName
		// let c = email
		// let d = contact

		// HousesList.push({ id: a, Type: b, Description: c, Price: d  });
		history('/tenants')
	}
	return (
		<div class="container-fluid">

			<div class="col-lg-12">
				<div class="row mb-4 mt-4">
					<div class="col-md-12">
						{/* <CreateNewTenant /> */}
					</div>
				</div>
				<div class="row">


					<div class="col-md-12">
						<div class="card">
							<div class="card-header row">
								<b class='col-md-6'>List of Tenant</b>
								<span class="float:right col-md-6"><a class="btn btn-primary btn-block float-right" href="javascript:void(0)" id="new_tenant">
									<i class="fa fa-plus"></i> New Tenant
								</a></span>
							</div>
							<div class="card-body">
								<table class="table table-condensed table-bordered table-hover">
									<thead>
										<tr>
											<th class="text-center">#</th>
											<th class="">Name</th>
											<th class="">House Rented</th>
											<th class="">Monthly Rate</th>
											<th class="">Outstanding Balance</th>
											<th class="">Last Payment</th>
											<th class="text-center">Action</th>
										</tr>
									</thead>
									<tbody>
										{
											TenantsList && TenantsList.length > 0
												?
												TenantsList.map((item) => {
													return (
														<tr>
															<td class="text-center">{item.id}</td>
															<td>
																{item.name}
															</td>
															<td class="">
																<p> <b>{item.house_no}</b></p>
															</td>
															<td class="">
																<p> <b>{item.price}</b></p>
															</td>
															<td class="text-right">
																<p> <b>{item.outstanding}</b></p>
															</td>
															<td class="">
																<p><b>{item.last_payment}</b></p>
															</td>
															<td class="text-center">
																<button class="btn btn-sm mx-2 btn-outline-primary view_payment" type="button" data-id="<?php echo $row['id'] ?>">View</button>
																<button class="btn btn-sm mx-2 btn-outline-primary edit_tenant" type="button" data-id="<?php echo $row['id'] ?>">Edit</button>
																<button class="btn btn-sm mx-2 btn-outline-danger delete_tenant" type="button" data-id="" onClick={() => handleDelete(item.id)}>Delete</button>
															</td>
														</tr>

													)
												}) : (
													"There's no tenant data here"
												)
										}


									</tbody>
								</table>

							</div>
						</div>
					</div>

				</div>
			</div>

		</div>
	)
}

export default Tenants