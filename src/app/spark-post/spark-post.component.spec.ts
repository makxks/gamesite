import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SparkPostComponent } from './spark-post.component';

describe('SparkPostComponent', () => {
  let component: SparkPostComponent;
  let fixture: ComponentFixture<SparkPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SparkPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
