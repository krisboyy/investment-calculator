import { Component, EventEmitter, inject, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment-input.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  initialInvestment = signal('0');
  annualInvestment = signal('0');
  expectedReturn = signal('5');
  duration = signal('10');

  // initialInvestment: string = '0';
  // annualInvestment: string = '0';
  // expectedReturn: string = '5';
  // duration: string = '10';
  // @Output() calculate = new EventEmitter<InvestmentInput>();
  private investmentService = inject(InvestmentService);

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.initialInvestment(),
      duration: +this.duration(),
      annualInvestment: +this.annualInvestment(),
      expectedReturn: +this.expectedReturn(),
    });

    // this.calculate.emit({
    //   initialInvestment: +this.initialInvestment(),
    //   duration: +this.duration(),
    //   annualInvestment: +this.annualInvestment(),
    //   expectedReturn: +this.expectedReturn(),
    // });
    
    // this.calculate.emit({
    //   initialInvestment: +this.initialInvestment,
    //   duration: +this.duration,
    //   annualInvestment: +this.annualInvestment,
    //   expectedReturn: +this.expectedReturn,
    // });
  }
}
