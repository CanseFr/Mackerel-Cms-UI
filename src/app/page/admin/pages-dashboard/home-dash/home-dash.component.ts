import {Component, OnInit} from '@angular/core';
import {HomeService} from "../../../../service/HomeService/home.service";

@Component({
  selector: 'app-home-dash',
  templateUrl: './home-dash.component.html',
  styleUrls: ['./home-dash.component.scss']
})
export class HomeDashComponent implements OnInit{

  homeContent = this.homeService.homeContantList

  constructor(private homeService: HomeService) {
  }

  ngOnInit() {
    this.homeService.getHomeContent()
  }

}
