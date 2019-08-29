import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DepositAmountComponent} from './deposit-amount/deposit-amount.component';
import {TransferAmountComponent} from './transfer-amount/transfer-amount.component';
import {WithdrawAmountComponent} from './withdraw-amount/withdraw-amount.component';
import {BalanceEnquiryComponent} from './balance-enquiry/balance-enquiry.component';
const routes: Routes = [
  {path : "/" , pathMatch : "full", redirectTo : '/deposit'},
  {path : "/deposit", component : DepositAmountComponent},
  {path : "/withdraw", component : WithdrawAmountComponent},
  {path : "/transfer", component : TransferAmountComponent},
  {path : "/balanceEnquiry", component : BalanceEnquiryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
