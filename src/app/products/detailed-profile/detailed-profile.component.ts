import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-detailed-profile',
  templateUrl: './detailed-profile.component.html',
  styleUrls: ['./detailed-profile.component.css'],
})
export class DetailedProfileComponent implements OnInit {
  email: any = '';
  detailsArray: any = {};

  constructor(private route: Router, private ps: ServiceService) {}

  ngOnInit(): void {
    if (localStorage.getItem('email')) {
      this.email = localStorage.getItem('email');

      this.ps.detailsViewApi(this.email).subscribe((response: any) => {
        this.detailsArray = response;
      });
    }
  }

  back() {
    this.route.navigateByUrl('products/profile');
  }

  edit() {
    this.route.navigateByUrl('products/edit');
  }
}
