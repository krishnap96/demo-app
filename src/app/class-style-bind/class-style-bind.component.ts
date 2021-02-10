import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-style-bind',
  templateUrl: './class-style-bind.component.html',
  styleUrls: ['./class-style-bind.component.css']
})
export class ClassStyleBindComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  myProp : boolean = false;
  MyMargin : string = "15px";
  isActive : boolean = false;
  ngMyCass = {
    class1  : true, //false if we dont require
    class2  : false,
    class3  : true
  }
}
