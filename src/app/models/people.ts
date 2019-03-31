import * as Collections from 'typescript-collections';

import { Person } from './person';
import { Pet } from './pet';

export class People {

  collection: Collections.Dictionary<string, Array<Pet>>;

  constructor(private data: Person[]) {

    if (data) {
      this.collection = new Collections.Dictionary<string, Array<Pet>>();

      this.collection.setValue('male', new Array<Pet>());
      this.collection.setValue('female', new Array<Pet>());

      data.forEach(x => {
        switch (x.gender) {
          case 'Male':
            this.collection.getValue('male').push(...x.pets);
            break;
          case 'Female':
            this.collection.getValue('female').push(...x.pets);
            break;
          default: break;
        }
      });

      this.collection.getValue('male').sort((a: Pet, b: Pet) => a.name.localeCompare(b.name));
      this.collection.getValue('female').sort((a: Pet, b: Pet) => a.name.localeCompare(b.name));
    }
  }
}
