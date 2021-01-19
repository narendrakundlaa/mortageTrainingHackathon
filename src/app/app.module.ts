import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HistoryComponent } from './history/history.component';
import { ApplyLoanComponent } from './apply-loan/apply-loan.component';
import { ConfirmCondidateLoanDataComponent } from './confirm-condidate-loan-data/confirm-condidate-loan-data.component';
import { CheckEligibilityLoanComponent } from './check-eligibility-loan/check-eligibility-loan.component';
import { AppRoutingModule } from './/app-routing.module';
import { TablesComponentComponent } from './shared-components/tables-component/tables-component.component';
import { InterestRatesService } from './interest-rates.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HistoryComponent,
    ApplyLoanComponent,
    ConfirmCondidateLoanDataComponent,
    CheckEligibilityLoanComponent,
    TablesComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [InterestRatesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
