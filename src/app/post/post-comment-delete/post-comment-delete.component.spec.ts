import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCommentDeleteComponent } from './post-comment-delete.component';

describe('PostCommentDeleteComponent', () => {
  let component: PostCommentDeleteComponent;
  let fixture: ComponentFixture<PostCommentDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostCommentDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCommentDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
