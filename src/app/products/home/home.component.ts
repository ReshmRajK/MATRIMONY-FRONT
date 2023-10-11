import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  allProfileArray: any = [];

  constructor(private ps: ServiceService, private route: Router) {}

  ngOnInit(): void {
    if (!localStorage.getItem('email') && !localStorage.getItem('admin')) {
      alert('please login first');
      this.route.navigateByUrl('');
    }

    this.ps.allProfileViewApi().subscribe((response: any) => {
      this.allProfileArray = response;
    });
  }


  logOut() {
    localStorage.clear()
    this.route.navigateByUrl('');
  }
}
