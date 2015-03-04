function generateName(gender) {
	var beginning, end;

	// Populate array for name beginnings
	var beginnings = ["Yv", "Iv", "Alexandr", "Eten", "Ias", "Iry",
					  "Quaold", "Nos", "Hinm", "Hin'v", "Hiw", "Kalut",
					  "Irct", "Huor", "Siddig"];
	
	// Populate arrays for name endings for Neutral/Female/Male/All
	var endsN = ["", "or", "is", "im", "int", "ju", "ad"];
	var endsF = ["ette", "otte","elle", "ia", "ah", "ie", "y"]
	var endsM = ["", "an", "ohn", "en", "an", "otr", "try", "ius", "os"];
	var ends = endsN.concat(endsF, endsM);

	// Calculate random float between 0.0 and 1.0. Multiply times
	// beginnings.length - 1 to get a random float between 0.0 and
	// beginnings.length - 1. Round down using Math.floor to get integer
	// between 0 and beginnings.length. Use that value to select random
	// index from beginnings array. Assign value to 'beginning' variable.
	beginning = beginnings[Math.floor((beginnings.length - 1) * Math.random())];

	// Switch between all endings, only neutral, only female, and only male
	// using gender parameter selected by user. Assign selected set to
	// ends array. Default is that all endings are included.
	switch(gender) {
		case 0:
			// All options
			break;
		case 1:
			// Only neutral name endings
			ends = endsN;
			break;
		case 2:
			// Only female name endings
			ends = endsF;
			break;
		case 3:
			// Only male name endings
			ends = endsM;
			break;
	}

	// Calculate random float between 0.0 and 1.0. Multiply times
	// ends.length - 1 to get a random float between 0.0 and
	// ends.length - 1. Round down using Math.floor to get integer
	// between 0 and ends.length. Use that value to select random
	// index from ends array. Assign value to 'beginning' variable.
	end = ends[Math.floor((ends.length - 1) * Math.random())];

	return beginning.concat(end);
}

function changeName(g) {

	var name = generateName(g);

	document.getElementById("actorInput").value = name;
}