import { People } from './people';
import { Person } from './person';

describe('People', () => {
  it('should create an instance', () => {
    expect(new People(new Array<Person>())).toBeTruthy();
  });

  it('should create an instance with null input', () => {
    const people: People = new People(null);
    expect(people).toBeTruthy();
    expect(people.collection).toBeTruthy();
  });

  it('should create an instance with array input', () => {
    const array: Array<Person> = new Array<Person>();
    array.push(new Person({
      name: 'mark',
      gender: 'Male',
      age: 10,
      pets: [{name: 'buddy', type: 'Dog'}, {name: 'kitty', type: 'Cat'}]
    }));
    const people: People = new People(array);
    expect(people).toBeTruthy();
    expect(people.collection).toBeTruthy();
    expect(people.collection.getValue('male').length).toEqual(2);
    expect(people.collection.getValue('female').length).toEqual(0);
    expect(people.collection.getValue('male')[0].name).toEqual('buddy');
  });
});
