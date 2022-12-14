import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyLeaveComponent } from '../apply-leave/apply-leave.component';
import { UserComponent } from '../user/user.component';
const routes: Routes = [
    {path:"user",component:UserComponent,
        children:[
       
        {
            path:"applyleave",component:ApplyLeaveComponent,
        }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
