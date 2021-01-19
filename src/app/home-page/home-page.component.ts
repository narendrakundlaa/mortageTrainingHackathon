import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InterestRatesService } from '../interest-rates.service';

@Component({
  selector: 'bank-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  bankHeadders: string[];
  itemsList: string[];
  // tslint:disable-next-line:max-line-length
  imgUrl: string;

  constructor(private interestRates: InterestRatesService, private router: Router) { }
  ngOnInit() {
    this.imgUrl = 'assets/mortgageimg.png';
    this.bankHeadders = ['lender', 'InterestRate', 'loanAmount', 'tenture'];
    this.interestRates.getEmployees().subscribe(rates => {
      this.itemsList = rates;
    });
  }
  checkEligible() {
    this.router.navigate(['/checkEligibility']);
  }

}
