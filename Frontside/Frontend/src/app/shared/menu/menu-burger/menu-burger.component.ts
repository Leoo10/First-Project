import { Component, ViewChild, ViewContainerRef, ComponentRef } from '@angular/core';
import { LoginComponent } from 'src/app/auth/login/login/login.component';
import { RegisterComponent } from 'src/app/auth/register/register/register.component';

@Component({
  selector: 'app-menu-burger',
  templateUrl: './menu-burger.component.html',
  styleUrls: ['./menu-burger.component.scss']
})
export class MenuBurgerComponent {
  isOpen: boolean = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
}

  @ViewChild('modalContainer', { read: ViewContainerRef }) modalContainer!: ViewContainerRef;
  @ViewChild('modalContainer2', { read: ViewContainerRef }) modalContainer2!: ViewContainerRef;
  loginComponentRef?: ComponentRef<LoginComponent>;
  registerComponentRef?: ComponentRef<RegisterComponent>;

  constructor() {}

  openLoginModal() {
    if (this.loginComponentRef) {
      this.loginComponentRef.destroy();
      this.loginComponentRef = undefined;
    } else {
      this.loginComponentRef = this.modalContainer.createComponent(LoginComponent);
    }
  }

  openRegisterModal() {
    if (this.registerComponentRef) {
      this.registerComponentRef.destroy();
      this.registerComponentRef = undefined;
    } else {
      this.registerComponentRef = this.modalContainer2.createComponent(RegisterComponent);
    }
  }

  logo_item: string = 'assets/img/armin-logo.jpg';
}
