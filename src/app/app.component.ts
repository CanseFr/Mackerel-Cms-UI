import { Component } from '@angular/core';
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MackerelLikeCms';
  constructor(public route: Router) {
  }


  protected readonly localStorage = localStorage;
}
