import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {EnvRootService} from "../Tool/env-root.service";

@Injectable({
  providedIn: 'root'
})
export class HeaderServiceService {

  headerContantList: BehaviorSubject<any> = new BehaviorSubject<any>({});

  constructor(private http: HttpClient,
              private rootEnv: EnvRootService) {
    this.getHeaderContent()
  }

  root:string= '/header'

  getHeaderContent(){
    this.http.get<any>( this.rootEnv.root + this.root + "/")
      .subscribe(data => this.headerContantList.next(data))
  }
}
