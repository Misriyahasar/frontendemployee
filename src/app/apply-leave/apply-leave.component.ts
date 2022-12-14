import { Component } from '@angular/core';
import { AdminempService } from 'src/app/adminemp.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent {
  constructor(private service:AdminempService,private toast:ToastrService,private router:Router,private route:ActivatedRoute) { }
  data={
    id :'',
    applyDate:'',
    natureOfLeave:'',
    firstDay:'',
    lastDay:'',
    numberOfDays:''

  }
  id:any
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('id is',this.id)
    if(this.id){
    this.service.getLeaveById(this.id).subscribe((res:any)=>{
      console.log(res)
      this.data= res
    })
  }
  }

  onSubmit(){
    if(this.id){
      this.service.updateLeave(this.id,this.data).subscribe((res:any)=>{
       
          this.router.navigate(['user'])
        
      })

    }else{
    this.service.addLeave(this.data).subscribe((res:any) =>{
      console.log(res)
      this.toast.success('successfully added','success')
    
        
          this.router.navigate(['user'])
        
      
    })
  }
}

}
