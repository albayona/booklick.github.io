import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCommentCreateComponent } from './post-comment-create.component';

describe('PostCommentCreateComponent', () => {
  let component: PostCommentCreateComponent;
  let fixture: ComponentFixture<PostCommentCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostCommentCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCommentCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
