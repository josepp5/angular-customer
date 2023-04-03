import { Component } from '@angular/core';
import { FastapiService } from '../services/fastapi.service';
import { AuthService } from '../services/authService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {

  username_field:any
  password_field:any
  token:any
  tokenType:any

  constructor(private dataService: FastapiService,private authService: AuthService, private router: Router){}

  login(){
    this.dataService.loginUser(this.username_field,this.password_field).subscribe(
      (response:any) => {
        this.token =  response['access_token'];
        this.tokenType =  response['token_type'];
        console.log(this.token);
        this.authService.setToken(this.token);

        this.router.navigate(['customer-list']);
    },
      error => console.log("Error: " + error),
    );
  }
}
