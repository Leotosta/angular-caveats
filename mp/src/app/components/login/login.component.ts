import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  } 


  user = ''
  loginUser(signInForm: NgForm ){
    this.user = signInForm.value.user
    console.log(signInForm.valid)
  }

}
