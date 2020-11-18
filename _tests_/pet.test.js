const Pet = require("../src/pet");

describe("constructor", () => {
  let pet;

  beforeEach(() => {
    pet = new Pet("Fido");
  });

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
  let pet;

  beforeEach(() => {
    pet = new Pet("Fido");
  });

  it("increments the age by 1", () => {
    pet.growUp();

    expect(pet.age).toEqual(1);
  });

  it("increase the hunger by 5", () => {
    pet.growUp();

    expect(pet.hunger).toEqual(5);
  });

  it("decrease the fitness by 3", () => {
    pet.growUp();

    expect(pet.fitness).toEqual(7);
  });

  it("throws an error if the pet is no longer alive", () => {
    pet.age = 30;

    expect(() => pet.growUp()).toThrow("Your pet is no longer alive :(");
  });
});

describe("walk", () => {
  let pet;

  beforeEach(() => {
    pet = new Pet(" Fido");
  });

  it("increase fitness to a maximum of 10", () => {
    pet.fitness = 8;
    pet.walk();

    expect(pet.fitness).toEqual(10);
  });

  it("throws an error if the pet is no longer alive", () => {
    pet.hunger = 10;

    expect(() => pet.walk()).toThrow("Your pet is no longer alive :(");
  });
});

describe("feed", () => {
  let pet;

  beforeEach(() => {
    pet = new Pet("Fido");
  });

  it("decrease the hunger level to a maximum of 0", () => {
    pet.hunger = 2;
    pet.feed();

    expect(pet.hunger).toEqual(0);
  });

  it("throws an error if the pet is no longer alive", () => {
    pet.age = 30;

    expect(() => pet.feed()).toThrow("Your pet is no longer alive :(");
  });
});

describe("checkUp", () => {
  let pet;

  beforeEach(() => {
    pet = new Pet("Fido");
  });

  it("if the pet fitness is 3 or less and pet hunger is 5 or more print message", () => {
    pet.hunger = 6;
    pet.fitness = 2;

    expect(pet.checkUp()).toEqual("I am hungry AND I need a walk");
  });

  it("if the pet fitness is 3 or less print message", () => {
    pet.hunger = 3;
    pet.fitness = 2;

    expect(pet.checkUp()).toEqual("I need a walk");
  });

  it("if the pet hunger is 5 or more print message", () => {
    pet.growUp();

    expect(pet.checkUp()).toEqual("I am hungry");
  });

  it("if pet fitness is greater than 3  and pet hunger greater than  5  print message", () => {
    pet.feed();

    expect(pet.checkUp()).toEqual("I feel great!");
  });

  it("throws an error if the pet is no longer alive", () => {
    pet.age = 30;

    expect(() => pet.checkUp()).toThrow("Your pet is no longer alive :(");
  });
});

describe("isAlive", () => {
  let pet;

  beforeEach(() => {
    pet = new Pet("Fido");
  });

  it("if pet hunger is 10 or more and age is 30 or more and  pet fitness is 0 or more return false", () => {
    pet.hunger = 11;

    expect(pet.isAlive).toEqual(false);
  });

  it("if pet hunger is less than 10 and age is less than 30 and and fitness is greater than 0 return true", () => {
    expect(pet.isAlive).toEqual(true);
  });

  describe("adoptChild", () => {
    let pet;
    let parent;
    let child;

    beforeEach(() => {
      pet = new Pet("Fido");
      parent = new Pet("Tom");
      child = new Pet("Flo");
    });

    it("create the parent object", () => {
      pet.adoptChild(child);

      expect(new Pet("Tom")).toBeInstanceOf(Object);
    });

    it("create the child object", () => {
      expect(new Pet("Flo")).toBeInstanceOf(Object);
    });

    it("throws an error if the pet is no longer alive", () => {
      pet.age = 30;

      expect(() => pet.adoptChild()).toThrow("Your pet is no longer alive :(");
    });
  });
});
