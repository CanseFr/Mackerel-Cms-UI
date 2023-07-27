import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {EnvRootService} from "../Tool/env-root.service";

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  footerContentList: BehaviorSubject<any> = new BehaviorSubject<any>([])

  constructor( private http:HttpClient,
               private rootEnv: EnvRootService) { }

  root:string = "/footer"

  getFooterContent(){
    this.http
      .get(this.rootEnv.root + this.root + "/")
      .subscribe( data => this.footerContentList.next(data))
  }

}
