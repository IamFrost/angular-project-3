import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'


@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component implements OnInit {

  title = 'Reactive Forms';

  middleName: FormControl;

  reactiveForm: FormGroup;

  reactiveForm1: FormGroup;

  ngOnInit() {

    this.reactiveForm = new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      email: new FormControl(''),
      address: new FormGroup({
        address: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
      })
    });

  }

}
