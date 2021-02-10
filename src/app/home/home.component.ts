import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../service/common-service.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	productsDetail: String[];
	myName : string = "Krishna";
	statusBool : boolean = false;
	status1:string = "Online";
	status2:string = "Offline";

	constructor(
		private commonservice: CommonServiceService) { }

	ngOnInit() {
		this.getUserDetails();
	}

	getNameFunc() {
		return "This is interpolation by method way >" + this.myName;
	}

	getUserDetails() {
		this.commonservice.getUserdetails().then(data => {
				this.productsDetail = data;
		}),(err: any) =>{
			console.log(err);
			
		};
	}
}		
