import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';
import { ProfileRoutingModule } from './nav/profile.routing.component';
import { LeavemngmntComponent } from './profile/leavemngmnt/leavemngmnt.component';
import { AdminempService } from './adminemp.service';
import { ToastrModule } from 'ngx-toastr';
import { EmployeeComponent } from './employee/employee.component';
import { ShowEmpComponent } from './employee/show-emp/show-emp.component';
import { AddEditEmpComponent } from './employee/add-edit-emp/add-edit-emp.component';
import { EmpAppRoutingModule } from './employee/emp-app-routing.';
import { NgChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { UserRoutingModule } from './user/user.routing.component';
import { LeavemngmntRoutingModule } from './profile/leavemngmnt/leavemngmnt.routing';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { PendingLeaveComponent } from './leavemngmnt/pending-leave/pending-leave.component';
import { ApprovedLeaveComponent } from './leavemngmnt/approved-leave/approved-leave.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    UserComponent,
    LeavemngmntComponent,
    EmployeeComponent,
    ShowEmpComponent,
    AddEditEmpComponent,
    NavComponent,
    ApplyLeaveComponent,
    ViewEmployeeComponent,
    PendingLeaveComponent,
    ApprovedLeaveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProfileRoutingModule,
    ToastrModule.forRoot(),
    EmpAppRoutingModule,
    NgChartsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    UserRoutingModule,
    LeavemngmntRoutingModule,
    
  ],
  providers: [AdminempService],
  bootstrap: [AppComponent]
})
export class AppModule { }
