import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CostumersComponent } from './costumers.component';
import { LoginComponent } from '../login/login.component'
import { LoginReactiveComponent } from '../login-reactive/login-reactive.component'
import { SignupComponent } from '../signup/signup.component'
import { RegisterComponent } from '../register/register.component'

const routes: Routes = [
  { path: 'learning', component: CostumersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'reactive', component: LoginReactiveComponent },
  { path: 'SignUp', component: SignupComponent },
  { path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CostumersRoutingModule { }
