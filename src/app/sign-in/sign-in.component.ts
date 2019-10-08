import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm;
  constructor(
    private formBuilder: FormBuilder) { 
      this.signInForm = this.formBuilder.group({
      username: '',
      password: ''
    });
    }

  ngOnInit() {
  }
  onSubmit(formValue) {
    console.info("username=" + formValue.username + ", password=" + formValue.password);
    this.signInForm.reset();
  }
}