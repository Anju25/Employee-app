import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css']
})
export class ViewdetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute,private empservice:ServiceService,private router:Router) { }

  id:number;
  emp:Employee=new Employee();
  ngOnInit(): void {
   this.id=this.route.snapshot.params['id'];
   this.empservice.getEmpById(this.id).subscribe((data)=>
   {
     this.emp=data;
     console.log(data);
   },
   error=>
   console.log(error));

  }

}
