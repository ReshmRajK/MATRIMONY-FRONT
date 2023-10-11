import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ProductsComponent } from './products.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { DetailedProfileComponent } from './detailed-profile/detailed-profile.component';
import { EditComponent } from './edit/edit.component';
import { SingleViewProfileComponent } from './single-view-profile/single-view-profile.component';
import { AdminViewProfilesComponent } from './admin-view-profiles/admin-view-profiles.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'detailedProfile', component: DetailedProfileComponent },
  { path: 'edit', component: EditComponent },
  {path:'singleView/:email',component:SingleViewProfileComponent},
  {path:'adminViewProfile',component:AdminViewProfilesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
