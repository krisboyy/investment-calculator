import { CurrencyPipe } from '@angular/common';
import { Component, inject, Input, input } from '@angular/core';
import { InvestmentService } from '../investment.service';
@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  private investmentService = inject(InvestmentService)

  get results(){
    console.log(this.investmentService.resultsData())
    return this.investmentService.resultsData;
  }
  
  // results = input<{
  //   year: number,
  //   interest: number,
  //   valueEndOfYear: number,
  //   annualInvestment: number,
  //   totalInterest: number,
  //   totalAmountInvested: number,
  // }[]>();
  
  // @Input({required: true}) results?: {
  //   year: number,
  //   interest: number,
  //   valueEndOfYear: number,
  //   annualInvestment: number,
  //   totalInterest: number,
  //   totalAmountInvested: number,
  // }[]
}
