
function Slider(id, project, teamMember, week) {
	this.id = id;
	this.project = project;
	this.teamMember = teamMember;
	this.week = week;
	this.maxAmount = teamMember.hoursPerWeek; // hour budgeted for team mate
	this.amount = 0; // defaults to 0 or pulls amount stored
}


Slider.prototype.changeVal = function() {
	
	this.amount = this.value;
	
	$( "tableTotal td.this_week" ).html(this.amount);
	
	return this.amount;
	
	/*
this.stepDown(1);
	this.stepUp(1);
*/
	
	// update amount by 1
	// increase or decrease project hours across all team members hours for that project
	// update team member hours for the week
	// if project hours exceeds hours budgeted, throw an alert badge
	// update week total in the footer
	
};

Slider.prototype.saveVal = function() {
	console.log(this.value);
};