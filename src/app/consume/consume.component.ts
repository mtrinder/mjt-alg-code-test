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
  buttonText = 'Get Pet Names!';

  constructor(
    public restApi: PersonService,
    public router: Router
  ) { }

  ngOnInit() {
    this.people = new Array<Person>();
  }

  // Consume people data
  loadAllPeople() {
    this.people = new Array<Person>();
    this.buttonText = 'Consuming data ...';

    return this.restApi.getPeople().subscribe((data: {}) => {
      if (data) {
        const people: any = data;

        const delayobservable = of('').pipe(delay(500));
        delayobservable.subscribe(s => {
          people.forEach((element: any) => {
            this.people.push(new Person(element));
          });

          this.genderWithPets = new People(this.people);
          this.malePets = this.genderWithPets.collection.getValue('male');
          this.femalePets = this.genderWithPets.collection.getValue('female');
          this.buttonText = 'Get Pet Names!';
          });
        }
    });
  }
}
