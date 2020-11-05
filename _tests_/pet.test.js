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

    it('has an initial age value of 0', () => {
        const pet = new Pet('Fido');
        expect(pet.age).toBe(0);

    });

    it('has an initial hunger value of 0', () => {
        const pet = new Pet('Fido');
        expect(pet.hunger).toBe(0);
    });
        
        
        
    });
