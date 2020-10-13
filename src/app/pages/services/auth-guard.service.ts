import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(protected router: Router, protected authSrv: AuthService) {

  }//constructor

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    let params = {
      queryParams: {
        return: state.url
      }
    };
    if(this.authSrv.tokenValid&&state.url.includes("/pages/login")){
      this.router.navigate(["/pages/home"], params);
      return false;
    }
    if(state.url.includes("/pages/login")){
      return true;
    }
    
    if (this.authSrv.tokenValid) return true;

    
    this.router.navigate(["/pages/login"], params);
    return false;
  }//canActivate
}
