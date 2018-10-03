import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import {
  AuthService,
  FacebookLoginProvider,
  SocialUser
} from 'angular-6-social-login';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private user: SocialUser;
  private loggedIn: boolean;
  constructor(private dataService:DataService, private router:Router, private auth: AuthService) { 
    this.auth.authState.subscribe((user) => {
      this.loggedIn = (user != null);
      if(this.loggedIn == true){
        this.user =user;
      }
      if(user == null){
        router.navigateByUrl('/login');
      }
    });
  }
  
  ngOnInit() {
  }
  

}
