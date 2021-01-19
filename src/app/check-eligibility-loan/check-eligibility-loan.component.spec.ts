import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckEligibilityLoanComponent } from './check-eligibility-loan.component';

describe('CheckEligibilityLoanComponent', () => {
  let component: CheckEligibilityLoanComponent;
  let fixture: ComponentFixture<CheckEligibilityLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckEligibilityLoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckEligibilityLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
