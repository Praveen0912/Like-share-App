import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from './services/data.service';
import {
  AuthService,
  FacebookLoginProvider,
  SocialUser
} from 'angular-6-social-login';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private loggedIn: boolean;
  constructor(private auth: DataService, private router: Router,private authService:AuthService) { 

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.authService.authState.subscribe((user) => {
      this.loggedIn = (user != null);
    });  
    if(this.loggedIn == true){
      return true;
       
    }
    this.router.navigateByUrl('/login');
    return false;   
  }
}
