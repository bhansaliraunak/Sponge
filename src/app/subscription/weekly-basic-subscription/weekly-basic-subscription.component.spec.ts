import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyBasicSubscriptionComponent } from './weekly-basic-subscription.component';

describe('WeeklyBasicSubscriptionComponent', () => {
  let component: WeeklyBasicSubscriptionComponent;
  let fixture: ComponentFixture<WeeklyBasicSubscriptionComponent>;

  beforeEach(async(() => {
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
