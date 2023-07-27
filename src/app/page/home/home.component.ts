import { Component } from '@angular/core';
import {IndexpageService} from "../../service/Tool/indexpage.service";
import {HomeService} from "../../service/HomeService/home.service";
import {HeaderServiceService} from "../../service/HeaderService/header-service.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  homeContent = this.homeService.homeContantList
  headerContent = this.headerService.headerContantList
  constructor(public indexPage: IndexpageService,private homeService: HomeService,private headerService: HeaderServiceService) {
  }
  ngOnInit(): void {
    this.homeService.getHomeContent()
  }

  contactPage(){
    this.indexPage.urlActualPage.next("contact/" + this.headerContent.value.bgSelect6 )
    this.indexPage.indexActualPage.next("contact")
  }

}
