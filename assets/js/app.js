


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
	)
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
	)
];

var weeks = [
	new Week(),
]

var saucer = new Saucer(projects, team);


// click team member in table > load team view, assign that member as currentMember

// click project in table > load project view, assign that project as currentProject

// run loadProjectView method on load, load first project in list

// Create 6 weeks on initial page load, load sliders from JSON file

// slider.oninput -> call the slide method

var slider1 = document.getElementById("123");
var slider2 = document.getElementById("456");

var weekSum = 0;

function calculateAmount(slider) {
	var sliderValue = slider.value;
	
	var total = function() {
		return weekSum + sliderValue;
	}
	
	console.log(sliderValue);
	
	
	$( "#tableTotal td.this_week" ).text(total);

}

slider1.oninput = function() {
	calculateAmount(slider1);
}

/*
slider1.onchange = function() {
	
}
*/

slider2.oninput = function() {
	calculateAmount(slider2);
} 


var SaucerUI = {
	loadProjectView : function() {
		

	},
	loadTeamView : function() {
		
	},
	displayWeeks : function() {
		
	},
	loadDropDown : function() {
		
	},
	loadMainColumn : function() {
		
	},
	sliderHandler : function(sliderId) {
		
		var slider = document.getElementById(sliderId);
	
		slider.oninput() = function() {
			this.changeVal();
		}
		
		slider.onchange() = function() {
			this.saveVal();
		}
		
		// slider.onchange -> save the value of the input to JSON
	}
}



// next button increments currentWeek and if at the end of weeks, creates a new week
// back button decriments currentWeek




































