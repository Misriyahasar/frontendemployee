import { Component,OnInit,Input } from '@angular/core';
import { AdminempService } from 'src/app/adminemp.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent {

  constructor(private service:AdminempService,private toast:ToastrService,private router:Router,private route:ActivatedRoute) { }
  data={
    id :'',
    full_name : '' ,
    username : '',
    password: '',
    email : '',
    contact_number: '',
    emergency_contact_number : '',
    address : '',
    position:'',
    dob:'',
    marital_status:'',
    blood_group:'',
    job_title:'',
    work_location:'',
    date_of_joining:'',
    reporting_to:'',
    linkedin_link : '',
    profile_pic: ''

  }
  id:any
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('id is',this.id)
    if(this.id){
    this.service.getEmployeeById(this.id).subscribe((res:any)=>{
      console.log(res)
      this.data= res
    })
  }
  }

  onSubmit(){
    if(this.id){
      this.service.updateEmployee(this.id,this.data).subscribe((res:any)=>{
       
          this.router.navigate(['profile/emp/view'])
        
      })

    }else{
    this.service.addEmployee(this.data).subscribe((res:any) =>{
      console.log(res)
      this.toast.success('successfully added','success')
    
        
          this.router.navigate(['profile/emp/view'])
        
      
    })
  }
}


}
