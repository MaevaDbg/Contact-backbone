var Contact = Backbone.Model.extend({
	defaults: {
		firstName: "",
		lastName: "",
		email: "",
		phone: ""
	},

	validate: function (attributes) {
		if(attributes.firstName.length == 0){
			return "Firstname must be provided";
		}
	},

	fullName: function () {
		return [this.get('firstName'), this.get('lastName')].join(' ');
	},
	
})