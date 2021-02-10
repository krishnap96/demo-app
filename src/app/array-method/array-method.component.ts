import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-method',
  templateUrl: './array-method.component.html',
  styleUrls: ['./array-method.component.css']
})
export class ArrayMethodComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //Filter
    const studentsAge : Number[] = [17, 16, 18, 19, 21, 17];
    const ableToDrink = studentsAge.filter(age => age > 18);
    console.log(ableToDrink);

  // ableToDrink will be equal to [19, 21]

    //Map

    const numbers = [2, 3, 4, 5];
    const dollars = numbers.map(number => '$' + number);
    console.log(dollars);
    
// dollars will be equal to ['$2', '$3', '$4', '$5']

    const numbersAdd = [5, 10, 15];
    const total = numbersAdd.reduce((accumulator, currentValue) => accumulator + currentValue);
    console.log(total);
    
// total will be equal to 30
  }
  
  
}
