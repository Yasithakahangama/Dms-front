import { Component, OnInit } from '@angular/core'
import { from } from 'rxjs'
import { AuthenticationService , TokenPayLoad } from '../../Services/authentication.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  credentials: TokenPayLoad = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: 'client'
  }

  constructor(public auth: AuthenticationService , private router: Router) { }

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

  ngOnInit(): void {
  }

}
