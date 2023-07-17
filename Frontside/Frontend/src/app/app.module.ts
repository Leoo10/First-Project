import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { HomeComponent } from './pages/home.component';
import { HeaderComponent } from './pages/header/header/header.component';
import { SectionComponent } from './pages/section/section/section.component';
import { RouterModule, Routes} from '@angular/router';
import { FooterComponent } from './pages/footer/footer/footer.component';
import { LoginComponent } from './auth/login/login/login.component';
import { RegisterComponent } from './auth/register/register/register.component';
import { FormsModule} from '@angular/forms';
import { AStateOfTranceComponent } from './pages/aStateOfTrance/a-state-of-trance/a-state-of-trance.component';
import { BiographyComponent } from './pages/biography/biography/biography.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    HeaderComponent,
    SectionComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    AStateOfTranceComponent,
    BiographyComponent,
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
