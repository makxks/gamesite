import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RLsEssayComponent } from './rls-essay.component';

describe('RLsEssayComponent', () => {
  let component: RLsEssayComponent;
  let fixture: ComponentFixture<RLsEssayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RLsEssayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RLsEssayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
