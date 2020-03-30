import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostmortemsComponent } from './postmortems.component';

describe('PostmortemsComponent', () => {
  let component: PostmortemsComponent;
  let fixture: ComponentFixture<PostmortemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostmortemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostmortemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
