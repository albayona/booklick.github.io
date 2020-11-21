import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedGalleryComponent } from './extended-gallery.component';

describe('ExtendedGalleryComponent', () => {
  let component: ExtendedGalleryComponent;
  let fixture: ComponentFixture<ExtendedGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtendedGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendedGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
