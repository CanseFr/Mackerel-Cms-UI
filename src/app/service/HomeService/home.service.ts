import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {EnvRootService} from "../Tool/env-root.service";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  homeContantList: BehaviorSubject<any> = new BehaviorSubject<any>({});

  constructor(private http: HttpClient,
              private rootEnv: EnvRootService) {
    this.getHomeContent()
  }

  root:string= '/home'

  getHomeContent(){
    this.http.get<any>( this.rootEnv.root + this.root + "/")
      .subscribe(data => this.homeContantList.next(data))
  }

}
