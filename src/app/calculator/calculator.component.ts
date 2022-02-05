import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  public answer: number = 0;
  
  
  constructor() { }

  getSum(num1: string, num2: string ): void{
    this.answer = (+num1) + (+num2);
  }

  getSubstraction(num1: string, num2: string): void{
    this.answer = (+num1) - (+num2);
  }

  getMultiplication(num1: string, num2: string): void{
    this.answer = (+num1) * (+num2);
  }

  getDivision(num1: string, num2: string): void{
    this.answer = (+num1) / (+num2);
  }

  getEmpowerment(num1: string, num2: string): void{
    let res: number = 1;
    let total: number = 0
    for (let i = 0; i < +num2; i++) {
        res = +num1* res;    
    }
    this.answer = res; 
  }

  getAnswer(){
    return this.answer;
  }

  ngOnInit(): void {
  }

}
 