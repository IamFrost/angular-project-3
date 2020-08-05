import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  name: string;
  checkboxGroup: FormGroup;

  constructor(_fb: FormBuilder) {
    this.name = 'Angular2';
    let checkboxArray = new FormArray([
      new FormControl(true),
      new FormControl(false),
      new FormControl(true)]);
    this.checkboxGroup = _fb.group({
      myValues: checkboxArray
    });
    console.log(this.checkboxGroup);
  }
  ngOnInit() {

  }
}
