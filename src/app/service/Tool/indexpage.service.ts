import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class IndexpageService {

  public indexActualPage: BehaviorSubject<string> = new BehaviorSubject<string>("home");
  public urlActualPage: BehaviorSubject<string> = new BehaviorSubject<string>("home/bg-mack-fest.png");
  public isMenuSectionAdmin: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  public isSectionPageContantAdmin :  BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  constructor() {}
}
