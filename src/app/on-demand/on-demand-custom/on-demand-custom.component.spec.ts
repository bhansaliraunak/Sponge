import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OnDemandCustomComponent } from './on-demand-custom.component';

describe('OnDemandCustomComponent', () => {
  let component: OnDemandCustomComponent;
  let fixture: ComponentFixture<OnDemandCustomComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OnDemandCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnDemandCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
