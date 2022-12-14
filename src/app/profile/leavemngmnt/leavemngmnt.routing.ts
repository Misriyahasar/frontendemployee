import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeavemngmntComponent } from './leavemngmnt.component';
import { ApprovedLeaveComponent } from 'src/app/leavemngmnt/approved-leave/approved-leave.component';
import { PendingLeaveComponent } from 'src/app/leavemngmnt/pending-leave/pending-leave.component';
const routes: Routes = [
    {path:"profile/leave",component:LeavemngmntComponent,
        children:[
       
        {
            path:"approve",component:ApprovedLeaveComponent,
        },
        {
            path:"pending",component:PendingLeaveComponent,
        },
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LeavemngmntRoutingModule { }