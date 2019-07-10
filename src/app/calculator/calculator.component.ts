import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Address } from '../address';

import { HttpClient } from "@angular/common/http";


@Component({
	selector: 'app-calculator',
	templateUrl: './calculator.component.html',
	styleUrls: ['./calculator.component.scss']
})

export class CalculatorComponent implements OnInit {
	reactiveForm: FormGroup;

	result:any;
	constructor(private fb: FormBuilder, private httpClient: HttpClient) { }

	ngOnInit() {
		this.createCal();
	}

	createCal() {
		this.reactiveForm = this.fb.group({
			records: '',

			secretLairs: this.fb.array([]),

			x1: '',
			x2: '',
			k: ''


		});

	}
	onSubmit() {

		console.log('reactiveForm', this.reactiveForm.value);
		this.httpClient.post('http://localhost:8080/calculator', this.reactiveForm.value).subscribe(data => {
			console.log('POST Request is successful ', data["result"]);
		 	this.result = data["result"];
		},
			error => {

				console.log("Error", error);

			});
	}

	get secretLairs(): FormArray {
		return this.reactiveForm.get('secretLairs') as FormArray;
	};

	addLair() {
		this.secretLairs.push(this.fb.group(new Address()));
	}


}
