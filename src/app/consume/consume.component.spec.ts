import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ConsumeComponent } from './consume.component';
import { CallbackPipe } from '../callback.pipe';
import { Pet } from '../models/pet';

describe('ConsumeComponent', () => {
  let component: ConsumeComponent;
  let fixture: ComponentFixture<ConsumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [ ConsumeComponent, CallbackPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set button and array before api call', () => {
    component.beforeConsuming();
    expect(component.people).toBeTruthy();
    expect(component.genderWithPets).toBeNull();
    expect(component.buttonText).toEqual('Consuming data ...');
  });

  it('should set button and array after api call', () => {
    component.beforeConsuming();
    component.afterConsuming();
    expect(component.people).toBeTruthy();
    expect(component.genderWithPets).toBeTruthy();
    expect(component.buttonText).toEqual('Get Cat Names!');
  });

  it('should filter pets that are only cats', () => {
    const result: boolean = component.filterIsCat(new Pet({name: 'kitty', type: 'Cat'}));
    expect(result).toBeTruthy();
  });
});
