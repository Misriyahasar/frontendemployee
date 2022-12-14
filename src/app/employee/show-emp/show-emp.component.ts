import { Component, OnInit } from '@angular/core';
import { AdminempService } from 'src/app/adminemp.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit{
  constructor(private service:AdminempService,private router:Router,private toast:ToastrService) { }
  employeeArray:any=[]
  ngOnInit() {
    this.service.getEmpList().subscribe((res:any)=>{
      console.log(res)
      this.employeeArray= res;
    })
  }
navigate(){
  this.router.navigate(['profile/emp/create'])
}
  navigateToEdit(id:any){
    this.router.navigate(['profile/emp/create/${id}'])
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
