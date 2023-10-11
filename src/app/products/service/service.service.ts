import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}

  singUpApi(username: any, contact: any, image: any, email: any, psw: any) {
    const bodyData = {
      username,
      contact,
      image,
      email,
      psw,
    };
    return this.http.post('http://localhost:3000/express/signup', bodyData);
  }

  loginApi(email: any, psw: any) {
    const bodyData = {
      email,
      psw,
    };
    return this.http.post('http://localhost:3000/express/login', bodyData);
  }

  registerApi(
    email: any,
    r_username: any,
    r_dob: any,
    r_gender: any,
    r_cast: any,
    r_father: any,
    r_mother: any,
    r_address: any,
    r_qualification: any,
    r_occupation: any,
    r_salary: any,
    r_contact: any,
    r_email: any,
    r_hobbies: any,
    r_image: any,
    r_description: any,
    ques_1: any,
    ques_2: any,
    ques_3: any,
    ques_4: any,
    ques_5: any,
    ques_6: any,
    ques_7: any,
    ques_8: any,
    ques_9: any,
    ques_10: any
  ) {
    const bodyData = {
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
      ques_10,
    };
    return this.http.post(
      'http://localhost:3000/express/registration',
      bodyData
    );
  }

  profileViewApi(email: any) {
    return this.http.get('http://localhost:3000/express/profileView/' + email);
  }

  detailsViewApi(email: any) {
    return this.http.get('http://localhost:3000/express/detailsView/' + email);
  }

  allProfileViewApi() {
    return this.http.get('http://localhost:3000/express/allProfileView');
  }

  editSingle(email: any) {
    return this.http.get('http://localhost:3000/express/editProfile/' + email);
  }

  editApi(email: any, pData: any) {
    return this.http.put(
      'http://localhost:3000/express/editProfileView/' + email,
      pData
    );
  }

  singleProfileApi(r_email: any) {
    return this.http.get(
      'http://localhost:3000/express/singleProfileView/' + r_email
    );
  }

  adminLoginApi(adminName: any, psw: any) {
    const bodyData = {
      adminName,
      psw,
    };
    return this.http.post('http://localhost:3000/express/adminLogin', bodyData);
  }

  deleteProfileApi(r_email:any){
    return this.http.get(
      'http://localhost:3000/express/deleteProfile/'+r_email
    );

  }
}
