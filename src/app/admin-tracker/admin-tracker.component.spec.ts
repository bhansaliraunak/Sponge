import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTrackerComponent } from './admin-tracker.component';

describe('AdminTrackerComponent', () => {
  let component: AdminTrackerComponent;
  let fixture: ComponentFixture<AdminTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTrackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
