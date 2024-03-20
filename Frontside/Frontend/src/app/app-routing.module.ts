import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { AStateOfTranceComponent } from './pages/aStateOfTrance/a-state-of-trance/a-state-of-trance.component';
import { BiographyComponent } from './pages/biography/biography/biography.component';
import { VideosComponent } from './pages/videos/videos/videos.component';
import { ShopComponent } from './pages/shop/shop/shop.component';

const routes: Routes = [
  { path: 'Home',pathMatch: 'full', component: HomeComponent},
  { path: 'AStateOfTrance', component: AStateOfTranceComponent},
  { path: 'Biography', component: BiographyComponent},
  { path: 'Videos', component: VideosComponent},
  { path: 'Shop', component: ShopComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
