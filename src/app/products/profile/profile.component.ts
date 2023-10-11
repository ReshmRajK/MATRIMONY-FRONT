import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  data: any = '';
  profileData: any = {};

  constructor(private route: Router, private ps: ServiceService) {}
  ngOnInit(): void {
    if (localStorage.getItem('email')) {
      this.data = localStorage.getItem('email');

      this.ps.profileViewApi(this.data).subscribe((response: any) => {
        this.profileData = response;
      });

     
    }
  }

  backToHome() {
    this.route.navigateByUrl('products/home');
  }

  registration() {
    this.route.navigateByUrl('products/register');
  }
  viewDetails() {
    this.route.navigateByUrl('products/detailedProfile');
  }
}
