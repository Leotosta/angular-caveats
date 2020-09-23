import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup
  constructor(
    private formBuilder: FormBuilder
  ) { 
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required,  Validators.email, Validators.minLength(5) ] ],
      username: ['', [Validators.required ]]
      
    })
  }

  ngOnInit(): void {
    // this.signupForm.setValue({
    //   email: 'leo@test.com',
    //   username: 'leo'
    // }) It do need to have all attribute

    // this.signupForm.patchValue({
    //   email: 'leo@test.com '
    // }) it dosent need to have all atribbuite

    this.signupForm.get('email').valueChanges.subscribe(data => {
      console.log(data)
    }) 
    // it will change just one value

    // this.signupForm.get('username').valueChanges.subscribe(data => {
    //   console.log(data)
    // })
    // }) 

    // this.signupForm.valueChanges.subscribe(data => {
    //   console.log(data)
    // })  it will change all value

    this.signupForm.get('email').statusChanges.subscribe(data => {
      console.log(data)
    })

    //  this.signupForm.statusChanges.subscribe(item => {
    //    console.log(item)
    //  })

  }

  resetForm(){
    this.signupForm.reset()
  }

  postData(){
    console.log(this.signupForm)
    this.resetForm()

  }

}
