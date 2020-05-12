import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StringReducerComponent } from './string-reducer.component';

describe('StringReducerComponent', () => {
  let component: StringReducerComponent;
  let fixture: ComponentFixture<StringReducerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StringReducerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringReducerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
