import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  emp:Employee[];
  constructor(private router:Router,private empservice:ServiceService) { }

  ngOnInit(): void {
    this.getEmployees();}

    public getEmployees()
    {
      this.empservice.getEmpList().subscribe(data=>
        {
          this.emp=data;
          console.log(this.emp);
        })
    }
     update(id:number)
     {
       this.router.navigate(["updateemp",id]);
     }

     delete(id:number)
     {
       console.log(id);
       this.empservice.deleteEmp(id).subscribe((data)=>
        {
        console.log(data);
        this.getEmployees();
        });
     }
     view(id:number)
     {
       this.router.navigate(["viewemp",id]);
     }
}
