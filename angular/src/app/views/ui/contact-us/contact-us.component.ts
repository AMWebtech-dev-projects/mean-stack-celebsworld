import { CanonicalService } from './../../../shared-ui/services/canonical.service';
import { GlobalService } from './../../../shared-ui/services/global.service';
import { Title } from '@angular/platform-browser';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { } from 'googlemaps';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ContactUsComponent implements OnInit {
  required :any ={
    name: '',
    email:'',
    phone: '',
    message:''
  }

  // google maps zoom level
  zoom: number = 8;
  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;
  constructor(
    private globalService: GlobalService,
    private canonicalService: CanonicalService,
    private title:Title
  ) {
  }
  markers: marker[] = [
	  {
		  lat: 51.673858,
		  lng: 7.815982,
		  label: 'A',
		  draggable: true
	  },
  ]
  ngOnInit(): void {
    this.title.setTitle('Signup | Celebs Worldwide');
  }

}
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}
