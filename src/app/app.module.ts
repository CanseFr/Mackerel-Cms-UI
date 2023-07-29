import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './inc/header/header.component';
import { FooterComponent } from './inc/footer/footer.component';
import { HomeComponent } from './page/home/home.component';
import { ClubComponent } from './page/club/club.component';
import { EventComponent } from './page/event/event.component';
import { FestivalComponent } from './page/festival/festival.component';
import { ArtisteComponent } from './page/artiste/artiste.component';
import { ContactComponent } from './page/contact/contact.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { AdminDashboardComponent } from './page/admin/admin-dashboard/admin-dashboard.component';
import { HeaderAdminComponent } from './page/admin/header-admin/header-admin.component';
import { HeaderDashComponent } from './page/admin/pages-dashboard/header-dash/header-dash.component';
import { FooterDashComponent } from './page/admin/pages-dashboard/footer-dash/footer-dash.component';
import { HomeDashComponent } from './page/admin/pages-dashboard/home-dash/home-dash.component';
import { ClubDashComponent } from './page/admin/pages-dashboard/club-dash/club-dash.component';
import { EventDashComponent } from './page/admin/pages-dashboard/event-dash/event-dash.component';
import { FestivalDashComponent } from './page/admin/pages-dashboard/festival-dash/festival-dash.component';
import { ArtistesDashComponent } from './page/admin/pages-dashboard/artistes-dash/artistes-dash.component';
import { ContactDashComponent } from './page/admin/pages-dashboard/contact-dash/contact-dash.component';
import { AdminDashboardHomeComponent } from './page/admin/admin-dashboard-home/admin-dashboard-home.component';
import { LoginComponent } from './page/admin/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ClubComponent,
    EventComponent,
    FestivalComponent,
    ArtisteComponent,
    ContactComponent,
    AdminDashboardComponent,
    HeaderAdminComponent,
    HeaderDashComponent,
    FooterDashComponent,
    HomeDashComponent,
    ClubDashComponent,
    EventDashComponent,
    FestivalDashComponent,
    ArtistesDashComponent,
    ContactDashComponent,
    AdminDashboardHomeComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    ReactiveFormsModule,

  ],
  providers: [
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
