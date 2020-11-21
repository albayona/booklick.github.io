import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleEventComponent } from './simple-event.component';

describe('SimpleEventComponent', () => {
  let component: SimpleEventComponent;
  let fixture: ComponentFixture<SimpleEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
