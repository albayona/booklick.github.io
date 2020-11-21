import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentSelectorComponent } from './resident-selector.component';

describe('ResidentSelectorComponent', () => {
  let component: ResidentSelectorComponent;
  let fixture: ComponentFixture<ResidentSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResidentSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
