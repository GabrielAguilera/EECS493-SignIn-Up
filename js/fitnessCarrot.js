$(function() {
	Parse.$ = jQuery;

	Parse.initialize("PAjzQPglIFtzZyMJfDPe5Ozvfzr7Pz1ukpHoLXct",
					"zTU8emhQIg5xTKZrhfF5ulrKnXQv4M6ztT9kFi90");

	if (Parse.User.current()){
		new HomeView();
	} else {
		new LogInView();
	}

});