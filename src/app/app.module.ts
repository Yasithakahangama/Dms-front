import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';
 
import { Component, NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component'
import { from } from 'rxjs'
import { AuthenticationService } from './Services/authentication.service'
import { AuthGuardService } from './Services/auth-guard.service'
import { HomeComponent } from './Components/home/home.component'
import { LoginComponent } from './Components/login/login.component'
import { RegisterComponent } from './Components/register/register.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AddAdminComponent } from './Components/add-admin/add-admin.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }, 
  { path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService]
  },
  { path: 'dashboard',
  component: DashboardComponent
},
{ path: 'addAdmin', component: AddAdminComponent  }
]

@NgModule({
  declarations: [
    AppComponent,
    
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    DashboardComponent,
    AddAdminComponent   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    ToastrModule.forRoot() 
  ],
  providers: [AuthenticationService , AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
