import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WeeklyBasicSubscriptionComponent } from './weekly-basic-subscription.component';

describe('WeeklyBasicSubscriptionComponent', () => {
  let component: WeeklyBasicSubscriptionComponent;
  let fixture: ComponentFixture<WeeklyBasicSubscriptionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyBasicSubscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyBasicSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
