import { Pet } from './pet';
import * as jQuery from 'jquery';

export class Person {
  name: string;
  gender: string;
  age: number;
  pets: Array<Pet>;

  constructor(jsonData: any) {
    this.pets = new Array<Pet>();

    if (jsonData) {
      jQuery.extend(this, jsonData);

      if (jsonData.pets) {
        this.pets = jQuery.map(jsonData.pets, (emp) => {
          return new Pet(emp);
        });
      }
    }
  }
}

