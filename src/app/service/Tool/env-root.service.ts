import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvRootService {

  readonly root:string = 'http://localhost:8080'
  // readonly root:string= 'http://185.132.45.200:8080/mackerelclub'

}
