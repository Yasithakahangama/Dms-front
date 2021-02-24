import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs'
import { AuthenticationService , TokenPayLoad } from '../../Services/authentication.service'
import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr'; 

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {

  credentials: TokenPayLoad = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: 'admin'
  }

  constructor(public auth: AuthenticationService ,private toastr: ToastrService, private router: Router) { }

  register() {
    this.auth.register(this.credentials).subscribe(
      () => {
        this.router.navigateByUrl('/profile')
      },
      err => {
        console.error(err)
      }
    )
  }

  logout(){
    localStorage.removeItem('userToken'); 
    this.router.navigateByUrl('');
    this.toastr.info("Good Bye ","",{
      timeOut: 2000,
      progressBar: true,
      progressAnimation: 'increasing'
      
  
    });
  }

  ngOnInit(): void {
  }

}
