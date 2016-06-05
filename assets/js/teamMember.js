
// constructor function for Teams object

function TeamMember (firstName, lastName, hoursPerWeek) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.fullname = firstName + lastName;
	this.hoursPerWeek = hoursPerWeek;
}