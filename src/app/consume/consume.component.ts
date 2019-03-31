import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from '../services/person-api.service';
import { People } from '../models/people';
import { Person } from '../models/person';
import { Pet } from '../models/pet';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-consume',
  templateUrl: './consume.component.html',
  styleUrls: ['./consume.component.scss']
})

export class ConsumeComponent implements OnInit {

  genderWithPets: People;
  malePets: Array<Pet>;
  femalePets: Array<Pet>;
  people: Array<Person>;
  buttonText = 'Get Cat Names!';

  constructor(
    public restApi: PersonService,
    public router: Router
  ) { }

  ngOnInit() {
    this.people = new Array<Person>();
  }

  filterIsCat(pet: Pet) {
    return pet.type === 'Cat';
  }

  beforeConsuming() {
    this.people = new Array<Person>();
    this.genderWithPets = null;
    this.buttonText = 'Consuming data ...';
  }

  afterConsuming() {
    this.genderWithPets = new People(this.people);
    this.malePets = this.genderWithPets.collection.getValue('male');
    this.femalePets = this.genderWithPets.collection.getValue('female');
    this.buttonText = 'Get Cat Names!';
  }

  // Consume people data
  loadAllPeople() {
    this.beforeConsuming();
    return this.restApi.getPeople().subscribe((data: {}) => {
      if (data) {
        const people: any = data;
        const delayobservable = of('').pipe(delay(750));
        delayobservable.subscribe(s => {
          people.forEach((element: any) => { this.people.push(new Person(element)); });
          this.afterConsuming();
          });
        }
    }, error => {
      this.afterConsuming();
    });
  }
}
