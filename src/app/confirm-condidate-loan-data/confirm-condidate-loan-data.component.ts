import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InterestRatesService } from '../interest-rates.service';
import { Mortgage } from '../models/mortage';

@Component({
  selector: 'bank-confirm-condidate-loan-data',
  templateUrl: './confirm-condidate-loan-data.component.html',
  styleUrls: ['./confirm-condidate-loan-data.component.css']
})
export class ConfirmCondidateLoanDataComponent implements OnInit {
  itemsList: any[];
  header: string[];
  mortgages: Mortgage;
  constructor(private interestRates: InterestRatesService, private httpClient: HttpClient, private router: Router) { }

  ngOnInit() {

    this.header = ['customerType', 'mortgageType', 'assetSize', 'areaCode', 'loanAmount', 'tenture'];
    this.interestRates.getMortgageCheck().subscribe(rates => {

      this.itemsList = rates;
    });
  }
  cancle(id: number) {
    this.interestRates.deleteEmployee(id).subscribe(() => {
      console.log(`Employee with ID = ${id} Deleted`);
      this.router.navigate(['/home']);
    });
  }

  confirmLoan() {
    alert('this order has been confirmed');
  }

}
