import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {EnvRootService} from "../Tool/env-root.service";

@Injectable({
  providedIn: 'root'
})
export class ToolContentService {

  listAllPageMenuContent: BehaviorSubject<any> = new BehaviorSubject<any>(["Header","Home", 'Club','Event','Festival','Artistes','Contact',"Footer"])

  constructor() { }

  // rootUrl: string = "/admin/"

  // getAllPageContent(){
  //   this.http
  //     .get(this.env.root + this.rootUrl)
  //     .subscribe( data => this.listAllContent.next(data))
  // }

}
