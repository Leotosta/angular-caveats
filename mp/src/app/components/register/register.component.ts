import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  register: FormGroup
  constructor(
    private formBuilder: FormBuilder
  ) { 
    this.register = this.formBuilder.group({
      name: new FormControl('leonardo'),
      username: new FormControl(),
      description: new FormControl(),
      terms: ['', Validators.requiredTrue],

      items: this.formBuilder.array([
        this.formBuilder.group({
          itemId: new FormControl('leozao'),
          itemName: ['2'],
          itemDesc: ['3']
        }),
        this.formBuilder.group({
          x: new FormControl('leonardo'),
          itemName: ['4'],
          itemDesc: ['5']
        })
      ] )
    })
  }


  ngOnInit(): void {
    console.log(this.register)
  }



}
