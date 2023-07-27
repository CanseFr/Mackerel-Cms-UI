import { Component } from '@angular/core';
import {IndexpageService} from "../../../service/Tool/indexpage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.scss']
})
export class HeaderAdminComponent {

  menuSectionAdmin = this.menusectionService.isMenuSectionAdmin

  constructor(private menusectionService : IndexpageService,
              public router: Router) {
  }

  openMenuList() {
    this.menuSectionAdmin.value ? this.menuSectionAdmin.next(false)  :  this.menuSectionAdmin.next(true)
  }

  protected readonly localStorage = localStorage;
}
