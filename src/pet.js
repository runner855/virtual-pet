
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
    this.fitness = 10;
    this.children = [];
}

Pet.prototype = {
    get isAlive() {
      return this.age < 30 && this.hunger < 10 && this.fitness > MAXIMUM_HUNGER;
    }
  };


Pet.prototype.walk = function() {

    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
      }if((this.fitness + FITNESS_INCREASE) <= 10 ) {
        this.fitness += FITNESS_INCREASE;
    } else  {
        this.fitness = 10;

    }
};

    



 Pet.prototype.growUp = function() {

    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
      }

     this.age += AGE_INCREASE;
    this.hunger += HUNGER_INCREASE;
    this.fitness -= FITNESS_DECREASE;
};


Pet.prototype.feed = function() {

    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
      }

    if((this.hunger - HUNGER_DECREASE ) >= MAXIMUM_HUNGER) {
        this.hunger -= HUNGER_DECREASE;
    }else {
        this.hunger = MAXIMUM_HUNGER;
    }
};

Pet.prototype.checkUp = function() {

    if (!this.isAlive) {
        throw new Error ('Your pet is no longer alive :(');
    }else if(this.fitness  <= 3 && this.hunger >= 5) {
        return "I am hungry AND I need a walk";
    } else if (this.fitness <= 3 ) {
        return "I need a walk";
    } else if(this.hunger >= 5 ) {
      return "I am hungry";
    }else  {
        return "I feel great!";
  

  }
};

Pet.prototype.adoptChild = function(child) {

    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
      }

      this.children.push(child)

     }







 
 
 

 



module.exports = Pet;