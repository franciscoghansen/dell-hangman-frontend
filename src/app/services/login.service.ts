import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements CanActivate {

  isAuthenticated = new Subject<boolean>();

  constructor(private router: Router) {
    this.isAuthenticated.next(false);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const player = localStorage.getItem('player');
    if (player === undefined || player == null) {
      this.router.navigate(['/login']);
    } else {
      this.isAuthenticated.next(true);
    }
    return player !== undefined && player != null;
  }
}
