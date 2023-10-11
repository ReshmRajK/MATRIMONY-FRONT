import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registrationForm = this.fb.group({
    r_username: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
    r_dob: ['', [Validators.required]],
    r_gender: ['', [Validators.required]],
    r_cast: ['', [Validators.required]],
    r_father: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
    r_mother: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
    r_address: ['', [Validators.required]],
    r_qualification: ['', [Validators.required]],
    r_occupation: ['', [Validators.required]],
    r_salary: ['', [Validators.required]],
    r_contact: ['', [Validators.required]],
    r_email: ['', [Validators.required]],
    r_hobbies: ['', [Validators.required]],
    r_image: ['', [Validators.required]],
    r_description: ['', [Validators.required]],

    ques_1: [''],
    ques_2: [''],
    ques_3: [''],
    ques_4: [''],
    ques_5: [''],
    ques_6: [''],
    ques_7: [''],
    ques_8: [''],
    ques_9: [''],
    ques_10: [''],
  });
  email: any = '';

  constructor(
    private route: Router,
    private fb: FormBuilder,
    private ps: ServiceService
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('email')) {
      this.email = localStorage.getItem('email');
      console.log(this.email);
    }
  }

  viewProfile() {
    var path = this.registrationForm.value;
    var email = this.email;
    var r_username = path.r_username;
    var r_dob = path.r_dob;
    var r_gender = path.r_gender;
    var r_cast = path.r_cast;
    var r_father = path.r_father;
    var r_mother = path.r_mother;
    var r_address = path.r_address;
    var r_qualification = path.r_qualification;
    var r_occupation = path.r_occupation;
    var r_salary = path.r_salary;
    var r_contact = path.r_contact;
    var r_email = path.r_email;
    var r_hobbies = path.r_hobbies;
    var r_image = path.r_image;
    var r_description = path.r_description;

    var ques_1 = path.ques_1;
    var ques_2 = path.ques_2;
    var ques_3 = path.ques_3;
    var ques_4 = path.ques_4;
    var ques_5 = path.ques_5;
    var ques_6 = path.ques_6;
    var ques_7 = path.ques_7;
    var ques_8 = path.ques_8;
    var ques_9 = path.ques_9;
    var ques_10 = path.ques_10;

    if (this.registrationForm.valid) {
      this.ps
        .registerApi(
          email,
          r_username,
          r_dob,
          r_gender,
          r_cast,
          r_father,
          r_mother,
          r_address,
          r_qualification,
          r_occupation,
          r_salary,
          r_contact,
          r_email,
          r_hobbies,
          r_image,
          r_description,
          ques_1,
          ques_2,
          ques_3,
          ques_4,
          ques_5,
          ques_6,
          ques_7,
          ques_8,
          ques_9,
          ques_10
        )
        .subscribe((Response: any) => {
          alert(`${Response.r_username} has registered successfully`);

          this.route.navigateByUrl('products/detailedProfile');
        });
    } else {
      alert('Invalid form');
    }
  }
}
