import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { from } from 'rxjs'
import { AuthenticationService , TokenPayLoad } from '../../Services/authentication.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  credentials: TokenPayLoad = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: ''
  }

  constructor(public auth: AuthenticationService , private router: Router) { }

  login() {
    this.auth.login(this.credentials).subscribe(
      () => {
        this.router.navigateByUrl('/dashboard')
      },
      err => {
        console.error(err)
      }
    )
  }

  ngOnInit(): void {
  }

}
