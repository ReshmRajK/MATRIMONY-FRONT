import { Component,OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-view-profile',
  templateUrl: './single-view-profile.component.html',
  styleUrls: ['./single-view-profile.component.css']
})
export class SingleViewProfileComponent implements OnInit {
  r_email:any=''
  pData:any

  deleteButtonShow:boolean=false

  constructor(private ps:ServiceService,private route:Router,private ar:ActivatedRoute){}

  ngOnInit(): void {
    if(localStorage.getItem("admin")){
      this.deleteButtonShow=true
    }
    
    this.ar.params.subscribe((response:any)=>{
      this.r_email=response.email
    })
    console.log(this.r_email);
    
    
      this.ps.singleProfileApi(this.r_email).subscribe((Response:any)=>{
        this.pData=Response
      })
      
  }

  delete(){
    this.ps.deleteProfileApi(this.r_email).subscribe((Response:any)=>{
      alert(Response)

      this.route.navigateByUrl('products/home')

    },
    Response=>{
      alert(Response.error)
    }
    )
  
  }

}
