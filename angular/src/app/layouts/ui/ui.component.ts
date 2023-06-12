import { AfterViewInit, Component, ElementRef, HostListener, Inject, OnInit, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { CurrentUser } from './user.model';
import { JwtService, GlobalService, CategoryService, ArtistService } from '../../shared-ui/';
import { NavigationEnd, NavigationError, NavigationStart, Router, Event } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { ModalDirective } from 'ngx-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
// import { DOCUMENT } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./ui.component.scss'],
})
export class UiComponent implements OnInit, AfterViewInit {
  subscription: Subscription;
  fullYear = new Date().getFullYear();
  currentUser: any;
  quickSearchList: any[] = [];
  quickSearchText: any = {
    searchText: '',
  };
  showNav: boolean = false;
  loadingListings: boolean = false;
  showScroll: boolean;
  fixedHeader: boolean;
  showScrollHeight = 100;
  hideScrollHeight = 10;
  addClassActiveUser: boolean = false;
  categoryList = [];
  classToggled = false;
  // dashboardLink = '/#/dashboard';
  @ViewChild('quickSearchOverlayWrap', { static: false })
  public quickSearchOverlayWrap: ModalDirective;
  @ViewChild('toggleButton') toggleButton: ElementRef;
  @ViewChild('dropDownMenu') dropDownMenu: ElementRef;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private jwtService: JwtService,
    private router: Router,
    private globalService: GlobalService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private categoryService: CategoryService,
    private artistService: ArtistService,
    private renderer: Renderer2
  ) {
    this.renderer.listen('window', 'click', (e: any) => {
      if (e.target !== this.toggleButton.nativeElement && e.target !== this.dropDownMenu.nativeElement) {
        this.classToggled = false;
      }
    });

    this.subscription = this.globalService
      .getActionChildToParent()
      .subscribe((message) => {
        if (message) {
          this.currentUser = this.jwtService.getCurrentUser();
          if (this.currentUser && this.currentUser._id) {
            this.addClassActiveUser = true;
          } else {
            this.addClassActiveUser = false;
          }
        }
      });

    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.spinner.show();
      }

      if (event instanceof NavigationEnd) {
        this.showNav = false;
        setTimeout(() => {
          /** spinner ends after 5 seconds */
          this.spinner.hide();
        }, 1000);
      }

      if (event instanceof NavigationError) {
        this.spinner.hide();
      }
    });
  }
  ngOnInit() {
    // this.currentUser = this.jwtService.currentLoggedUserInfo;
    this.quickSearchText.searchText = '';
    this.currentUser = this.jwtService.getCurrentUser();
    this.GetCategoryList();
    if (this.currentUser && this.currentUser._id) {
      this.addClassActiveUser = true;
    } else {
      this.addClassActiveUser = false;
    }
  }
  toggleNavbar() {
    this.showNav = !this.showNav;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (
      (window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop) > this.showScrollHeight
    ) {
      this.showScroll = true;
      this.fixedHeader = true;
    } else if (
      this.showScroll &&
      (window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop) < this.hideScrollHeight
    ) {
      this.showScroll = false;
      this.fixedHeader = false;
    }
  }

  scrollToTop() {
    (function smoothscroll() {
      const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - currentScroll / 8);
      }
    })();
  }

  logout() {
    this.jwtService.destroyToken();
    this.toastr.success('You have logged out successfully. ', 'Success');
    this.globalService.sendActionChildToParent('loggedOut');
    this.router.navigate(['/']);
    this.addClassActiveUser = false;
  }

  ngAfterViewInit() {
    let top = document.getElementById('container');
    if (top !== null) {
      top.scrollIntoView();
      top = null;
    }
  }

  GetCategoryList() {
    // this.spinner.show();
    this.categoryService.getCategoryList().subscribe((res) => {
      if (res.status === 200) {
        this.categoryList = res.data;
        this.categoryList.unshift({ name: 'all' });
      }
    });
  }

  quickSearchArtist(quickSearch: string) {
    this.loadingListings = true;
    if (quickSearch || quickSearch.length) {
      this.loadingListings = false;
      this.artistService.quickSearchArtist({
        quickSearch: quickSearch,
      }).subscribe(
        (data) => {
          this.loadingListings = false;
          if (data.status && data.data.length) {
            this.quickSearchList = data.data;
            this.loadingListings = false;
          } else {
            this.quickSearchList = [{ name: 'No Artist Found.', type: 'no' }];
          }
        },
        (error) => {
          this.loadingListings = false;
          this.quickSearchList = [{ name: 'No Artist Found.', type: 'no' }];
        }
      );
    } else {
      this.quickSearchList = [];
      this.loadingListings = false;
    }
  }

  redirectArtistPage(artist?: any) {
    this.quickSearchList = [];
    this.quickSearchOverlayWrap.hide();
    this.quickSearchText.searchText = '';
    if (artist) {
      let artistUrl =
        artist.profession.toLowerCase() + '/' + artist.name.toLowerCase();
      artistUrl = this.globalService.RemoveWhiteSpaces(artistUrl);
      this.router.navigate(['/' + artistUrl + '-' + artist._id]);
    }
  }

  toggleDisplay() {
    this.classToggled = !this.classToggled;
  }
}
