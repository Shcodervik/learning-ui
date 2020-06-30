import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
/*import { map } from 'rxjs/operators/map';*/
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  credentials: {
    username: '',
    password: ''
  }
  constructor(private fb: FormBuilder,
              private router: Router,
              private http: HttpClient) { }

  ngOnInit() {
    sessionStorage.setItem('token', '');
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  login() {
    const url = 'http://localhost:8080/login';
    const result = this.http.post(url, {
      userName: this.credentials.username,
      password: this.credentials.password
    }).subscribe(isValid => {
      if (isValid) {
        sessionStorage.setItem(
          'token',
          btoa(this.credentials.username + ':' + this.credentials.password)
        );
        this.router.navigate(['/']);
      } else {
        alert('Authentication failed.');
      }
    });
  }
}
