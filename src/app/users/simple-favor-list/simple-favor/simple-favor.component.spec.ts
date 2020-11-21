import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleFavorComponent } from './simple-favor.component';

describe('SimpleFavorComponent', () => {
  let component: SimpleFavorComponent;
  let fixture: ComponentFixture<SimpleFavorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleFavorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleFavorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
