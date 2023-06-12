import { Title } from '@angular/platform-browser';
import { MetaServicesService } from './../../../shared-ui/services/meta-services.service';
import { CanonicalService } from './../../../shared-ui/services/canonical.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ArtistService, GlobalService } from '../../../shared-ui/';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from '../../../../environments/environment';

@Component({
  selector: "app-artist-list",
  templateUrl: "./artist-list.component.html",
  styleUrls: ["./artist-list.component.scss"],
})
export class ArtistListComponent implements OnInit {
  artistType: string = "";
  artistList: any = [];
  baseUrl = environment.baseUrl;
  metaData: any = {};
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private globalService: GlobalService,
    private spinner: NgxSpinnerService,
    private artistService: ArtistService,
    private canonicalService: CanonicalService,
    private metaServicesService: MetaServicesService,
    private title: Title
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((res) => {
      this.artistType = res.artistType;
      this.getArtistList();
    });
  }

  getArtistList() {
    this.artistService.getArtistList({ artistType: this.artistType }).subscribe(
      (data) => {
        if (data.status === 200 && data.data.length) {
          this.artistList = data.data;
          // this.globalService.setPageTitle(this.artistType);
            const pageTitle = this.artistType.substr(0,1).toUpperCase();
            this.artistType = pageTitle + this.artistType.substr(1);
            this.title.setTitle(this.artistType + ' | Celebs Worldwide');

          this.canonicalService.setCanonicalURL(this.artistType);
          this.metaData = {
            title: this.artistType,
            description:
              "Book personal acoustic message to share the feeling with the right tune as per the occasion from your favorite music",
            keywords: "Angular, TypeScript",
            image: this.artistList[0].artistImage,
            url: this.baseUrl + this.artistType,
          };
          this.metaServicesService.setPageMeta(this.metaData);
          this.spinner.hide();
        } else {
          this.spinner.hide();
          this.router.navigate(["error-404"]);
        }
      },
      (error) => {
        this.spinner.hide();
      }
    );
  }
}
