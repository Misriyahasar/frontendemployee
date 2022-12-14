import { Component, OnInit } from '@angular/core';
import { AdminempService } from 'src/app/adminemp.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit{
  constructor(private service:AdminempService,private router:Router,private toast:ToastrService) { }
  employeeArray:any=[]
  ngOnInit() {
    this.service.getEmpList().subscribe((res:any)=>{
      console.log(res)
      this.employeeArray= res;
    })
  }

}
