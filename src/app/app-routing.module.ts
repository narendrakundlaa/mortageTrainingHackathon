import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ApplyLoanComponent } from './apply-loan/apply-loan.component';
import { CheckEligibilityLoanComponent } from './check-eligibility-loan/check-eligibility-loan.component';
import { ConfirmCondidateLoanDataComponent } from './confirm-condidate-loan-data/confirm-condidate-loan-data.component';
import { HistoryComponent } from './history/history.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
{path: 'home', component: HomePageComponent},
{path: 'applyloan', component: ApplyLoanComponent},
{path: 'checkEligibility', component: CheckEligibilityLoanComponent},
{path: 'confirm', component: ConfirmCondidateLoanDataComponent},
{path: 'history', component: HistoryComponent},
{ path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
