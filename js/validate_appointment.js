$().ready(function() {
	
	$("#module-form-appointment").validate({
		rules: {
			
		 "name": {
				required: true,
			},
		 "email": {
					required: true,
					email:true,
				},	
		 "appointment_date": {
					required: true,
				},	
		 "appointment_time": {
					required: true,
				},	
		 "phone": {
					required: true,
					digits:true,
				},	
						
		},
		messages: {
			"name": {
				required: "<div class='alert alert-danger'>Please enter name</div>",
				},
			"email": {
				required: "<div class='alert alert-danger'>Please enter Email</div>",
				email: "<div class='alert alert-danger'>Please enter valid email</div>",
			},
			"appointment_date": {
				required: "<div class='alert alert-danger'>Please enter date</div>",
				},
			"appointment_time": {
				required: "<div class='alert alert-danger'>Please enter time</div>",
				},
			"phone": {
				required: "<div class='alert alert-danger'>Please enter phone</div>",
				digits: "<div class='alert alert-danger'>Please enter only number</div>",
				},
			
			
		}
	});

});

