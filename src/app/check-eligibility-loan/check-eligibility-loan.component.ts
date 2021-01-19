import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { InterestRatesService } from '../interest-rates.service';
import { Mortgage } from '../models/mortage';

@Component({
  selector: 'bank-check-eligibility-loan',
  templateUrl: './check-eligibility-loan.component.html',
  styleUrls: ['./check-eligibility-loan.component.css']
})
export class CheckEligibilityLoanComponent implements OnInit {

  mortgageForm: FormGroup;
  mortgages: Mortgage;
  // tslint:disable-next-line:member-ordering
  mortgageTypeList: string[];
  customerTypes: string[];
  tentures: number[];
  constructor(private fb: FormBuilder, private router: Router, private service: InterestRatesService) { }

  ngOnInit() {

    this.mortgageForm = this.fb.group({
      customerType: [''],
      mortgageType: [''],
      assetSize: [''],
      areaCode: [''],
      loanAmount: [''],
      tenture: ['']
    });
    this.customerTypes = ['New customer', 'Existing Customer', 'Primium'];
    this.tentures = [3, 6, 9, 12, 18, 24, 36, 48, 60];
    this.service.getMortgageTypes().subscribe(types => {
      this.mortgageTypeList = types;
    });
    this.mortgages = {
      id: null,
      customerType: '',
      mortgageType: '',
      assetSize: '',
      areaCode: '',
      loanAmount: '',
      tenture: ''
    };
  }

  submit() {
    const obj = this.mortgageForm.value;
    console.log(obj);
    this.service.MortgageCheck(obj).subscribe(data => {
      console.log(data);
      this.router.navigate(['/confirm']);
    },

      (err: any) => console.log(err)
    );

  }
  cancle() {
    this.router.navigate(['/home']);
  }
}
