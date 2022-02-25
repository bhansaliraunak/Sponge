import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OnDemandPremiumComponent } from './on-demand-premium.component';

describe('OnDemandPremiumComponent', () => {
  let component: OnDemandPremiumComponent;
  let fixture: ComponentFixture<OnDemandPremiumComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OnDemandPremiumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnDemandPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
