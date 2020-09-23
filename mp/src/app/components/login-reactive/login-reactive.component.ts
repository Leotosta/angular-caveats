import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder  } from '@angular/forms'

@Component({
  selector: 'app-login-reactive',
  templateUrl: './login-reactive.component.html',
  styleUrls: ['./login-reactive.component.css']
})
export class LoginReactiveComponent implements OnInit {

  checkoutForm: FormGroup
  constructor(private formBuilder: FormBuilder ) { 
    this.checkoutForm = this.formBuilder.group({
      emailAddr: new FormControl(),
      quantity: new FormControl()

    })
  }

  ngOnInit(): void {
  }


  postData(){
    console.log(this.checkoutForm.value)
  }

}
