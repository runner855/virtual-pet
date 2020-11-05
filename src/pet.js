function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
 }
// GETTING OLDER
 Pet.prototype.growUp = function () {
     this.age += 1;
 };
// GETTING HUNGRIER
 Pet.prototype.feeding = function () {
     this.hunger += 5;
 };
 
 //GETTING LESS FIT
Pet.prototype.feelingFit = function () {
        this.fitness -= 3;
    };
     



module.exports = Pet;