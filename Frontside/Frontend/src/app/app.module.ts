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
import { VideosComponent } from './pages/videos/videos/videos.component';
import { ShopComponent } from './pages/shop/shop/shop.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MenuBurgerComponent } from './shared/menu/menu-burger/menu-burger.component';



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
    VideosComponent,
    ShopComponent,
    MenuBurgerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([]),
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
