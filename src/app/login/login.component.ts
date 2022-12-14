import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  myform!: FormGroup;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.myform= new FormGroup({
      email: new FormControl(''), 
      password: new FormControl(''),
    
    });
  }
  get f(){
    return this.myform.controls;
  }
 
  onSubmit(){
    this.authService.login(this.myform.value.email, this.myform.value.password).pipe(first()).subscribe(
      data => {
        
       if (data.admin == true)
        {
          this.router.navigate(['profile'])
          console.log(data);
          alert('Login Success')
        }
       else{

      
        this.router.navigate(['user'])
        console.log(data);
        alert('Login Success')
      }
        
    }
    )
  }
  }


