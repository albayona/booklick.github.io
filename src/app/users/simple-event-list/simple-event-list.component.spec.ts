import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleEventListComponent } from './simple-event-list.component';

describe('SimpleEventListComponent', () => {
  let component: SimpleEventListComponent;
  let fixture: ComponentFixture<SimpleEventListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleEventListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleEventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
