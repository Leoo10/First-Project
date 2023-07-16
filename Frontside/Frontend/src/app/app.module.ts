import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { HomeComponent } from './pages/home.component';
import { HeaderComponent } from './pages/header/header/header.component';
import { SectionComponent } from './pages/section/section/section.component';
import { RouterModule, Routes} from '@angular/router';
import { ContactComponent } from './pages/contact/contact/contact.component';
import { FooterComponent } from './pages/footer/footer/footer.component';
import { LoginComponent } from './auth/login/login/login.component';
import { RegisterComponent } from './auth/register/register/register.component';
import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    HeaderComponent,
    SectionComponent,
    ContactComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
