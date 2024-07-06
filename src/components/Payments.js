import React from 'react'

function Payments() {
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
						<b>List of Payments</b>
						<span class="float:right"><a class="btn btn-primary btn-block btn-sm col-sm-2 float-right" href="javascript:void(0)" id="new_payment">
					<i class="fa fa-plus"></i> New Entry
				</a></span>
					</div>
					<div class="card-body">
						<table class="table table-condensed table-bordered table-hover">
							<thead>
								<tr>
									<th class="text-center">#</th>
									<th class="">Tenant</th>
									<th class="">House #</th>
									<th class="">Payment</th>
									
									<th class="text-center">Action</th>
								</tr>
							</thead>
							<tbody>
						
								<tr>
									<td class="text-center">5</td>
									<td class="">
										 <p> <b>Angella</b></p>
									</td>
									<td class="">
										 <p> <b>045</b></p>
									</td>
									<td class="text-right">
										 <p> <b>50,000</b></p>
									</td>
									
									<td class="text-center">
										<button class="btn btn-sm btn-outline-primary view_payment" type="button" data-id="<?php echo $row['id'] ?>" >View</button>
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

export default Payments