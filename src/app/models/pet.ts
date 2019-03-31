import * as jQuery from 'jquery';

export class Pet {
  name: string;
  type: string;

  constructor(jsonData: any) {
    if (jsonData) {
      jQuery.extend(this, jsonData);
    }
  }
}
