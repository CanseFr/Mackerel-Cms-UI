import {Component, OnInit} from '@angular/core';
import {FooterService} from "../../service/FooterService/footer.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit{

  footerListContent = this.footerService.footerContentList

  constructor(private footerService:FooterService) {
  }

  ngOnInit(): void {
    this.footerService.getFooterContent()
  }



}
