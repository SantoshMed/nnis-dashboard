import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetQuestionActiveComponent } from './set-question-active.component';

describe('SetQuestionActiveComponent', () => {
  let component: SetQuestionActiveComponent;
  let fixture: ComponentFixture<SetQuestionActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetQuestionActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetQuestionActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
