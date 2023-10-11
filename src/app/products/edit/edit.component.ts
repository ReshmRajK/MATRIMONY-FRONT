import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  email: any = '';
  pData: any 

  constructor(private route: Router, private ps: ServiceService) {}

  ngOnInit(): void {
    if (localStorage.getItem('email')) {
      this.email = localStorage.getItem('email');

      this.ps.editSingle(this.email).subscribe((result: any) => {
        this.pData = result;
        console.log(this.pData);
      });
    }
  }

  editProfile() {
  
    this.ps.editApi(this.email, this.pData).subscribe((result: any) => {
      console.log(result);
      
        alert('Profile updated');
        this.route.navigateByUrl('products/detailedProfile');
      
    });
  }


}
