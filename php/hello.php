<?php
function saveName() {

    session_start();

     // FETCH DATA FROM INPUT FIELD
    $actorName = $_POST['actorInput'];

    // Check if all required fields are filled out.
    if (isset($actorName))
    {
      $_SESSION['name'] = $actorName;
    }

    else // If $actorName is not set.
    {
      echo "No bueno name";
    }

    return $actorName;

}

  // MAIN

  echo saveName();
  
	exit();

?>