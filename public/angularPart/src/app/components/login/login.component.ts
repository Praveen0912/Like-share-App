import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import {
  AuthService,
  FacebookLoginProvider,
  SocialUser
} from 'angular-6-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private loggedIn: boolean;
  constructor(private dataService:DataService, private router:Router, private auth: AuthService) {
    this.auth.authState.subscribe((user) => {
      this.loggedIn = (user != null);
      if(this.loggedIn == true){
        this.router.navigateByUrl('/home');
      }
    });
   }

  ngOnInit() {}  

  public socialSignIn() {
    let socialPlatformProvider;
    socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;  
    this.auth.signIn(socialPlatformProvider);
  }

}
