
// constructor function for Project object

function Project (name, hoursBudgeted, dueDate) {
	this.name = name;
	this.hoursBudgeted = hoursBudgeted;
	this.projectHours = 0;
	this.hoursUsed = 0;
	this.dueDate = dueDate;
}

Project.prototype.isDue = function (dueDate) {
    // return boolean
};