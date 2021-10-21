import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddempComponent } from './addemp/addemp.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateempComponent } from './updateemp/updateemp.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
const routes: Routes = [
  {path:"employees",component:EmployeeListComponent},
  {path:'',redirectTo:'employees', pathMatch:'full'},
  {path:"addemp",component:AddempComponent},
  {path:'updateemp/:id',component:UpdateempComponent},
  {path:'viewemp/:id',component:ViewdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
