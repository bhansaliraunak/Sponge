import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnDemandCustomComponent } from './on-demand-custom.component';

describe('OnDemandCustomComponent', () => {
  let component: OnDemandCustomComponent;
  let fixture: ComponentFixture<OnDemandCustomComponent>;

  beforeEach(async(() => {
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
