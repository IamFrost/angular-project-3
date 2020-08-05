import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {


  reactiveForm: FormGroup;

  buildReactiveForm() {
    const reactiveForm = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl(''),
      email: new FormControl(''),
      address: new FormGroup({
        address: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
      })
    })
  }

  setValue() {

    this.reactiveForm.setValue({
      firstname: "Sachin",
      lastname: "Tendulakr",
      email: "sachin@gmail.com",
      address: {
        address: "19-A, Perry Cross Road, Bandra (West)",
        city: "Mumbai",
        state: "Maharatsra",
      }
    })
  }

  setAddress() {
    this.reactiveForm.get("address").setValue({
      address: "19-A, Perry Cross Road, Bandra (West)",
      city: "Mumbai",
      state: "Maharatsra",
    })
  }

  onSubmit() {
    console.log(this.reactiveForm.value);
  }

  constructor() {

  }
  ngOnInit() {

  }



}
