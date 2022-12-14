import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
import { EmployeeComponent } from './employee.component';
import { ShowEmpComponent } from './show-emp/show-emp.component';
import { AddEditEmpComponent } from './add-edit-emp/add-edit-emp.component';
import { ViewEmployeeComponent } from '../view-employee/view-employee.component';

const routes: Routes = [
    {path:'profile/emp', component: EmployeeComponent ,
    children: [
      {
        path:'list', component: ShowEmpComponent,
      },
        {
          path:'create', component: AddEditEmpComponent,
        },
        {
            path:'edit', component: AddEditEmpComponent,
        },
        {
          path:'view', component: ViewEmployeeComponent,
      }
    ]
}
    

  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class EmpAppRoutingModule { }