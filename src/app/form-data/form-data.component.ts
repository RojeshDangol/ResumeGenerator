import { getLocaleFirstDayOfWeek } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder, FormControlName } from '@angular/forms';
import { DataService } from '../data.service';


@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})
export class FormDataComponent implements OnInit {
  
  data: any;
  form!: FormGroup;
  nameForm!: FormGroup;
  addressForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private dataService: DataService) { }

  ngOnInit(): void {

    this.data = this.dataService.get();

    this.form = this.formBuilder.group({})
    this.nameForm = this.formBuilder.group({
                      first: this.formBuilder.control(''),
                     last: this.formBuilder.control('')})
    this.addressForm=  this.formBuilder.group({
                      street: this.formBuilder.control(''),
                      apt: this.formBuilder.control(''),
                      city: this.formBuilder.control(''),
                      state: this.formBuilder.control(''),
                      zip: this.formBuilder.control('')
                      })
                 
  }

  OnSubmit(newData:any){
    console.log(this.nameForm.controls['first'].value);
    //this.data = new DataService;
    //this.data[0].name.first = this.nameForm.controls['first'].value;

  }


}
