import { Component, ViewChild, ViewContainerRef, ComponentRef } from '@angular/core';
import { LoginComponent } from 'src/app/auth/login/login/login.component';
import { RegisterComponent } from 'src/app/auth/register/register/register.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  @ViewChild('modalContainer', { read: ViewContainerRef }) modalContainer!: ViewContainerRef;
  @ViewChild('modalContainer2', { read: ViewContainerRef }) modalContainer2!: ViewContainerRef;
  loginComponentRef?: ComponentRef<LoginComponent>;
  registerComponentRef?: ComponentRef<RegisterComponent>;

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

  isMenuOpen = false;
  isSmallScreen = false;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Tablet])
      .subscribe(result => {
        this.isSmallScreen = result.matches;
      });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }



}
