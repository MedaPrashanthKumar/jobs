import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { JobsComponent } from './jobs/jobs.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:'navbar',component:NavbarComponent},
  {path:'home',component:HomeComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'jobs',component:JobsComponent},
  {path:'carousel',component:CarouselComponent},
  {path:'footer',component:FooterComponent},
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"**",component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
