import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EruptionComponent } from './eruption.component';

describe('EruptionComponent', () => {
  let component: EruptionComponent;
  let fixture: ComponentFixture<EruptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EruptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EruptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
