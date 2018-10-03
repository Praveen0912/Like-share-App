import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import {
  AuthService,
  FacebookLoginProvider,
  SocialUser
} from 'angular-6-social-login';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private loggedIn: boolean;
  constructor(private dataService:DataService, private router:Router, private auth: AuthService) { 
    this.auth.authState.subscribe((user) => {
      this.loggedIn = (user != null);
    });
  }

  ngOnInit() {
  }
  
  signOut(){
    localStorage.clear();
    this.auth.signOut(); 
    this.router.navigateByUrl('/login');  
  }

}
