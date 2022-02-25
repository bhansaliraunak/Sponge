import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MonthlyCustomSubscriptionComponent } from './monthly-custom-subscription.component';

describe('MonthlyCustomSubscriptionComponent', () => {
  let component: MonthlyCustomSubscriptionComponent;
  let fixture: ComponentFixture<MonthlyCustomSubscriptionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyCustomSubscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyCustomSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
