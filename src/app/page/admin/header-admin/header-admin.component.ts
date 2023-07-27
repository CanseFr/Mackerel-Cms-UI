import { Component } from '@angular/core';
import {IndexpageService} from "../../../service/Tool/indexpage.service";

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.scss']
})
export class HeaderAdminComponent {

  menuSectionAdmin = this.menusectionService.isMenuSectionAdmin

  constructor(private menusectionService : IndexpageService) {
  }

  openMenuList() {
    this.menuSectionAdmin.value ? this.menuSectionAdmin.next(false)  :  this.menuSectionAdmin.next(true)
  }

}
