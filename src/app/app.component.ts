import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/finally';
import {Task} from 'protractor/built/taskScheduler';
import {getResponseURL} from '@angular/http/src/http_utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo';
  authenticated = false;
  greeting = {};

  task: Task;

  constructor(private http: HttpClient) {
    this.authenticate();
  }
  /*constructor(private http: HttpClient) {
    this.http.get<Task>('http://localhost:8080/login').subscribe(result => {
      this.task = result;
      console.log(this.task);
    });
  }*/

  authenticate() {
    this.http.get('http://localhost:8080/login').subscribe(response => {
      if (response['true']) {
        this.authenticated = true;
        this.http.get('http://localhost:8080/resource').subscribe(data => this.greeting = data);
      } else {
        this.authenticated = false;
      }
    }, () => { this.authenticated = false; });
  }

  logout() {
    this.http.post('logout', {}).finally(() => {
      this.authenticated = false;
    }).subscribe();
  }
}
