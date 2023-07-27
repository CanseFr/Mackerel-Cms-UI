import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot,UrlTree } from '@angular/router';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate{

  constructor(public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const TOKEN : string | null = localStorage.getItem('token')

    if (!TOKEN){
      this.router.navigate(['login'])
      return false;
    }
    // TODO : Attention a importer un module pour lire le token mis dans le back

    if(TOKEN !== "admin"){
      localStorage.clear();
      this.router.navigate(['login'])
      return false;
    }
    return true;
  }
}
