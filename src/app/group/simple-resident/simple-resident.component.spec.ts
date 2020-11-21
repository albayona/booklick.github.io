import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleResidentComponent } from './simple-resident.component';

describe('SimpleResidentComponent', () => {
  let component: SimpleResidentComponent;
  let fixture: ComponentFixture<SimpleResidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleResidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleResidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
