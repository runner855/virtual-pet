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
})



    
 

 

 