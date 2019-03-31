import { Pet } from './pet';

describe('Pet', () => {
  it('should create an instance', () => {
    expect(new Pet({})).toBeTruthy();
  });

  it('should create an instance with null input', () => {
    expect(new Pet(null)).toBeTruthy();
  });

  it('should create an instance from json object', () => {
    const pet: Pet = new Pet({name: 'buddy', type: 'dog'});
    expect(pet).toBeTruthy();
    expect(pet.name).toEqual('buddy');
    expect(pet.type).toEqual('Dog');
  });
});
