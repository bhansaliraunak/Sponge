import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OnDemandBasicComponent } from './on-demand-basic.component';

describe('OnDemandBasicComponent', () => {
  let component: OnDemandBasicComponent;
  let fixture: ComponentFixture<OnDemandBasicComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OnDemandBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnDemandBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
