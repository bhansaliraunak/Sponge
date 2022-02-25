import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnDemandPremiumComponent } from './on-demand-premium.component';

describe('OnDemandPremiumComponent', () => {
  let component: OnDemandPremiumComponent;
  let fixture: ComponentFixture<OnDemandPremiumComponent>;

  beforeEach(async(() => {
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
