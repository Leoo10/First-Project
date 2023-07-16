import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
 registerData = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  };

  onRegister() {
    this.registerData.firstName = '';
    this.registerData.lastName = '';
    this.registerData.email = '';
    this.registerData.phoneNumber = '';
    this.registerData.password = '';
    this.registerData.confirmPassword = '';
  }
}
