import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmCondidateLoanDataComponent } from './confirm-condidate-loan-data.component';

describe('ConfirmCondidateLoanDataComponent', () => {
  let component: ConfirmCondidateLoanDataComponent;
  let fixture: ComponentFixture<ConfirmCondidateLoanDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmCondidateLoanDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmCondidateLoanDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
