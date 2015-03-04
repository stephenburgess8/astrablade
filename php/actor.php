<?php
  /* Actor Object is structured:
    state, actorName, type, hp, maxhp, hunger, weight, strength, knack,
    tenacity, charm, luck, money, friends, exp
  */
class Actor 
	{
		public $time;
		public $state;
		public $lastState;

		public $actorName;
		public $type;
		public $exp;

		public $hp;
		public $maxhp;

		public $hunger;
		public $weight;
		public $strength;

		public $knack;
		public $tenacity;
		public $charm;

		public $luck;
		public $money;
		public $friends;

		public $avatar;
		public $score;

		public function __construct($array)  
	    {  
	        $this->time = 0.0;
	        $this->state = '00';
	        $this->lastState = '00';
	        $this->exp = 0;

	        $this->actorName = $array['actorName'];
	        $this->type = $array['type'];
	        $this->exp = 0;

	        $this->hp = $array['hp'];
	        $this->maxhp = $array['maxhp'];

			$this->hunger = $array['hunger'];
			$this->weight = $array['weight'];
	        $this->strength = $array['strength'];

	        $this->knack = $array['knack'];
	        $this->tenacity = $array['tenacity'];
	        $this->charm = $array['charm'];

	        $this->luck = $array['luck'];
	        $this->money = $array['money'];
	        $this->friends = $array['friends'];

	        $this->avatar = $array['avatar'];
	        $this->score = $array['score'];
	    }
	    
	    // Functions

		public function timeTick($tick = 1.0) {
			$this->time = $this->time + $tick;
		}

	}

?>