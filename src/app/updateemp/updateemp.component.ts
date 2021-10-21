import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ServiceService } from '../service.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-updateemp',
  templateUrl: './updateemp.component.html',
  styleUrls: ['./updateemp.component.css']
})
export class UpdateempComponent implements OnInit {

  id:number;
  emp:Employee=new Employee();
  constructor(private router:Router,private route:ActivatedRoute, private empservice:ServiceService) { }
   
  ngOnInit(): void
  {
   this.id=this.route.snapshot.params['id'];
   this.empservice.getEmpById(this.id).subscribe((data)=>
   {
     this.emp=data;
   },
   error=>console.log(error)
   );
  }

  submit()
  {
    this.empservice.updateEmp(this.id,this.emp).subscribe((data)=>
    {
      console.log(data);
      this.gotoemplist();
    },
    error=>console.log(error));
  }
  gotoemplist()
  {
    this.router.navigate(['/employees']);
  }
}
