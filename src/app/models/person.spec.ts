import { Person } from './person';

describe('Person', () => {
  it('should create an instance', () => {
    expect(new Person({})).toBeTruthy();
  });

  it('should create an instance with null input', () => {
    expect(new Person(null)).toBeTruthy();
  });

  it('should create an instance from json object', () => {
    const person: Person = new Person(
      {
        name: 'mark',
        gender: 'male',
        age: 10,
        pets: [{name: 'buddy', type: 'Dog'}, {name: 'kitty', type: 'Cat'}]
      });
    expect(person).toBeTruthy();
    expect(person.name).toEqual('mark');
    expect(person.gender).toEqual('male');
    expect(person.age).toEqual(10);
    expect(person.pets).toBeTruthy();
    expect(person.pets.length).toEqual(2);
    expect(person.pets[0].name).toEqual('buddy');
  });
});
