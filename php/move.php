<?php

	require 'actor.php';

	session_start();
	
	// Grab user object from secure session variable
	$user = unserialize($_SESSION['user']);

	// Set the 'lastState' to current location 
	$user->lastState = $user->state;
	
	// Set the current 'state' of user to new location
	$user->state = $_POST['target'];

	// Moves time forward one unit
	$user->timeTick();

	// Update user object in secure session variable
	$_SESSION['user'] = serialize($user);

	echo json_encode($user);

?>