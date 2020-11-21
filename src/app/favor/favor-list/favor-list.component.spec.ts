/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FavorListComponent } from './favor-list.component';

describe('FavorListComponent', () => {
  let component: FavorListComponent;
  let fixture: ComponentFixture<FavorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
