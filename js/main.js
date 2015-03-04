function changeName() {

	var name = generateName();

	document.getElementById("actorInput").value = name;
}

function generateName() {
	// jQuery to get value of selected radio button 'gender'
	gender = $('input[name="gender"]:checked').val();
	commonality = $('input[name="commonality"]:checked').val();
	

	var beginning, end;

	// Populate array for name beginnings
	var beginningsFamiliar = ["Abb", "Andr", "Alexandr", "Ash", "Barthal", "Cass",
							"Dorth", "Eugen", "Ev", "Gav", "Germ", "Grac", 
							"Hann", "Herm", "Jacqu", "Jean", "Jul", "Kay", "Kayl",
							"Marg", "Matth", "Mau", "Mil", "No",
							"Rom", "Shan", "Tayl", "Trist"];

	var beginningsUnusual = ["Absol", "Achill", "Adr", "Ahn", "Arman", "Arti", "Burcell",
						   "Cassan", "Catull", "Cin", "Coc", "Coz", "Cup", "Dionys", "Drog",
						   "E'pr", "Edn", "Eten",  "Foeb","Fram", "Garn", "Gast", "Haerv",
						   "Hin'v", "Hinm", "Hiw", "Hom", "Hort", "Hunt", "Huor", "Ias", "Inc", "Irct",
						   "Iry", "Iv", "Jan", "Kalut", "Kamael", "Ke", "Khar", "Kran",
						   "Lahn", "Lakshm", "L", "Lol", "Lom", "Lunan", "Mas", 
						    "Oliv", "Psy", "Quaold", "Quesadill", 
						   "Opal", "Par", "Peas", "Rag", "Re", "Ren", "Sandin",
						   "Shont", "Siddig", "Tamil", "Tanc", "Thaed", "Thal", "The",
						   "Thor", "Trael", "Tram", "Trellor", "Trian", "Tsaen", "Usa",
						   "Varg", "Vas", "Xerx", "Zayf", "Zeek", "Zerk","Yv"];
	var beginnings;

	// Populate arrays for name endings for Neutral/Female/Male/All
	var endsN = ["or", "id", "is", "im", "int", "ju", "rad", "ve", "e", "ot", "ir", "le", "er"];
	var endsF = ["otte", "elle", "ia", "ah", "ie", "y", "irnia", "dra"];
	var endsM = ["an", "ohn", "en", "ian", "otr", "try", "ius", "os", "o", "om"];
	var ends;

	// Switch between all beginnings, only typical common names, and 
	// only weird names using commonality parameter selected by player.
	// Assign selected set to beginnings array.
	// Default is that all endings are included.
	switch(commonality) {
		case '0':
			// All options
			beginnings = beginningsUnusual.concat(beginningsFamiliar);
			break;
		case '1':
			// Only common names
			beginnings = beginningsFamiliar;
			break;
		case '2':
			// Only unusual names
			beginnings = beginningsUnusual;
			break
		default:
			// All options
			beginnings = beginningsUnusual.concat(beginningsFamiliar);
			break;
	}


	// Switch between all endings, only neutral, only female, and only male
	// using gender parameter selected by user. Assign selected set to
	// ends array. Default is that all endings are included.
	switch(gender) {
		case '0':
			// All options
			ends = endsN.concat(endsF, endsM);
			break;
		case '1':
			// Only neutral name endings
			ends = endsN;
			break;
		case '2':
			// Only female name endings
			ends = endsF;
			break;
		case '3':
			// Only male name endings
			ends = endsM;
			break;
		default:
			ends = endsN.concat(endsF, endsM);
			break;
	}

	// Calculate random float between 0.0 and 1.0. Multiply times
	// beginnings.length - 1 to get a random float between 0.0 and
	// beginnings.length - 1. Round down using Math.floor to get integer
	// between 0 and beginnings.length. Use that value to select random
	// index from beginnings array. Assign value to 'beginning' variable.
	beginning = beginnings[Math.floor((beginnings.length - 1) * Math.random())];

	// Calculate random float between 0.0 and 1.0. Multiply times
	// ends.length - 1 to get a random float between 0.0 and
	// ends.length - 1. Round down using Math.floor to get integer
	// between 0 and ends.length. Use that value to select random
	// index from ends array. Assign value to 'beginning' variable.
	end = ends[Math.floor((ends.length - 1) * Math.random())];

	return beginning.concat(end);
}

function accordian(accordianDiv) {
	    $(accordianDiv).accordion({
	        collapsible: true,
	        heightStyle: "content",
	        active: false
				
	    });
}


function move() {
    $('.move').on('click', function (e) {
    	e.preventDefault();

        var linkObject = $(this);
        var linkTarget = linkObject.attr("id").substr(1);

        $.ajax({
            url: 'php/move.php',
            type: "POST",
            data: {
                target: linkTarget
            },
            dataType: 'json',
            success: function (data) {
                document.getElementById("info"+data.lastState).style.display="none";
                document.getElementById("info"+data.state).style.display="block";
                
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        });

    });
}

// Changes displayed 'state' independently of 'Actor' object
function next() {
    $('.next').on('click', function (e) {
      e.preventDefault();

        var linkObject = $(this);
        var linkTarget = linkObject.attr("id").substr(1);

        if (this.parentNode.parentNode.className === "story") {
        	this.parentNode.parentNode.style.display="none";
        } else if (this.parentNode.parentNode.parentNode.className === "story") {
        	this.parentNode.parentNode.parentNode.style.display="none";
        }
        document.getElementById(linkTarget).style.display="block";

    });
}

function setup() {
    $('#setupForm').on('submit', function (e) {
    	saveScore();
    	e.preventDefault();

    	var score = document.getElementById("time").innerHTML
        var formObject = $(this);
        var formURL = formObject.attr("action");

        $.ajax({
            url: formURL,
            type: "POST",
            data: formObject.serialize(),
            dataType: 'json',
            success: function (data) {
            	document.getElementById("avatar").src="images/"+data.avatar+".png";
                $("#actor").html(data.actorName);
                $("#type").html(data.type.charAt(0).toUpperCase()+data.type.slice(1));
                $("#time").html(data.score);
                $("#money").html(data.money);
                $("#friends").html(data.friends);

                $("#setupDiv").remove();
                $("#state"+data.state).show();
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log('oops ' + errorThrown)
            }
        });

    });

}

function hello() {
	$('#hello').on('submit', function (e) {
        e.preventDefault();

        var formObject = $(this);
        var formURL = formObject.attr("action");

        $.ajax({
            url: 'php/hello.php',
            type: "POST",
            data: formObject.serialize(),
            dataType: 'html',
            success: function (data) {
                document.getElementById("actor").innerHTML = data;
                document.getElementById("helloDiv").style.display="none";
                document.getElementById("portDiv").style.display="block";
                document.getElementById("townSquare").style.display="block";
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log('oops ' + errorThrown)
            }
        });

    });

}

function saveScore() {

	var score = parseInt(document.getElementById("time").innerHTML);
	
	$.ajax({
            url: 'php/score.php',
            type: "POST",
            data: { score: score },
            dataType: 'json',
            success: function (data) {
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log('oops ' + errorThrown)
            }
        });

}

function score() {
	var score = parseInt(document.getElementById("time").innerHTML);
	score += 1;
	document.getElementById("time").innerHTML = score;


}

function listeners() {
	hello();
	setup();

	move();
	next();

	document.getElementById('generateName').onclick = function(){ changeName() };
}

function populate() {
	
	changeName();
	document.getElementById("actor").innerHTML = document.getElementById("actorInput").value;

	accordian('#typeInfo');
	$('#profession').buttonset();
	$('#genderSelect').buttonset();
	$('#commonalitySelect').buttonset();
	$('#avatarSelect').buttonset();
}

$(document).ready(function () {

	populate();

	listeners();

	setInterval(function(){ score() },2000);


});