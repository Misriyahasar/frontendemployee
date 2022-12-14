import { Component, OnInit } from '@angular/core';
import { AdminempService } from 'src/app/adminemp.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(private service:AdminempService,private router:Router,private toast:ToastrService) { }
  employeeArray:any=[]
  ngOnInit() {
    this.service.getLeaveList().subscribe((res:any)=>{
      console.log(res)
      this.employeeArray= res;
    })
  }
navigate(){
  this.router.navigate(['leave'])
}
  navigateToEdit(id:any){
    this.router.navigate(['leave/edit/${id}'])
  }
  delete(id:any){
    this.service.deleteEmployee(id).subscribe((res: any)=> {
      if(res.success===1){
        this.toast.success('successfully deleted','success')
        this.ngOnInit()
      }
    })
  }
 

}



