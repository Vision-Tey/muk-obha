import React from 'react'

function Bookings() {
  return (
    <div class="container-fluid">

	<div class="col-lg-12">
		<div class="row mb-4 mt-4">
			<div class="col-md-12">

			</div>
		</div>
		<div class="row">


			<div class="col-md-12">
				<div class="card">
					<div class="card-header">
						<b>List of Bookings</b>

					</div>
					<div class="card-body">
						<table class="table table-condensed table-bordered table-hover">
							<thead>
								<tr>
									<th class="text-center">#</th>
									<th class="">Name</th>
									<th class="">Contact</th>
									<th class="">Email</th>
									<th class="">Booked House </th>
									<th class="text-center">Action</th>
								</tr>
							</thead>
							<tbody>
							
									<tr>
										<td class="text-center">0</td>
										<td>name</td>
										<td class="">
											<p><b>contact</b></p>
										</td>
										<td class="">
											<p><b>email</b></p>
										</td>
										<td class="">
											<p><b>houseNumber</b></p>
										</td>
										<td class="text-center">
											<button class="btn btn-sm btn-primary mx-2" type="button" data-id="">Confirm</button>
											<button class="btn btn-sm btn-outline-danger delete_booking mx-2" type="button">Delete</button>
										</td>
									</tr>
							

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

export default Bookings