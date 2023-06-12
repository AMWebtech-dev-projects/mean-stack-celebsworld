!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{rqDK:function(t,i,r){"use strict";r.d(i,"a",function(){return c});var a=r("SVse"),s=r("AytR"),o=r("8Y7J"),c=function(){var t=function(){function t(n){e(this,t),this.dom=n,this.baseUrl=s.a.baseUrl}return n(t,[{key:"setCanonicalURL",value:function(e){var t=this.dom.getElementsByTagName("head")[0],n=this.dom.querySelector("link[rel='canonical']")||null;null==n&&(n=this.dom.createElement("link"),t.appendChild(n)),n.setAttribute("rel","canonical"),n.setAttribute("href",this.baseUrl+e)}}]),t}();return t.\u0275fac=function(e){return new(e||t)(o["\u0275\u0275inject"](a.DOCUMENT))},t.\u0275prov=o["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},"vX9/":function(t,i,r){"use strict";r.r(i),r.d(i,"ArtistListModule",function(){return w});var a=r("SVse"),s=r("iInd"),o=r("OWE2"),c=r("rqDK"),l=r("Sf1D"),p=r("AytR"),d=r("8Y7J"),m=r("7g+E"),u=r("cUpR"),f=r("oTEC"),v=function(e,t){return["/",e,t]};function h(e,t){if(1&e&&(d["\u0275\u0275elementContainerStart"](0),d["\u0275\u0275elementStart"](1,"div",11),d["\u0275\u0275elementStart"](2,"a",12),d["\u0275\u0275pipe"](3,"removeWhiteSpaces"),d["\u0275\u0275pipe"](4,"lowercase"),d["\u0275\u0275elementStart"](5,"div",13),d["\u0275\u0275elementStart"](6,"div",14),d["\u0275\u0275elementStart"](7,"span"),d["\u0275\u0275text"](8),d["\u0275\u0275pipe"](9,"titlecase"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](10,"img",15),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](11,"div",16),d["\u0275\u0275elementStart"](12,"h4",17),d["\u0275\u0275text"](13),d["\u0275\u0275pipe"](14,"titlecase"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](15,"div",18),d["\u0275\u0275elementStart"](16,"span",19),d["\u0275\u0275element"](17,"i",20),d["\u0275\u0275text"](18),d["\u0275\u0275pipe"](19,"number"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementContainerEnd"]()),2&e){var n=t.$implicit;d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("routerLink",d["\u0275\u0275pureFunction2"](15,v,n.profession,d["\u0275\u0275pipeBind1"](3,5,d["\u0275\u0275pipeBind1"](4,7,n.name+"-"+n._id)))),d["\u0275\u0275advance"](6),d["\u0275\u0275textInterpolate"](d["\u0275\u0275pipeBind1"](9,9,n.profession)),d["\u0275\u0275advance"](2),d["\u0275\u0275propertyInterpolate"]("src",n.artistImage,d["\u0275\u0275sanitizeUrl"]),d["\u0275\u0275advance"](3),d["\u0275\u0275textInterpolate"](d["\u0275\u0275pipeBind1"](14,11,n.name)),d["\u0275\u0275advance"](5),d["\u0275\u0275textInterpolate1"](" ",d["\u0275\u0275pipeBind1"](19,13,n.artistPrice),"")}}var g,y,S,b=[{path:"",component:(g=function(){function t(n,i,r,a,s,o,c,l){e(this,t),this.route=n,this.router=i,this.globalService=r,this.spinner=a,this.artistService=s,this.canonicalService=o,this.metaServicesService=c,this.title=l,this.artistType="",this.artistList=[],this.baseUrl=p.a.baseUrl,this.metaData={}}return n(t,[{key:"ngOnInit",value:function(){var e=this;this.route.params.subscribe(function(t){e.artistType=t.artistType,e.getArtistList()})}},{key:"getArtistList",value:function(){var e=this;this.artistService.getArtistList({artistType:this.artistType}).subscribe(function(t){if(200===t.status&&t.data.length){e.artistList=t.data;var n=e.artistType.substr(0,1).toUpperCase();e.artistType=n+e.artistType.substr(1),e.title.setTitle(e.artistType+" | Celebs Worldwide"),e.canonicalService.setCanonicalURL(e.artistType),e.metaData={title:e.artistType,description:"Book personal acoustic message to share the feeling with the right tune as per the occasion from your favorite music",keywords:"Angular, TypeScript",image:e.artistList[0].artistImage,url:e.baseUrl+e.artistType},e.metaServicesService.setPageMeta(e.metaData),e.spinner.hide()}else e.spinner.hide(),e.router.navigate(["error-404"])},function(t){e.spinner.hide()})}}]),t}(),g.\u0275fac=function(e){return new(e||g)(d["\u0275\u0275directiveInject"](s.a),d["\u0275\u0275directiveInject"](s.e),d["\u0275\u0275directiveInject"](l.e),d["\u0275\u0275directiveInject"](m.c),d["\u0275\u0275directiveInject"](l.a),d["\u0275\u0275directiveInject"](c.a),d["\u0275\u0275directiveInject"](o.a),d["\u0275\u0275directiveInject"](u.d))},g.\u0275cmp=d["\u0275\u0275defineComponent"]({type:g,selectors:[["app-artist-list"]],decls:13,vars:2,consts:[[1,"page-banner","bg-black","pt-70","pb-70"],[1,"container"],[1,"row","justify-content-center","align-items-center"],[1,"inner_page-banner"],[1,"clr-white","text-uppercase"],[1,"grid","white-bg","music-bg"],[1,"row"],[1,"col-sm-12"],[1,""],[1,"row","clip-1"],[4,"ngFor","ngForOf"],[1,"col-lg-3","col-md-4","col-sm-6","artist-category","show","mb-30","musicians"],[3,"routerLink"],[1,"cat-img"],[1,"profession"],["width","200px","height","200px",3,"src"],[1,"heading-section"],[1,"name"],[1,"name","mb-0"],[1,"text-nowrap"],["aria-hidden","true",1,"fa","fa-inr","fa-sm"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"section",0),d["\u0275\u0275elementStart"](1,"div",1),d["\u0275\u0275elementStart"](2,"div",2),d["\u0275\u0275elementStart"](3,"div",3),d["\u0275\u0275elementStart"](4,"h1",4),d["\u0275\u0275text"](5),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](6,"div",5),d["\u0275\u0275elementStart"](7,"div",1),d["\u0275\u0275elementStart"](8,"div",6),d["\u0275\u0275elementStart"](9,"div",7),d["\u0275\u0275elementStart"](10,"div",8),d["\u0275\u0275elementStart"](11,"div",9),d["\u0275\u0275template"](12,h,20,18,"ng-container",10),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275advance"](5),d["\u0275\u0275textInterpolate"](t.artistType),d["\u0275\u0275advance"](7),d["\u0275\u0275property"]("ngForOf",t.artistList))},directives:[a.NgForOf,s.h],pipes:[f.a,a.LowerCasePipe,a.TitleCasePipe,a.DecimalPipe],styles:[""]}),g),pathMatch:"full"}],E=((S=function t(){e(this,t)}).\u0275fac=function(e){return new(e||S)},S.\u0275mod=d["\u0275\u0275defineNgModule"]({type:S}),S.\u0275inj=d["\u0275\u0275defineInjector"]({imports:[[s.i.forChild(b)],s.i]}),S),w=((y=function t(){e(this,t)}).\u0275fac=function(e){return new(e||y)},y.\u0275mod=d["\u0275\u0275defineNgModule"]({type:y}),y.\u0275inj=d["\u0275\u0275defineInjector"]({imports:[[a.CommonModule,E,l.h]]}),y)}}])}();