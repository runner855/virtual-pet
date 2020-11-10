const Pet = require("../src/pet");

describe("constructor", () => {
  it("returns an object", () => {
    expect(new Pet("Fido")).toBeInstanceOf(Object);
  });

  it("sets the name property", () => {
    const pet = {
      name: "Fido",
    };

    expect(pet.name).toEqual("Fido");
  });

  it("has a initial age of 0", () => {
    const pet = new Pet("Fido");

    expect(pet.age).toEqual(0);
  });
});

describe("growUp", () => {

  

  it("increments the age by 1", () => {
    const pet = new Pet("Fido");

    pet.growUp();

    expect(pet.age).toEqual(1);
  });

  it("increase the hunger by 5", () => {
    const pet = new Pet("Fido");

    pet.growUp();

    expect(pet.hunger).toEqual(5);
  });

  it("decrease the fitness by 3", () => {
    const pet = new Pet("Fido");

    pet.growUp();

    expect(pet.fitness).toEqual(7);
  });

  it('throws an error if the pet is no longer alive', () => {
    const pet = new Pet('Fido');

    pet.age = 30;

    expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(');
  });

});

describe("walk", () => {

 

  it("increase fitness to a maximum of 10", () => {
    const pet = new Pet("Fido");

    pet.fitness = 8;
    pet.walk();

    expect(pet.fitness).toEqual(10);
  });

  it('throws an error if the pet is no longer alive', () => {
    const pet = new Pet(' Fido');

    pet.hunger = 10;

    expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
  });
});

describe("feed", () => {


  it("decrease the hunger level to a maximum of 0", () => {
    const pet = new Pet("Fido");

    pet.hunger = 2;
    pet.feed();

    expect(pet.hunger).toEqual(0);
  });

  it('throws an error if the pet is no longer alive', () => {
    const pet = new Pet('Fido');

    pet.age = 30;

    expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
  });
});

describe("checkUp", () => {

  it("if the pet fitness is 3 or less and pet hunger is 5 or more print message", () => {
    const pet = new Pet("Fido");

    pet.hunger = 5;
    pet.fitness = 3;
    

    expect(pet.checkUp()).toEqual("I am hungry AND I need a walk");
  });

  it("if the pet fitness is 3 or less print message", () => {
    const pet = new Pet("Fido");

    pet.hunger = 3;
    pet.fitness = 2;

    

    expect(pet.checkUp()).toEqual("I need a walk");
  });

  it("if the pet hunger is 5 or more print message", () => {
    const pet = new Pet("Fido");

    pet.growUp();

    expect(pet.checkUp()).toEqual("I am hungry");
  });


  it("if pet fitness is greater than 3  and pet hunger greater than  5  print message", () => {
    const pet = new Pet("Fido");
 
    pet.feed();

    expect(pet.checkUp()).toEqual("I feel great!");
  });

  

  

  it('throws an error if the pet is no longer alive', () => {
    const pet = new Pet('Fido');

    pet.age = 30;

    expect(() => pet.checkUp()).toThrow('Your pet is no longer alive :(');
  });

});

describe("isAlive", () => {
  it("if pet hunger is 10 or more and age is 30 or more and  pet fitness is 0 or more return false", () => {
    const pet = new Pet("Fido");

    pet.hunger = 11;

    expect(pet.isAlive).toEqual(false);
  });

  it("if pet hunger is less than 10 and age is less than 30 and and fitness is greater than 0 return true", () => {
    const pet = new Pet("Fido");

    

    expect(pet.isAlive).toEqual(true);
  });


});
