import {Component, OnInit} from '@angular/core';
import {IndexpageService} from "../../../service/Tool/indexpage.service";
import {ToolContentService} from "../../../service/AdminService/tool-content.service";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {

  menuSectionAdmin = this.menusectionService.isMenuSectionAdmin
  listAllPageContent = this.toolContentPage.listAllPageMenuContent
  isSectionPageContantAdmin = this.menusectionService.isSectionPageContantAdmin

  constructor(private  menusectionService : IndexpageService,
              private toolContentPage: ToolContentService) {
  }

  displaySelectedContentPage() {
    this.isSectionPageContantAdmin.next(true)
  }
}
