import { Component } from '@angular/core';
import {PublicService} from './services/public.service';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmployeeManagement';
  msg: any;
  constructor(private pService: PublicService, private authService: AuthService, private router:Router){

  }
  ngOnInit(): void {
    this.showMessage();
  }
  showMessage(){
    this.pService.getMessage().subscribe(data=>{
      this.msg = data,
      console.log(this.msg);
    });

  }
  logout(){
    this.authService.logout();
    this.router.navigate([''])
  }
}
