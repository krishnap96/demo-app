import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {



  constructor() { }

  ngOnInit() {
  }

  addNewProduct(formData : NgForm){
   console.log(formData.value);
   
 


  }
}
