<?php

	unset($_SESSION["user"]);
	unset($_SESSION['name']);
	
	header("Location: ../index.html")
?>