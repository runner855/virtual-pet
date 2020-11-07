const Pet = require('../src/pet');

describe('constructor', () => {

    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
        
    });

    it('sets the name property', () => {
        const pet = {
            name: 'Fido'
        };
        
        expect(pet.name).toEqual('Fido');
    });

    it('has a initial age of 0', () => {
        const pet = new Pet('Fido');

        expect(pet.age).toEqual(0);
    });

    
});

describe('growUp', () => {

    it('increments the age by 1', () => {
        const pet = new Pet('Fido');

        pet.growUp();

        expect(pet.age).toEqual(1);
    
});

    it('increase the hunger by 5', () => {
        const pet = new Pet('Fido');

        pet.growUp();

        expect(pet.hunger).toEqual(5);
    });

    

    it('decrease the fitness by 3', () => {
        const pet = new Pet('Fido');

        pet.growUp();

        expect(pet.fitness).toEqual(7);
    });

});

    describe('walk', () => {
        it('increase fitness to a maximum of 10', () => {
            const pet = new Pet('Fido');

            pet.fitness = 8;
            pet.walk();

            expect(pet.fitness).toEqual(10);
    });
});

describe('feed', () => {
    it('decrease the hunger level to a maximum of 0', () => {
        const pet = new Pet('Fido');

        pet.hunger = 2;
        pet.feed();

        expect(pet.hunger).toEqual(0);
    })
});

describe('checkUp', () => {
    it('if the pet fitness is 3 or less print message', () => {
        const pet = new Pet('Fido');

        pet.hunger = 3;
        pet.fitness = 2;
        
        console.log(pet.hunger, pet.fitness);

        expect(pet.checkUp()).toEqual("I need a walk");
    });

    it('if the pet hunger is 5 or more print message', () => {
        const pet = new Pet('Fido');

        

        pet.growUp();
       

        expect(pet.checkUp()).toEqual("I am hungry");
    });

    it('if the pet fitness is 3 or less and pet hunger is 5 or more print message', () => {
        const pet = new Pet('Fido');

        
        pet.hunger = 4;
        pet.fitness = 2;
        pet.growUp();
        
        
        
        

        expect(pet.checkUp()).toEqual("I am hungry AND I need a walk");
    });

    it('if pet fitness is 3 or less and pet hunger is 5 or more  print message', () => {
        const pet = new Pet('Fido');

        pet.feed();

        expect(pet.checkUp()).toEqual("I feel great!");


    })
});



    
 

 

 