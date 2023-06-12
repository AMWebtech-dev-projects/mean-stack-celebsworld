import { Component, OnDestroy, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { navItems } from '../../_nav';
import { Router } from '@angular/router';
import { JwtService } from '../../shared-ui/';
import { AlertService } from '../../shared-ui/alert/alert.service';
import { CurrentUser } from '../ui/user.model';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['dashboard-layout.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardLayoutComponent implements OnDestroy, OnInit {
  constructor(
    private router: Router,
    private jwtService: JwtService,
    private alertService: AlertService,
    @Inject(DOCUMENT) _document?: any
  ) {
    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized =
        _document.body.classList.contains('sidebar-minimized');
    });
    this.element = _document.body;

    this.changes.observe(<Element>this.element, {
      attributes: true,
      attributeFilter: ['class'],
    });
  }
  fullYear = new Date().getFullYear();
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement;
  currentUser: any;
  currentYear: number = new Date().getFullYear();
  ngOnInit(): void  {
    this.currentUser = this.jwtService.currentLoggedUserInfo;
  }
  ngOnDestroy(): void {
    this.changes.disconnect();
  }

  logout() {
    this.jwtService.destroyToken();
    this.alertService.success('You have logged out successfully.');
    this.router.navigate(['/']);
  }
}
