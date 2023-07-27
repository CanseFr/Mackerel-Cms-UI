import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard-home',
  templateUrl: './admin-dashboard-home.component.html',
  styleUrls: ['./admin-dashboard-home.component.scss']
})
export class AdminDashboardHomeComponent {

  constructor() {
    document.querySelector(".header-select")!.classList.add("display-none")
    document.querySelector("app-footer")!.classList.add("display-none")
  }

}
