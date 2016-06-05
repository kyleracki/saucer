


// load JSCON of team members and project data and store in arrays

var team = [
	new TeamMember(
		"Kyle",
		"Racki",
		40
	),
	new TeamMember(
		"Ricky",
		"Ferris",
		40
	),
];

var projects = [
	new Project(
		"Proposify",
		480,
		new Date(2016, 5, 24)
	),
	new Project(
		"Saucer",
		350,
		new Date(2016, 7, 12)
	),
];

var weeks = [
	new Week(),
]

var saucer = new Saucer(projects, team);

// click team member in table > load team view, assign that member as currentMember


// click project in table > load project view, assign that project as currentProject

// run loadProjectView method on load, load first project in list

// Create 6 weeks on initial page load, load sliders from JSON file

// next button increments currentWeek and if at the end of weeks, creates a new week
// back button decriments currentWeek




































