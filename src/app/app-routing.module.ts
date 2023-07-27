import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./page/home/home.component";
import {ClubComponent} from "./page/club/club.component";
import {EventComponent} from "./page/event/event.component";
import {FestivalComponent} from "./page/festival/festival.component";
import {ArtisteComponent} from "./page/artiste/artiste.component";
import {ContactComponent} from "./page/contact/contact.component";
import {AdminDashboardComponent} from "./page/admin/admin-dashboard/admin-dashboard.component";
import {HeaderDashComponent} from "./page/admin/pages-dashboard/header-dash/header-dash.component";
import {HomeDashComponent} from "./page/admin/pages-dashboard/home-dash/home-dash.component";
import {ClubDashComponent} from "./page/admin/pages-dashboard/club-dash/club-dash.component";
import {EventDashComponent} from "./page/admin/pages-dashboard/event-dash/event-dash.component";
import {FestivalDashComponent} from "./page/admin/pages-dashboard/festival-dash/festival-dash.component";
import {ArtistesDashComponent} from "./page/admin/pages-dashboard/artistes-dash/artistes-dash.component";
import {ContactDashComponent} from "./page/admin/pages-dashboard/contact-dash/contact-dash.component";
import {FooterDashComponent} from "./page/admin/pages-dashboard/footer-dash/footer-dash.component";

const routes: Routes = [
  {path: "", component : HomeComponent},
  {path: "club", component : ClubComponent},
  {path: "event", component : EventComponent},
  {path: "festival", component : FestivalComponent},
  {path: "artiste", component : ArtisteComponent},
  {path: "contact", component : ContactComponent},
  {path: "admin", component : AdminDashboardComponent,
      children:[
        {path: "Header", component : HeaderDashComponent},
        {path: "Home", component : HomeDashComponent},
        {path: "Club", component : ClubDashComponent},
        {path: "Event", component : EventDashComponent},
        {path: "Festival", component : FestivalDashComponent},
        {path: "Artistes", component : ArtistesDashComponent},
        {path: "Contact", component : ContactDashComponent},
        {path: "Footer", component : FooterDashComponent},

    ]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
