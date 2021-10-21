import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {

  emp:Employee=new Employee();
  constructor(private empservice:ServiceService,private router:Router) { }

  ngOnInit():void{

  }
  submit()
  {
    this.empservice.createEmp(this.emp).subscribe(data=>
      {
        console.log(data);
        this.gotoemployeelist();
      },
      error=>console.log(error)
      );
  }

  gotoemployeelist()
  {
    this.router.navigate(['/employees']);
  }
}

