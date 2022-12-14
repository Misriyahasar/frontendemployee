import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeavemngmntComponent } from '../profile/leavemngmnt/leavemngmnt.component';
import { EmployeeComponent } from '../employee/employee.component';
import { ProfileComponent } from '../profile/profile.component';
const routes: Routes = [
    {path:"profile",component:ProfileComponent,
        children:[
        {
            path:"emp", component: EmployeeComponent,
        },
        {
            path:"leave",component:LeavemngmntComponent,
        }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
