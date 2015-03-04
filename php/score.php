<?php

	session_start();

	// Update user score session variable
	$_SESSION['score'] = $_POST['score'];;

	echo $_SESSION['score'];

?>