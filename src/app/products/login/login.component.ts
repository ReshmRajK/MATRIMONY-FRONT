import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginModelForm = this.fb.group({
    email: ['', [Validators.required]],
    psw: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
    loginSelector: ['', [Validators.required]],
  });
  constructor(
    private route: Router,
    private fb: FormBuilder,
    private ps: ServiceService
  ) {}

  login() {
    if (this.loginModelForm.valid) {
      var path = this.loginModelForm.value;
      var email = path.email;
      var psw = path.psw;
      var loginSelector = path.loginSelector;

      if (loginSelector == 'user') {

        this.ps.loginApi(email, psw).subscribe(
          (Response: any) => {
            alert(`${Response.username} has login successfully`);

            localStorage.setItem('email', Response.email);
            this.route.navigateByUrl('products/home');
          },
          (Response) => {
            alert(Response.error);
          }
        );

      }

      if (loginSelector == 'admin') {
        var adminName=email
        var psw=psw

        this.ps.adminLoginApi(adminName, psw).subscribe(
          (Response: any) => {
            alert('Admin Login Successfully');
            localStorage.setItem("admin","admin")

            this.route.navigateByUrl('products/home')
          },
          (Response) => {
            alert(Response.error);
          }
        );

      }
    }
     else {
      alert('Invalid form');
    }
  }
}
