import { TestBed, inject } from '@angular/core/testing';

import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { PersonService } from './person-api.service';

describe('PersonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonService],
      imports: [
        HttpClientTestingModule
      ],
    });
  });

  it('should be created', () => {
    const service: PersonService = TestBed.get(PersonService);
    expect(service).toBeTruthy();
  });

  it('should get users',
    inject(
      [HttpTestingController, PersonService],
      (
        httpMock: HttpTestingController,
        dataService: PersonService
      ) => {
        const mockUsers = [
          { name: 'Bob', gender: 'male', age: '20', pets: [{ name: 'buddy', type: 'dog'}] },
          { name: 'Sue', gender: 'female', age: '22', pets: [{ name: 'kitty', type: 'cat'}] }
        ];

        dataService.getPeople().subscribe((AllPeople: any = []) => {
          expect(AllPeople).toEqual(mockUsers);
        });

        const mockReq = httpMock.expectOne(dataService.apiURL);

        expect(mockReq.cancelled).toBeFalsy();
        expect(mockReq.request.responseType).toEqual('json');
        mockReq.flush(mockUsers);

        httpMock.verify();
      }
    )
  );

});
