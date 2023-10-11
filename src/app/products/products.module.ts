import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { DetailedProfileComponent } from './detailed-profile/detailed-profile.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { SingleViewProfileComponent } from './single-view-profile/single-view-profile.component';
import { AdminViewProfilesComponent } from './admin-view-profiles/admin-view-profiles.component';

@NgModule({
  declarations: [
    ProductsComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    RegisterComponent,
    DetailedProfileComponent,
    EditComponent,
    SingleViewProfileComponent,
    AdminViewProfilesComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class ProductsModule {}
