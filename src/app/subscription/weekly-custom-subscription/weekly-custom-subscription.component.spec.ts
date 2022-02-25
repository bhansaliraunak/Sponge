import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WeeklyCustomSubscriptionComponent } from './weekly-custom-subscription.component';

describe('WeeklyCustomSubscriptionComponent', () => {
  let component: WeeklyCustomSubscriptionComponent;
  let fixture: ComponentFixture<WeeklyCustomSubscriptionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyCustomSubscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyCustomSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
