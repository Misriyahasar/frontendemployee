import { Component,OnInit } from '@angular/core';
import { AdminempService } from 'src/app/adminemp.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pending-leave',
  templateUrl: './pending-leave.component.html',
  styleUrls: ['./pending-leave.component.css']
})
export class PendingLeaveComponent {
  constructor(private service:AdminempService,private router:Router,private toast:ToastrService) { }
  employeeArray:any=[]
  ngOnInit() {
    this.service.getLeaveList().subscribe((res:any)=>{
      console.log(res)
      this.employeeArray= res;
    })
  }
navigate(){
  this.router.navigate(['profile/leave/approve'])
}
  navigateToEdit(id:any){
    this.router.navigate(['leave/edit/${id}'])
  }
  delete(id:any){
    this.service.deleteLeave(id).subscribe((res: any)=> {
      if(res.success===1){
        this.toast.success('successfully Rejected','success')
        this.ngOnInit()
      }
    })
  }
 
}
