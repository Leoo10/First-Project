import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { ContactComponent } from './pages/contact/contact/contact.component';

const routes: Routes = [
  { path: '' , pathMatch: 'full', component: HomeComponent},
  { path: 'CONTACT', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
