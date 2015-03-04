	/*

		function healthBar(healthBarDiv) {

		    var hBar = $(healthBarDiv);

		    $(hBar).progressbar({
		        value: (1 / 12) * 100
		    });

		    $(hBar).height(20);

		    var healthBarValue = hBar.find(".ui-progressbar-value");

		    healthBarValue.css({
		        "background": '#86937C'
		    });

		}
/*
		function manaBar(manaBarDiv) {

		    var mBar = $(manaBarDiv);

		    $(mBar).progressbar({
		        value: (1 / 10) * 100
		    });

		    $(mBar).height(20);

		    var manaBarValue = mBar.find(".ui-progressbar-value");

		    manaBarValue.css({
		        "background": '#2D2775'
		    });

		}
*/
	/*

		function statusUpdate() {
		    $.ajax({
		        url: 'php/checkStatus.php',
		        dataType: 'json',
		        success: function (data) {
		        	console.log(data);

		        	// If player has not gone through setup
		        	if (data.user != '0') {

		        		// Now that the player is logged in, show the logout link.
		                $('#logout').show();

		                // Show Info Sidebar
		                $('#info').show();
		                
		                // Hide the previously shown state
		                $(".story").hide();

		                // No longer show the login div
		                $("#loginDiv").remove();

		                // If the user has been through setup
		                if (data.user != -1) {

		                	// Update info bar
		                    $("#actor").html(data.user.actorName);
		                    $("#hp").html(data.user.hp);
		                    $("#maxHP").html(data.user.maxhp);
		                    //$("#mp").html(data.user.mp);
		                    //$("#maxMP").html(data.user.maxmp);
		                    $("#money").html(data.user.money);

		                    // Dealing with weapons
		                    //$('#weapon').find('.name').text(data.inventory.equipment.stuff.weapon.wName);
		                    //$('#weapon').find('.icon').attr('src', 'icons/'+data.inventory.equipment.stuff.weapon.kind+'.jpg');

		                    // Finds state 
		                    var newState = $("#state" + data.user.state);
		                    
		                    // Hides Last State
		                   	$('#state' + data.user.lastState).hide();

		                    // Changes div corresponding to new state display: block;        	
		                    newState.show();

		                    $('#location').html(newState.attr("title"));

		                    $('#healthBar').progressbar({
		                        value: (data.user.hp / data.user.maxhp) * 100
		                    });
/*
		                    $('#manaBar').progressbar({
		                        value: (data.user.mp / data.user.maxmp) * 100
		                    }); *//*
		                } else {
		                    $('#setupDiv').show();
		                }

		            }

		        },
		        error: function (jqXHR, textStatus, errorThrown) {
		        	console.log ('wtf?');
		        }
		    });
		}
		*/
		/*
		function listen2() {

		    $('.object').on('click', function (e){
				e.preventDefault();

		    	var objectObject = $(this);
		        var objectType = objectObject.attr("id");

		        $.ajax({
		            url: 'use.php',
		            type: "POST",
		            data: {
		            	type: objectType
		            },
		            success: function (data) {

		            	console.log();
		                statusUpdate();

		            },
		            error: function (jqXHR, textStatus, errorThrown) {
		                console.log(errorThrown);
		            }
		        });

		    })

		}
*/

	function setup() {
		    $('#setupForm').on('submit', function (e) {
		    	e.preventDefault();

		        var formObject = $(this);
		        var formURL = formObject.attr("action");

		        $.ajax({
		            url: formURL,
		            type: "POST",
		            data: formObject.serialize(),
		            dataType: 'json',
		            success: function (data) {
		                $("#actor").html(data.actorName);
		                $("#type").html(data.type.charAt(0).toUpperCase()+data.type.slice(1));
		                $("#time").html(data.time);
		                $("#money").html(data.money);
		                $("#friends").html(data.friends);
		                /*
		                $("#hp").html(data.user.hp);
		                $("#maxHP").html(data.user.maxhp);
		                $("#mp").html(data.user.mp);
		                $("#maxMP").html(data.user.maxmp);
		                

		                $('#healthBar').progressbar({
		                    value: (data.user.hp / data.user.maxhp) * 100
		                });

		                $('#manaBar').progressbar({
		                    value: (data.user.mp / data.user.maxmp) * 100
		                });
						*/
		                //$('#weapon').find('.name').text(data.inventory.equipment.stuff.weapon.wName);
		                //$('#weapon').find('.icon').attr('src', 'icons/'+data.inventory.equipment.stuff.weapon.kind+'.jpg');

		                //$('#belt').text(data.inventory.belt.name);

		                //$('#beltHead').find('.filledSlots').text(data.inventory.belt.filledSlots);
		                //$('#beltHead').find('.slots').text(data.inventory.belt.slots);

		                /*$.each(data.inventory.belt.stuff, function (index, value) {
		                    $('#b'.index).find("a").attr('id', value.kind);
		                    $('#b'.index).find('a').text(value.oName);
		                    $('#b'.index).find('.filledSlots').text(value.quantity);
		                    $('#b'.index).find('.slots').text(value.maxStack);
		                });
		                /*
							    $("#b1").find("a").attr(id, data.inventory.0.stuff.0.type);
							    $("#b1").find("a").text(data.inventory.0.stuff.0.name);
							    $('#b1').find('.filledSlots').text(data.inventory.0.stuff.0.filledSlots);
							    $('#b1').find('.slots').text(data.inventory.0.stuff.0.slots);

							    $("#b2").find("a").attr(id, data.inventory.0.stuff.2.type);
							    $("#b2").find("a").text(data.inventory.0.stuff.2.name);
							    $('#b2').find('.filledSlots').text(data.inventory.0.stuff.2.filledSlots);
							    $('#b2').find('.slots').text(data.inventory.0.stuff.2.slots);

							    $("#b3").find("a").attr(id, data.inventory.0.stuff.0.type);
							    $("#b3").find("a").text(data.inventory.0.stuff.0.name);
							    $('#b1').find('.filledSlots').text(data.inventory.0.stuff.0.filledSlots);
							    $('#b1').find('.slots').text(data.inventory.0.stuff.0.slots);
		*/
		                $("#setupDiv").remove();
		                $("#state"+data.state).show();
		            },
		            error: function (jqXHR, textStatus, errorThrown) {
		                console.log('oops ' + errorThrown)
		            }
		        });

		    });

		}

/*
		function generate() {

		    $(".radio").buttonset();

		    accordian('#accordion');
		    healthBar('#healthBar');
		   // manaBar('#manaBar');
		}
*/