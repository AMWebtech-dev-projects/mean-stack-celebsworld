import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, NavigationEnd, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtService } from './services/jwt.service';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';
import { GlobalService } from './services/global.service';
import { navItems } from './../_nav'
import { filter } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  public navItems = navItems;
  currentUrl: any;
  constructor(
    private jwtService: JwtService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private globalService: GlobalService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.jwtService.getToken()) {
      const user = this.jwtService.currentLoggedUserInfo;

      if (user && user.role) {
        this.globalService.authentication()
        if (user.role === environment.userType.admin) {
          return true;
        } else {
          const found = this.navItems.filter(function (nav) {
            return state.url === nav.url
          })
          if (found.length) {
            this.router.navigate(['/']);
          } else {
            return true;
          }
        }

      } else {
        this.router.navigate(['/']);
      }
    } else {
      this.router.navigate(['/login']);
      this.spinner.hide();
    }
  }
}
