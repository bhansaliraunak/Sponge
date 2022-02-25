import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MonthlyBasicSubscriptionComponent } from './monthly-basic-subscription.component';

describe('MonthlyBasicSubscriptionComponent', () => {
  let component: MonthlyBasicSubscriptionComponent;
  let fixture: ComponentFixture<MonthlyBasicSubscriptionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyBasicSubscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyBasicSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
