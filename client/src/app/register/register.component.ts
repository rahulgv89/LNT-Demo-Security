import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [LoginService]
})
export class RegisterComponent implements OnInit {
  user: User;

  constructor(private loginService: LoginService, private router: Router) {
    this.user = new User();
  }

  addUser() {
    if (this.user.username && this.user.password && this.user.name) {
      this.loginService.addUser(this.user).subscribe(result => {
        console.log('result is ', result);
        this.router.navigate(['/home']);
      }, error => {
        console.log('error is ', error);
      });
    } else {
      alert('Enter Correctly');
    }
  }

  ngOnInit() {
  }

}
