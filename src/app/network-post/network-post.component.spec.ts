import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkPostComponent } from './network-post.component';

describe('NetworkPostComponent', () => {
  let component: NetworkPostComponent;
  let fixture: ComponentFixture<NetworkPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
