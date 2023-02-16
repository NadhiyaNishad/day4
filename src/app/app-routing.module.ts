import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtformComponent } from './pages/artform/artform.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SinglepageComponent } from './pages/singlepage/singlepage.component';

const routes: Routes = [
  {
    path:'',component:HomepageComponent
  },
  {
    path:'artform',component:ArtformComponent
  },
  {
    path:'contactus',component:ContactusComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'signup',component:SignupComponent
  },
  {
    path:'single',component:SinglepageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
