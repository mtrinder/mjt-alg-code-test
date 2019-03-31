import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from '../services/person-api.service';

@Component({
  selector: 'app-consume',
  templateUrl: './consume.component.html',
  styleUrls: ['./consume.component.scss']
})
export class ConsumeComponent implements OnInit {

  AllPeople: any = [];

  constructor(
    public restApi: PersonService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  // Get employees list
  loadAllPeople() {
    return this.restApi.getPeople().subscribe((data: {}) => {
      this.AllPeople = data;
    });
  }
}
