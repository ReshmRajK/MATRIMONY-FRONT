import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  pswMatch: boolean = false;
  signUpArray: any = [];

  signUpModelForm = this.fb.group({
    username: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
    contact: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    image: ['', [Validators.required]],
    email: ['', [Validators.required]],
    psw: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
    cpsw: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
  });

  constructor(
    private route: Router,
    private ps: ServiceService,
    private fb: FormBuilder
  ) {}

  signUp() {
    var path = this.signUpModelForm.value;
    var username = path.username;
    var contact = path.contact;
    var image = path.image;
    var email = path.email;
    var psw = path.psw;
    var cpsw = path.cpsw;

    if (this.signUpModelForm.valid) {
      if (psw == cpsw) {
        this.pswMatch = false;

        this.ps.singUpApi(username, contact, image, email, psw).subscribe(
          (Response: any) => {
            this.signUpArray = Response;
            alert(`${Response.username} has registered successfully`);
            this.route.navigateByUrl('');
          },
          (Response) => {
            alert(Response.error);
          }
        );
      } else {
        this.pswMatch = true;
      }
    } else {
      alert('Invalid From');
    }
  }
}
