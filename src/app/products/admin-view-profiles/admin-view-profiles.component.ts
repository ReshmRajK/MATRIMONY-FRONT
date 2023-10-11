import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-admin-view-profiles',
  templateUrl: './admin-view-profiles.component.html',
  styleUrls: ['./admin-view-profiles.component.css']
})
export class AdminViewProfilesComponent implements OnInit {

  allProfileArray: any = [];

  constructor(private route:Router,private ps:ServiceService){}

  ngOnInit(): void {
    this.ps.allProfileViewApi().subscribe((response: any) => {
      this.allProfileArray = response;
    });
  }





}
