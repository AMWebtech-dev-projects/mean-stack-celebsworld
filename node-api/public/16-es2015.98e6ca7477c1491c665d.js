(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{rqDK:function(e,t,i){"use strict";i.d(t,"a",function(){return s});var n=i("SVse"),r=i("AytR"),a=i("8Y7J");let s=(()=>{class e{constructor(e){this.dom=e,this.baseUrl=r.a.baseUrl}setCanonicalURL(e){const t=this.dom.getElementsByTagName("head")[0];let i=this.dom.querySelector("link[rel='canonical']")||null;null==i&&(i=this.dom.createElement("link"),t.appendChild(i)),i.setAttribute("rel","canonical"),i.setAttribute("href",this.baseUrl+e)}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275inject"](n.DOCUMENT))},e.\u0275prov=a["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},"vX9/":function(e,t,i){"use strict";i.r(t),i.d(t,"ArtistListModule",function(){return g});var n=i("SVse"),r=i("iInd"),a=i("OWE2"),s=i("rqDK"),c=i("Sf1D"),l=i("AytR"),o=i("8Y7J"),p=i("7g+E"),d=i("cUpR"),m=i("oTEC");const h=function(e,t){return["/",e,t]};function u(e,t){if(1&e&&(o["\u0275\u0275elementContainerStart"](0),o["\u0275\u0275elementStart"](1,"div",11),o["\u0275\u0275elementStart"](2,"a",12),o["\u0275\u0275pipe"](3,"removeWhiteSpaces"),o["\u0275\u0275pipe"](4,"lowercase"),o["\u0275\u0275elementStart"](5,"div",13),o["\u0275\u0275elementStart"](6,"div",14),o["\u0275\u0275elementStart"](7,"span"),o["\u0275\u0275text"](8),o["\u0275\u0275pipe"](9,"titlecase"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](10,"img",15),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](11,"div",16),o["\u0275\u0275elementStart"](12,"h4",17),o["\u0275\u0275text"](13),o["\u0275\u0275pipe"](14,"titlecase"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](15,"div",18),o["\u0275\u0275elementStart"](16,"span",19),o["\u0275\u0275element"](17,"i",20),o["\u0275\u0275text"](18),o["\u0275\u0275pipe"](19,"number"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit;o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("routerLink",o["\u0275\u0275pureFunction2"](15,h,e.profession,o["\u0275\u0275pipeBind1"](3,5,o["\u0275\u0275pipeBind1"](4,7,e.name+"-"+e._id)))),o["\u0275\u0275advance"](6),o["\u0275\u0275textInterpolate"](o["\u0275\u0275pipeBind1"](9,9,e.profession)),o["\u0275\u0275advance"](2),o["\u0275\u0275propertyInterpolate"]("src",e.artistImage,o["\u0275\u0275sanitizeUrl"]),o["\u0275\u0275advance"](3),o["\u0275\u0275textInterpolate"](o["\u0275\u0275pipeBind1"](14,11,e.name)),o["\u0275\u0275advance"](5),o["\u0275\u0275textInterpolate1"](" ",o["\u0275\u0275pipeBind1"](19,13,e.artistPrice),"")}}const v=[{path:"",component:(()=>{class e{constructor(e,t,i,n,r,a,s,c){this.route=e,this.router=t,this.globalService=i,this.spinner=n,this.artistService=r,this.canonicalService=a,this.metaServicesService=s,this.title=c,this.artistType="",this.artistList=[],this.baseUrl=l.a.baseUrl,this.metaData={}}ngOnInit(){this.route.params.subscribe(e=>{this.artistType=e.artistType,this.getArtistList()})}getArtistList(){this.artistService.getArtistList({artistType:this.artistType}).subscribe(e=>{if(200===e.status&&e.data.length){this.artistList=e.data;const t=this.artistType.substr(0,1).toUpperCase();this.artistType=t+this.artistType.substr(1),this.title.setTitle(this.artistType+" | Celebs Worldwide"),this.canonicalService.setCanonicalURL(this.artistType),this.metaData={title:this.artistType,description:"Book personal acoustic message to share the feeling with the right tune as per the occasion from your favorite music",keywords:"Angular, TypeScript",image:this.artistList[0].artistImage,url:this.baseUrl+this.artistType},this.metaServicesService.setPageMeta(this.metaData),this.spinner.hide()}else this.spinner.hide(),this.router.navigate(["error-404"])},e=>{this.spinner.hide()})}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275directiveInject"](r.a),o["\u0275\u0275directiveInject"](r.e),o["\u0275\u0275directiveInject"](c.e),o["\u0275\u0275directiveInject"](p.c),o["\u0275\u0275directiveInject"](c.a),o["\u0275\u0275directiveInject"](s.a),o["\u0275\u0275directiveInject"](a.a),o["\u0275\u0275directiveInject"](d.d))},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["app-artist-list"]],decls:13,vars:2,consts:[[1,"page-banner","bg-black","pt-70","pb-70"],[1,"container"],[1,"row","justify-content-center","align-items-center"],[1,"inner_page-banner"],[1,"clr-white","text-uppercase"],[1,"grid","white-bg","music-bg"],[1,"row"],[1,"col-sm-12"],[1,""],[1,"row","clip-1"],[4,"ngFor","ngForOf"],[1,"col-lg-3","col-md-4","col-sm-6","artist-category","show","mb-30","musicians"],[3,"routerLink"],[1,"cat-img"],[1,"profession"],["width","200px","height","200px",3,"src"],[1,"heading-section"],[1,"name"],[1,"name","mb-0"],[1,"text-nowrap"],["aria-hidden","true",1,"fa","fa-inr","fa-sm"]],template:function(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"section",0),o["\u0275\u0275elementStart"](1,"div",1),o["\u0275\u0275elementStart"](2,"div",2),o["\u0275\u0275elementStart"](3,"div",3),o["\u0275\u0275elementStart"](4,"h1",4),o["\u0275\u0275text"](5),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](6,"div",5),o["\u0275\u0275elementStart"](7,"div",1),o["\u0275\u0275elementStart"](8,"div",6),o["\u0275\u0275elementStart"](9,"div",7),o["\u0275\u0275elementStart"](10,"div",8),o["\u0275\u0275elementStart"](11,"div",9),o["\u0275\u0275template"](12,u,20,18,"ng-container",10),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()),2&e&&(o["\u0275\u0275advance"](5),o["\u0275\u0275textInterpolate"](t.artistType),o["\u0275\u0275advance"](7),o["\u0275\u0275property"]("ngForOf",t.artistList))},directives:[n.NgForOf,r.h],pipes:[m.a,n.LowerCasePipe,n.TitleCasePipe,n.DecimalPipe],styles:[""]}),e})(),pathMatch:"full"}];let f=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({imports:[[r.i.forChild(v)],r.i]}),e})(),g=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({imports:[[n.CommonModule,f,c.h]]}),e})()}}]);