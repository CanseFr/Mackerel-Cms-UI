import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  ngOnInit() {
    document.querySelector("app-header")!.classList.add("display-none")
    document.querySelector("app-footer")!.classList.add("display-none")
  }

  getCookiAdmin() {
    localStorage.setItem('token','admin')
  }
}
