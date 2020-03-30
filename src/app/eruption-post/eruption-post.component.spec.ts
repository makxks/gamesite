import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EruptionPostComponent } from './eruption-post.component';

describe('EruptionPostComponent', () => {
  let component: EruptionPostComponent;
  let fixture: ComponentFixture<EruptionPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EruptionPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EruptionPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
