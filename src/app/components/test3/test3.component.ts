import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { UsersecModel } from '../../models/usersec/usersec-model';
import { LoginsModel } from '../../models/logins/logins-model';
import { UserAccessOneService } from "../../services/user-access-one/user-access-one.service";
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component implements OnInit {

  currentSelectedUser: string = null;

  logins: LoginsModel[] = null;
  usersec: UsersecModel[] = null;

  menuMapFirstColumn: string[] = [];
  menuMapSecondColumn: string[] = [];

  menuMap = new Map<string, Set<string>>();
  userAccessMap = new Map<string, Set<string>>();

  dynamicForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
    private userAccessOneService: UserAccessOneService,
    private loginService: LoginService) {

  }

  ngOnInit() {
    this.setAllLogin();
    this.dynamicForm = this.formBuilder.group({
      numberOfTickets: ['', Validators.required],
      tickets: new FormArray([])
    });
  }

  // convenience getters for easy access to form fields
  get f() { return this.dynamicForm.controls; }
  get t() { return this.f.tickets as FormArray; }

  onChangeTickets(e) {
    const numberOfTickets = e.target.value || 0;
    if (this.t.length < numberOfTickets) {
      for (let i = this.t.length; i < numberOfTickets; i++) {
        this.t.push(this.formBuilder.group({
          name: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]]
        }));
      }
    } else {
      for (let i = this.t.length; i >= numberOfTickets; i--) {
        this.t.removeAt(i);
      }
    }
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.dynamicForm.invalid) {
      return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.dynamicForm.value, null, 4));
  }

  setAllLogin() {
    this.loginService.getAllLogin().subscribe(data => {
      if (data) {
        this.logins = data;
      }
      else {
        this.logins = null;
      }
    })
  }

}
