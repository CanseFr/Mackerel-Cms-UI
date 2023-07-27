import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {IndexpageService} from "../../service/Tool/indexpage.service";
import {HeaderServiceService} from "../../service/HeaderService/header-service.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  urlHandle : string = ""
  headerContent = this.headerService.headerContantList

  constructor(private route:Router,
              public indexPage: IndexpageService,
              private headerService: HeaderServiceService
  ) {}


  ngOnInit(): void {
    this.headerService.getHeaderContent()
  }

  async imgHome(){
    await this.indexPage.urlActualPage.next("home/" + this.headerContent.value.bgSelect1)
    this.indexPage.indexActualPage.next("home")
  }

  imgClub():void{
      this.indexPage.urlActualPage.next("club/" + this.headerContent.value.bgSelect2 )
    this.indexPage.indexActualPage.next("club")
  }
  imgEvent():void{
      this.indexPage.urlActualPage.next("event/" + this.headerContent.value.bgSelect3 )
    this.indexPage.indexActualPage.next("event")
  }
  imgFestival():void{
      this.indexPage.urlActualPage.next("festival/" + this.headerContent.value.bgSelect4 )
    this.indexPage.indexActualPage.next("festival")
  }
  imgArtiste():void{
      this.indexPage.urlActualPage.next("artiste/" + this.headerContent.value.bgSelect5 )
    this.indexPage.indexActualPage.next("artiste")
  }
  imgContact():void{
      this.indexPage.urlActualPage.next("contact/" + this.headerContent.value.bgSelect6 )
    this.indexPage.indexActualPage.next("contact")
  }

}
