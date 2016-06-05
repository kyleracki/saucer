
// constructor function for Saucer object

function Saucer(projects, team) {

	var currentWeek = 0;
	var weeks = [];
	var projects = projects;
	var team = team;
	
}

Saucer.prototype.loadTeamView = function(member) {
	
	var currentTeamMember = member;
	
	// load all team members in drop down and have current member selected
	
	// output projects as rows in table
	
	// output weeks as columns starting with current week
	
	// create slider for every cell, 
	// limit slider at hours per week for given team member
	// if project is due that week, show alert badge in cell
	
	// total hours 
	
};

Saucer.prototype.loadProjectView = function(project) {
	
	var currentProject = project;
	
	// output all projects in drop down and select currectProject
	// output total hours used for project
	// show if over budget and by how many hours 	
	// output due date for project
	// load all team members as rows in table
	// load sliders and amounts per team mate for every week created
	// if project is due for that week, show alert badge in column
	
};

Saucer.prototype.createWeek = function() {

	// add new week object to week array and calculate start and end days of week
	// add cells for every row in table and create slider
	// add total cell in footer

}

Saucer.prototype.createSlider = function() {
	
	// instantiate new slider object and pass project, member and week
	// max attribute = this.maxAmount
	// if the slider exists, use amount as value attribute, otherwise set to 0
	
}

Saucer.prototype.newProject = function() {
	
	// update add form field values to JSON file
	// update project array and add row to table
	// bind event handler to click
	
}

Saucer.prototype.newTeamMember = function() {
	
	// update add form field values to JSON file
	// update project array and add row to table
	// bind event handler to click
	
}




















