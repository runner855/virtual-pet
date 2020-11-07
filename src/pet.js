const MAXIMUM_FITNESS = 10;
const FITNESS_INCREASE = 4;
const FITNESS_DECREASE = 3;
const AGE_INCREASE = 1;
const HUNGER_INCREASE = 5;
const HUNGER_DECREASE = 3;
const MAXIMUM_HUNGER = 0;



function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = MAXIMUM_FITNESS;
}

 Pet.prototype.growUp = function() {
     this.age += AGE_INCREASE;
    this.hunger += HUNGER_INCREASE;
    this.fitness -= FITNESS_DECREASE;
};

Pet.prototype.walk = function() {
    if((this.fitness + FITNESS_INCREASE) <= MAXIMUM_FITNESS ) {
        this.fitness += FITNESS_INCREASE;
    } else  {
        this.fitness = MAXIMUM_FITNESS;

    } 
};

Pet.prototype.feed = function() {
    if((this.hunger - HUNGER_DECREASE ) >= MAXIMUM_HUNGER) {
        this.hunger -= HUNGER_DECREASE;
    }else {
        this.hunger = MAXIMUM_HUNGER;
    }
};

Pet.prototype.checkUp = function() {
  if(this.hunger  >= 5 && this.fitness <= 3) {
      return "I am hungry AND I need a walk";
  } else if(this.hunger >= 5 ) {
      return "I am hungry";
  } else if (this.fitness <= 3 ) {
      return "I need a walk";
  } else if(this.fitness  > 3 && this.hunger < 5  ) {
      return "I feel great!";

  }
};




 
 
 

 



module.exports = Pet;