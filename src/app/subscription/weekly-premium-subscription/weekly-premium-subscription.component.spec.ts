import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyPremiumSubscriptionComponent } from './weekly-premium-subscription.component';

describe('WeeklyPremiumSubscriptionComponent', () => {
  let component: WeeklyPremiumSubscriptionComponent;
  let fixture: ComponentFixture<WeeklyPremiumSubscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyPremiumSubscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyPremiumSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
