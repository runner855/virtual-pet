const Pet = require('../src/pet');

describe('constructor', () => {
    it('sets the name property', () => {
        const pet = {
            name: 'Fido'
        };
        expect(pet.name).toEqual('Fido');
        
    });
});