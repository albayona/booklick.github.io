import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCommentEditComponent } from './post-comment-edit.component';

describe('PostCommentEditComponent', () => {
  let component: PostCommentEditComponent;
  let fixture: ComponentFixture<PostCommentEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostCommentEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCommentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
