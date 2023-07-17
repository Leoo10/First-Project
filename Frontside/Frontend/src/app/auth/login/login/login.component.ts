import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginData = {
    email: '',
    password: ''
  };

  showForgotPasswordWindow = false;

  onLogin() {
    // Perform login logic here
    // Access the entered email and password using this.loginData.email and this.loginData.password
    // You can make an API call or implement your login logic accordingly
  }
  onForgotPassword() {
    this.showForgotPasswordWindow = !this.showForgotPasswordWindow;
  }
}
