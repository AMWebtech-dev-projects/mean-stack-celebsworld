import { Title } from '@angular/platform-browser';
import { CanonicalService } from './../../../shared-ui/services/canonical.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CurrentUser } from './../../../layouts/ui/user.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import {
  JwtService,
  GlobalService,
  CategoryService,
  ArtistService,
  MetaServicesService,
} from "../../../shared-ui/";
import { ToastrService } from "ngx-toastr";
import { elementAt } from "rxjs/operators";
import { environment } from "../../../../environments/environment";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  subscription: Subscription;
  currentUser: CurrentUser = new CurrentUser();
  allArtistData: any = [];
  artistList: any = [];
  categoryList: any = [];
  activeNav: string = "all";
  noWrapSlides: boolean = false;
  showIndicator: boolean = true;
  interval: number = 3000;
  baseUrl = environment.baseUrl;

  metaData: any = {
    title: "Home",
    description: "Surprised your loved ones with soothing energy rhythmdddd",
    keywords: "TypeScript, Angular",
    image: this.baseUrl + "assets/img/hero-banner-musicians.jpg",
    url: this.baseUrl + "home",
  };
  constructor(
    private jwtService: JwtService,
    private globalService: GlobalService,
    private router: Router,
    private toastr: ToastrService,
    private categoryService: CategoryService,
    private artistService: ArtistService,
    private canonicalService: CanonicalService,
    private metaServicesService: MetaServicesService,
    private title: Title
  ) {
    this.currentUser = this.jwtService.currentLoggedUserInfo;
    this.GetCategoryList();
    this.getArtistList();
  }

  ngOnInit() {
    this.title.setTitle('Home | Celebs Worldwide');
    this.canonicalService.setCanonicalURL('home');
    this.metaServicesService.setPageMeta(this.metaData);
  }

  filterSelection(type): any {
    if (type === "all") {
      this.artistList = this.allArtistData;
      this.activeNav = type;
    } else {
      const found = this.allArtistData.filter((element) => {
        this.activeNav = type;
        return element.profession.toLowerCase() === type.toLowerCase();
      });
      this.artistList = found;
    }
  }

  GetCategoryList() {
    // this.spinner.show();
    this.categoryService.getCategoryList().subscribe((res) => {
      if (res.status === 200) {
        this.categoryList = res.data;
        this.categoryList.unshift({ name: "all" });
      }
    });
  }

  getArtistList() {
    this.artistService.getArtistList().subscribe((res) => {
      if (res.status === 200) {
        this.artistList = res.data;
        this.allArtistData = res.data;
      }
    });
  }
}
