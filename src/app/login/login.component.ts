  import { Component } from '@angular/core';
  import { Router } from '@angular/router';
  @Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
  })
  
  export class LoginComponent {
    showLoginForm: boolean = true;
  firstName!: string;
  lastName!: string;
  email!: string;
  password!: string;

  toggleForm() {
    this.showLoginForm = !this.showLoginForm;
    // Reset form fields when toggling between forms
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.password = '';
  }
  constructor (private router: Router){}

  login() {
    this.router.navigate(["/products"])
   }

  //login() {
    // Logic to handle login
    //console.log('Logging in...');
  //}

  signUp() {
    // Logic to handle sign up
    console.log('Signing up...');
  }
  }
