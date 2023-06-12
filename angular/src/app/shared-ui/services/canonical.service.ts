import { DOCUMENT } from '@angular/common';
import { Injectable, Inject } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CanonicalService {

  constructor(
    @Inject(DOCUMENT) private dom
  ) { }
  baseUrl = environment.baseUrl;
  setCanonicalURL(url?: string){
    const head = this.dom.getElementsByTagName('head')[0];
    let element: HTMLLinkElement = this.dom.querySelector(`link[rel='canonical']`) || null;
    if (element == null) {
      element = this.dom.createElement('link') as HTMLLinkElement;
      head.appendChild(element);
    }
    element.setAttribute('rel', 'canonical');
    element.setAttribute('href', this.baseUrl + url);

    // const canUrl = url = undefined ? this.dom.URL : url;
    // const link = HTMLLinkElement = this.dom.createElement('link');
    // link.setAttribute('rel', 'canonical');
    // this.dom.head.appendChild(link);
    // link.setAttribute('href', canUrl)
  }
}
