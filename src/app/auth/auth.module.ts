import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SignoutComponent } from './signout/signout.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    SignoutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
