<?php

function generateStats($name, $type, $avatar, $score) {

  if ($type === 'officer')
  {
    $hp = 15;
    $maxhp = 15;

    $hunger = 2;
    $weight = 2;
    $strength = 4;

    $knack = 1;
    $tenacity = 3;
    $charm = 1;

    $luck = 0.5;
    $money = 60;
    $friends = 3;
  } 
  elseif ($type === 'merchant') 
  {
    $hp = 7;
    $maxhp = 7;

    $hunger = 3;
    $weight = 3;
    $strength = 1;

    $knack = 2;
    $tenacity = 2;
    $charm = 3;

    $luck = 0.55;
    $money = 300;
    $friends = 20;
  }
    elseif ($type === 'inventor') 
  {
    $hp = 10;
    $maxhp = 10;

    $hunger = 3;
    $weight = 2;
    $strength = 1;

    $knack = 4;
    $tenacity = 2;
    $charm = 2;

    $luck = 0.6;
    $money = 80;
    $friends = 6;
  }
    elseif ($type === 'adept') 
  {
    $hp = 15;
    $maxhp = 15;

    $hunger = 1;
    $weight = 1;
    $strength = 4;
    
    $knack = 3;
    $tenacity = 4;
    $charm = 1;
    
    $luck = 0.4;
    $money = 20;
    $friends = 5;
  }
  else
  {
    $hp = 13;
    $maxhp = 12;

    $hunger = 3;
    $weight = 1;
    $strength = 2;

    $knack = 1;
    $tenacity = 4;
    $charm = 4;
    
    $luck = 0.65;
    $money = 42;
    $friends = 3;
  }

  $array = array('actorName' => $name, 'type' => $type,
                'hp' => $hp, 'maxhp' => $maxhp,
                'hunger' => $hunger, 'weight' => $weight, 
                'strength' => $strength, 'knack' => $knack,
                'tenacity' => $tenacity, 'charm' => $charm,
                'luck' => $luck, 'money' => $money, 
                'friends' => $friends, 'exp' => $exp,
                'avatar' => $avatar, 'score' => $score);

  return new Actor ($array);

  /* Actor Object is structured:
    actorName, type, hp, maxhp, hunger, weight, strength, knack,
    tenacity, charm, luck, warmth, money, friends, exp
  */

}


function getActor() {

    session_start(); 

    $name = $_SESSION['name'];

    $actorObject = NULL;

     // FETCH DATA FROM INPUT FIELD
    $type = $_POST['type'];
    $avatar = $_POST['avatar'];
    $score = $_SESSION['score'];

    // Check if all required fields are filled out.
    if (isset($type))
    {
      // Initializes state
      $actorObject = generateStats($name, $type, $avatar, $score);
      //echo serialize($userObject);
      
      $_SESSION['user'] = serialize($actorObject);

    }

    else // If $user is not set.
    {
      echo "No bueno name";
    }

  return $actorObject;

}

  // MAIN

  require "actor.php";

  // Where user state is

  echo json_encode(getActor());
  
	exit();

?>