import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MonthlyPremiumSubscriptionComponent } from './monthly-premium-subscription.component';

describe('MonthlyPremiumSubscriptionComponent', () => {
  let component: MonthlyPremiumSubscriptionComponent;
  let fixture: ComponentFixture<MonthlyPremiumSubscriptionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyPremiumSubscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyPremiumSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
