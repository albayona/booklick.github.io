import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleFavorListComponent } from './simple-favor-list.component';

describe('SimpleFavorListComponent', () => {
  let component: SimpleFavorListComponent;
  let fixture: ComponentFixture<SimpleFavorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleFavorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleFavorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
