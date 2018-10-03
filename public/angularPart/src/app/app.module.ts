import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {
  SocialLoginModule,
  AuthServiceConfig,
  FacebookLoginProvider
} from "angular-6-social-login";
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './auth.guard';
import { NavbarComponent } from './components/navbar/navbar.component';
const appRoutes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent, canActivate:[AuthGuard]}
];
// Configs 
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("1978720785523666")
        }        
      ]
  );
  return config;
}
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    SocialLoginModule,
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    {  
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs,
      } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
