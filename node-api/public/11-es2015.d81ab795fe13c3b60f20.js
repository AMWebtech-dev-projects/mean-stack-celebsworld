(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{Osdn:function(e,t,i){"use strict";i.d(t,"a",function(){return g}),i.d(t,"b",function(){return f}),i.d(t,"c",function(){return v});var n=i("8Y7J"),s=i("hpHm"),r=i("SVse");function a(e,t){if(1&e){const e=n["\u0275\u0275getCurrentView"]();n["\u0275\u0275elementStart"](0,"li",7),n["\u0275\u0275listener"]("click",function(){n["\u0275\u0275restoreView"](e);const i=t.index;return n["\u0275\u0275nextContext"](2).selectSlide(i)}),n["\u0275\u0275elementEnd"]()}2&e&&n["\u0275\u0275classProp"]("active",!0===t.$implicit.active)}function l(e,t){if(1&e&&(n["\u0275\u0275elementStart"](0,"ol",5),n["\u0275\u0275template"](1,a,1,2,"li",6),n["\u0275\u0275elementEnd"]()),2&e){const e=n["\u0275\u0275nextContext"]();n["\u0275\u0275advance"](1),n["\u0275\u0275property"]("ngForOf",e.indicatorsSlides())}}function d(e,t){1&e&&(n["\u0275\u0275elementStart"](0,"span",11),n["\u0275\u0275text"](1,"Previous"),n["\u0275\u0275elementEnd"]())}function o(e,t){if(1&e){const e=n["\u0275\u0275getCurrentView"]();n["\u0275\u0275elementStart"](0,"a",8),n["\u0275\u0275listener"]("click",function(){return n["\u0275\u0275restoreView"](e),n["\u0275\u0275nextContext"]().previousSlide()}),n["\u0275\u0275element"](1,"span",9),n["\u0275\u0275template"](2,d,2,0,"span",10),n["\u0275\u0275elementEnd"]()}if(2&e){const e=n["\u0275\u0275nextContext"]();n["\u0275\u0275classProp"]("disabled",0===e.activeSlide&&e.noWrap),n["\u0275\u0275advance"](2),n["\u0275\u0275property"]("ngIf",e.isBs4)}}function c(e,t){if(1&e){const e=n["\u0275\u0275getCurrentView"]();n["\u0275\u0275elementStart"](0,"a",12),n["\u0275\u0275listener"]("click",function(){return n["\u0275\u0275restoreView"](e),n["\u0275\u0275nextContext"]().nextSlide()}),n["\u0275\u0275element"](1,"span",13),n["\u0275\u0275elementStart"](2,"span",11),n["\u0275\u0275text"](3,"Next"),n["\u0275\u0275elementEnd"](),n["\u0275\u0275elementEnd"]()}if(2&e){const e=n["\u0275\u0275nextContext"]();n["\u0275\u0275classProp"]("disabled",e.isLast(e.activeSlide)&&e.noWrap)}}const m=function(e){return{display:e}},h=["*"];let u=(()=>{class e{constructor(){this.interval=5e3,this.noPause=!1,this.noWrap=!1,this.showIndicators=!0,this.indicatorsByChunk=!1,this.itemsPerSlide=1,this.singleSlideOffset=!1}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=n["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();const p={UNKNOWN:0,NEXT:1,PREV:2};p[p.UNKNOWN]="UNKNOWN",p[p.NEXT]="NEXT",p[p.PREV]="PREV";let g=(()=>{class e{constructor(e,t){this.ngZone=t,this.indicatorsByChunk=!1,this.itemsPerSlide=1,this.singleSlideOffset=!1,this.activeSlideChange=new n.EventEmitter(!1),this.slideRangeChange=new n.EventEmitter,this.startFromIndex=0,this._slides=new s.a,this._currentVisibleSlidesIndex=0,this.destroyed=!1,this.getActive=e=>e.active,this.makeSlidesConsistent=e=>{e.forEach((e,t)=>e.item.order=t)},Object.assign(this,e)}set activeSlide(e){this.multilist||this._slides.length&&e!==this._currentActiveSlide&&this._select(e)}get activeSlide(){return this._currentActiveSlide}get interval(){return this._interval}set interval(e){this._interval=e,this.restartTimer()}get slides(){return this._slides.toArray()}get isBs4(){return!Object(s.d)()}ngAfterViewInit(){setTimeout(()=>{this.singleSlideOffset&&(this.indicatorsByChunk=!1),this.multilist&&(this._chunkedSlides=function(e,t){const i=[],n=Math.ceil(e.length/t);let s=0;for(;s<n;){const r=e.splice(0,s===n-1&&t<e.length?e.length:t);i.push(r),s++}return i}(this.mapSlidesAndIndexes(),this.itemsPerSlide),this.selectInitialSlides())},0)}ngOnDestroy(){this.destroyed=!0}addSlide(e){this._slides.add(e),this.multilist&&this._slides.length<=this.itemsPerSlide&&(e.active=!0),this.multilist||1!==this._slides.length||(this._currentActiveSlide=void 0,this.activeSlide=0,this.play()),this.multilist&&this._slides.length>this.itemsPerSlide&&this.play()}removeSlide(e){const t=this._slides.indexOf(e);if(this._currentActiveSlide===t){let e;this._slides.length>1&&(e=this.isLast(t)?this.noWrap?t-1:0:t),this._slides.remove(t),setTimeout(()=>{this._select(e)},0)}else{this._slides.remove(t);const e=this.getCurrentSlideIndex();setTimeout(()=>{this._currentActiveSlide=e,this.activeSlideChange.emit(this._currentActiveSlide)},0)}}nextSlideFromInterval(e=!1){this.move(p.NEXT,e)}nextSlide(e=!1){this.isPlaying&&this.restartTimer(),this.move(p.NEXT,e)}previousSlide(e=!1){this.isPlaying&&this.restartTimer(),this.move(p.PREV,e)}getFirstVisibleIndex(){return this.slides.findIndex(this.getActive)}getLastVisibleIndex(){return function(e,t){let i=e.length;for(;i--;)if(t(e[i],i,e))return i;return-1}(this.slides,this.getActive)}move(e,t=!1){const i=this.getFirstVisibleIndex(),n=this.getLastVisibleIndex();this.noWrap&&(e===p.NEXT&&this.isLast(n)||e===p.PREV&&0===i)||(this.multilist?this.moveMultilist(e):this.activeSlide=this.findNextSlideIndex(e,t))}selectSlide(e){this.isPlaying&&this.restartTimer(),this.multilist?this.selectSlideRange(this.indicatorsByChunk?e*this.itemsPerSlide:e):this.activeSlide=this.indicatorsByChunk?e*this.itemsPerSlide:e}play(){this.isPlaying||(this.isPlaying=!0,this.restartTimer())}pause(){this.noPause||(this.isPlaying=!1,this.resetTimer())}getCurrentSlideIndex(){return this._slides.findIndex(this.getActive)}isLast(e){return e+1>=this._slides.length}isFirst(e){return 0===e}indicatorsSlides(){return this.slides.filter((e,t)=>!this.indicatorsByChunk||t%this.itemsPerSlide==0)}selectInitialSlides(){const e=this.startFromIndex<=this._slides.length?this.startFromIndex:0;if(this.hideSlides(),this.singleSlideOffset){if(this._slidesWithIndexes=this.mapSlidesAndIndexes(),this._slides.length-e<this.itemsPerSlide){const t=this._slidesWithIndexes.slice(0,e);this._slidesWithIndexes=[...this._slidesWithIndexes,...t].slice(t.length).slice(0,this.itemsPerSlide)}else this._slidesWithIndexes=this._slidesWithIndexes.slice(e,e+this.itemsPerSlide);this._slidesWithIndexes.forEach(e=>e.item.active=!0),this.makeSlidesConsistent(this._slidesWithIndexes)}else this.selectRangeByNestedIndex(e);this.slideRangeChange.emit(this.getVisibleIndexes())}findNextSlideIndex(e,t){let i=0;if(t||!this.isLast(this.activeSlide)||e===p.PREV||!this.noWrap){switch(e){case p.NEXT:i=this.isLast(this._currentActiveSlide)?!t&&this.noWrap?this._currentActiveSlide:0:this._currentActiveSlide+1;break;case p.PREV:i=this._currentActiveSlide>0?this._currentActiveSlide-1:!t&&this.noWrap?this._currentActiveSlide:this._slides.length-1;break;default:throw new Error("Unknown direction")}return i}}mapSlidesAndIndexes(){return this.slides.slice().map((e,t)=>({index:t,item:e}))}selectSlideRange(e){if(!this.isIndexInRange(e)){if(this.hideSlides(),this.singleSlideOffset){const t=this.isIndexOnTheEdges(e)?e:e-this.itemsPerSlide+1,i=this.isIndexOnTheEdges(e)?e+this.itemsPerSlide:e+1;this._slidesWithIndexes=this.mapSlidesAndIndexes().slice(t,i),this.makeSlidesConsistent(this._slidesWithIndexes),this._slidesWithIndexes.forEach(e=>e.item.active=!0)}else this.selectRangeByNestedIndex(e);this.slideRangeChange.emit(this.getVisibleIndexes())}}selectRangeByNestedIndex(e){const t=this._chunkedSlides.map((e,t)=>({index:t,list:e})).find(t=>void 0!==t.list.find(t=>t.index===e));this._currentVisibleSlidesIndex=t.index,this._chunkedSlides[t.index].forEach(e=>{e.item.active=!0})}isIndexOnTheEdges(e){return e+1-this.itemsPerSlide<=0||e+this.itemsPerSlide<=this._slides.length}isIndexInRange(e){return this.singleSlideOffset?this._slidesWithIndexes.map(e=>e.index).indexOf(e)>=0:e<=this.getLastVisibleIndex()&&e>=this.getFirstVisibleIndex()}hideSlides(){this.slides.forEach(e=>e.active=!1)}isVisibleSlideListLast(){return this._currentVisibleSlidesIndex===this._chunkedSlides.length-1}isVisibleSlideListFirst(){return 0===this._currentVisibleSlidesIndex}moveSliderByOneItem(e){let t,i,n,s;if(this.noWrap){t=this.getFirstVisibleIndex(),i=this.getLastVisibleIndex(),n=e===p.NEXT?t:i,s=e!==p.NEXT?t-1:this.isLast(i)?0:i+1,this._slides.get(n).active=!1,this._slides.get(s).active=!0;const r=this.mapSlidesAndIndexes().filter(e=>e.item.active);this.makeSlidesConsistent(r),this.slideRangeChange.emit(this.getVisibleIndexes())}else{let n;t=this._slidesWithIndexes[0].index,i=this._slidesWithIndexes[this._slidesWithIndexes.length-1].index,e===p.NEXT?(this._slidesWithIndexes.shift(),n=this.isLast(i)?0:i+1,this._slidesWithIndexes.push({index:n,item:this._slides.get(n)})):(this._slidesWithIndexes.pop(),n=this.isFirst(t)?this._slides.length-1:t-1,this._slidesWithIndexes=[{index:n,item:this._slides.get(n)},...this._slidesWithIndexes]),this.hideSlides(),this._slidesWithIndexes.forEach(e=>e.item.active=!0),this.makeSlidesConsistent(this._slidesWithIndexes),this.slideRangeChange.emit(this._slidesWithIndexes.map(e=>e.index))}}moveMultilist(e){this.singleSlideOffset?this.moveSliderByOneItem(e):(this.hideSlides(),this._currentVisibleSlidesIndex=this.noWrap?e===p.NEXT?this._currentVisibleSlidesIndex+1:this._currentVisibleSlidesIndex-1:e===p.NEXT?this.isVisibleSlideListLast()?0:this._currentVisibleSlidesIndex+1:this.isVisibleSlideListFirst()?this._chunkedSlides.length-1:this._currentVisibleSlidesIndex-1,this._chunkedSlides[this._currentVisibleSlidesIndex].forEach(e=>e.item.active=!0),this.slideRangeChange.emit(this.getVisibleIndexes()))}getVisibleIndexes(){return this.singleSlideOffset?this._slidesWithIndexes.map(e=>e.index):this._chunkedSlides[this._currentVisibleSlidesIndex].map(e=>e.index)}_select(e){if(isNaN(e))return void this.pause();if(!this.multilist){const e=this._slides.get(this._currentActiveSlide);e&&(e.active=!1)}const t=this._slides.get(e);t&&(this._currentActiveSlide=e,t.active=!0,this.activeSlide=e,this.activeSlideChange.emit(e))}restartTimer(){this.resetTimer();const e=+this.interval;!isNaN(e)&&e>0&&(this.currentInterval=this.ngZone.runOutsideAngular(()=>setInterval(()=>{const e=+this.interval;this.ngZone.run(()=>{this.isPlaying&&!isNaN(this.interval)&&e>0&&this.slides.length?this.nextSlideFromInterval():this.pause()})},e)))}get multilist(){return this.itemsPerSlide>1}resetTimer(){this.currentInterval&&(clearInterval(this.currentInterval),this.currentInterval=void 0)}}return e.\u0275fac=function(t){return new(t||e)(n["\u0275\u0275directiveInject"](u),n["\u0275\u0275directiveInject"](n.NgZone))},e.\u0275cmp=n["\u0275\u0275defineComponent"]({type:e,selectors:[["carousel"]],inputs:{indicatorsByChunk:"indicatorsByChunk",itemsPerSlide:"itemsPerSlide",singleSlideOffset:"singleSlideOffset",startFromIndex:"startFromIndex",activeSlide:"activeSlide",interval:"interval",noWrap:"noWrap",noPause:"noPause",showIndicators:"showIndicators"},outputs:{activeSlideChange:"activeSlideChange",slideRangeChange:"slideRangeChange"},ngContentSelectors:h,decls:6,vars:6,consts:[[1,"carousel","slide",3,"mouseenter","mouseleave","mouseup"],["class","carousel-indicators",4,"ngIf"],[1,"carousel-inner",3,"ngStyle"],["class","left carousel-control carousel-control-prev",3,"disabled","click",4,"ngIf"],["class","right carousel-control carousel-control-next",3,"disabled","click",4,"ngIf"],[1,"carousel-indicators"],[3,"active","click",4,"ngFor","ngForOf"],[3,"click"],[1,"left","carousel-control","carousel-control-prev",3,"click"],["aria-hidden","true",1,"icon-prev","carousel-control-prev-icon"],["class","sr-only",4,"ngIf"],[1,"sr-only"],[1,"right","carousel-control","carousel-control-next",3,"click"],["aria-hidden","true",1,"icon-next","carousel-control-next-icon"]],template:function(e,t){1&e&&(n["\u0275\u0275projectionDef"](),n["\u0275\u0275elementStart"](0,"div",0),n["\u0275\u0275listener"]("mouseenter",function(){return t.pause()})("mouseleave",function(){return t.play()})("mouseup",function(){return t.play()}),n["\u0275\u0275template"](1,l,2,1,"ol",1),n["\u0275\u0275elementStart"](2,"div",2),n["\u0275\u0275projection"](3),n["\u0275\u0275elementEnd"](),n["\u0275\u0275template"](4,o,3,3,"a",3),n["\u0275\u0275template"](5,c,4,2,"a",4),n["\u0275\u0275elementEnd"]()),2&e&&(n["\u0275\u0275advance"](1),n["\u0275\u0275property"]("ngIf",t.showIndicators&&t.slides.length>1),n["\u0275\u0275advance"](1),n["\u0275\u0275property"]("ngStyle",n["\u0275\u0275pureFunction1"](4,m,t.multilist?"flex":"block")),n["\u0275\u0275advance"](2),n["\u0275\u0275property"]("ngIf",t.slides.length>1),n["\u0275\u0275advance"](1),n["\u0275\u0275property"]("ngIf",t.slides.length>1))},directives:[r.NgIf,r.NgStyle,r.NgForOf],encapsulation:2}),e})(),v=(()=>{class e{constructor(e){this.itemWidth="100%",this.order=0,this.addClass=!0,this.carousel=e}ngOnInit(){this.carousel.addSlide(this),this.itemWidth=100/this.carousel.itemsPerSlide+"%"}ngOnDestroy(){this.carousel.removeSlide(this)}}return e.\u0275fac=function(t){return new(t||e)(n["\u0275\u0275directiveInject"](g))},e.\u0275cmp=n["\u0275\u0275defineComponent"]({type:e,selectors:[["slide"]],hostVars:11,hostBindings:function(e,t){2&e&&(n["\u0275\u0275attribute"]("aria-hidden",!t.active),n["\u0275\u0275styleProp"]("width",t.itemWidth)("order",t.order),n["\u0275\u0275classProp"]("item",t.addClass)("carousel-item",t.addClass)("active",t.active))},inputs:{active:"active"},ngContentSelectors:h,decls:2,vars:2,consts:[[1,"item"]],template:function(e,t){1&e&&(n["\u0275\u0275projectionDef"](),n["\u0275\u0275elementStart"](0,"div",0),n["\u0275\u0275projection"](1),n["\u0275\u0275elementEnd"]()),2&e&&n["\u0275\u0275classProp"]("active",t.active)},encapsulation:2}),e})(),f=(()=>{class e{static forRoot(){return{ngModule:e,providers:[]}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=n["\u0275\u0275defineInjector"]({providers:[u],imports:[[r.CommonModule]]}),e})()},ejuq:function(e,t,i){"use strict";i.r(t),i.d(t,"HomeModule",function(){return C});var n=i("cUpR"),s=i("SVse"),r=i("Sf1D"),a=i("rqDK"),l=i("H56Y"),d=i("AytR"),o=i("8Y7J"),c=i("iInd"),m=i("EApP"),h=i("Osdn"),u=i("oTEC");const p=function(e){return["/",e]};function g(e,t){if(1&e&&(o["\u0275\u0275elementContainerStart"](0),o["\u0275\u0275elementStart"](1,"div",43),o["\u0275\u0275elementStart"](2,"a",44),o["\u0275\u0275pipe"](3,"removeWhiteSpaces"),o["\u0275\u0275pipe"](4,"lowercase"),o["\u0275\u0275elementStart"](5,"div",45),o["\u0275\u0275element"](6,"img",46),o["\u0275\u0275elementStart"](7,"div",47),o["\u0275\u0275text"](8),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit;o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("routerLink",o["\u0275\u0275pureFunction1"](7,p,o["\u0275\u0275pipeBind1"](3,3,o["\u0275\u0275pipeBind1"](4,5,e.name)))),o["\u0275\u0275advance"](4),o["\u0275\u0275propertyInterpolate"]("src",e.image,o["\u0275\u0275sanitizeUrl"]),o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate"](e.name)}}function v(e,t){if(1&e){const e=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"li"),o["\u0275\u0275elementStart"](1,"a",48),o["\u0275\u0275listener"]("click",function(){o["\u0275\u0275restoreView"](e);const i=t.$implicit;return o["\u0275\u0275nextContext"]().filterSelection(i.name)}),o["\u0275\u0275text"](2),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit,i=o["\u0275\u0275nextContext"]();o["\u0275\u0275advance"](1),o["\u0275\u0275classProp"]("active",i.activeNav==e.name),o["\u0275\u0275advance"](1),o["\u0275\u0275textInterpolate"](e.name)}}const f=function(e,t){return["/",e,t]};function S(e,t){if(1&e&&(o["\u0275\u0275elementContainerStart"](0),o["\u0275\u0275elementStart"](1,"div",49),o["\u0275\u0275elementStart"](2,"a",44),o["\u0275\u0275pipe"](3,"removeWhiteSpaces"),o["\u0275\u0275pipe"](4,"lowercase"),o["\u0275\u0275elementStart"](5,"div",23),o["\u0275\u0275elementStart"](6,"div",50),o["\u0275\u0275elementStart"](7,"span"),o["\u0275\u0275text"](8),o["\u0275\u0275pipe"](9,"titlecase"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](10,"img",51),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](11,"div",52),o["\u0275\u0275elementStart"](12,"h4",27),o["\u0275\u0275text"](13),o["\u0275\u0275pipe"](14,"titlecase"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](15,"div",53),o["\u0275\u0275element"](16,"i",54),o["\u0275\u0275text"](17),o["\u0275\u0275pipe"](18,"number"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit;o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("routerLink",o["\u0275\u0275pureFunction2"](15,f,e.profession,o["\u0275\u0275pipeBind1"](3,5,o["\u0275\u0275pipeBind1"](4,7,e.name+"-"+e._id)))),o["\u0275\u0275advance"](6),o["\u0275\u0275textInterpolate"](o["\u0275\u0275pipeBind1"](9,9,e.profession)),o["\u0275\u0275advance"](2),o["\u0275\u0275propertyInterpolate"]("src",e.artistImage,o["\u0275\u0275sanitizeUrl"]),o["\u0275\u0275advance"](3),o["\u0275\u0275textInterpolate"](o["\u0275\u0275pipeBind1"](14,11,e.name)),o["\u0275\u0275advance"](4),o["\u0275\u0275textInterpolate1"](" ",o["\u0275\u0275pipeBind1"](18,13,e.artistPrice),"")}}const x=function(){return["/musicians"]},b=function(){return["/singers"]},E=function(){return["/lyricist"]},I=function(){return["/composers"]};let y=(()=>{class e{constructor(e,t,i,n,s,r,a,o,c){this.jwtService=e,this.globalService=t,this.router=i,this.toastr=n,this.categoryService=s,this.artistService=r,this.canonicalService=a,this.metaServicesService=o,this.title=c,this.currentUser=new l.a,this.allArtistData=[],this.artistList=[],this.categoryList=[],this.activeNav="all",this.noWrapSlides=!1,this.showIndicator=!0,this.interval=3e3,this.baseUrl=d.a.baseUrl,this.metaData={title:"Home",description:"Surprised your loved ones with soothing energy rhythmdddd",keywords:"TypeScript, Angular",image:this.baseUrl+"assets/img/hero-banner-musicians.jpg",url:this.baseUrl+"home"},this.currentUser=this.jwtService.currentLoggedUserInfo,this.GetCategoryList(),this.getArtistList()}ngOnInit(){this.title.setTitle("Home | Celebs Worldwide"),this.canonicalService.setCanonicalURL("home"),this.metaServicesService.setPageMeta(this.metaData)}filterSelection(e){if("all"===e)this.artistList=this.allArtistData,this.activeNav=e;else{const t=this.allArtistData.filter(t=>(this.activeNav=e,t.profession.toLowerCase()===e.toLowerCase()));this.artistList=t}}GetCategoryList(){this.categoryService.getCategoryList().subscribe(e=>{200===e.status&&(this.categoryList=e.data,this.categoryList.unshift({name:"all"}))})}getArtistList(){this.artistService.getArtistList().subscribe(e=>{200===e.status&&(this.artistList=e.data,this.allArtistData=e.data)})}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275directiveInject"](r.f),o["\u0275\u0275directiveInject"](r.e),o["\u0275\u0275directiveInject"](c.e),o["\u0275\u0275directiveInject"](m.b),o["\u0275\u0275directiveInject"](r.d),o["\u0275\u0275directiveInject"](r.a),o["\u0275\u0275directiveInject"](a.a),o["\u0275\u0275directiveInject"](r.g),o["\u0275\u0275directiveInject"](n.d))},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["app-home"]],decls:122,vars:16,consts:[["data-interval","false","id","carouselindicators",1,"carousel","slide","slide-animated",3,"noWrap","showIndicators"],[2,"background-image","url('/assets/img/hero-banner-musicians.jpg')"],[1,"banner","banner-musicians","carousel-caption","d-flex","justify-content-center","align-items-center","flex-column"],[1,"banner-inner"],[1,"animate__slideInDown"],[1,"animate__slideInUp"],[1,"banner-btn_div","animate__slideInUp"],[1,"btn","btn-primary",3,"routerLink"],[2,"background-image","url('/assets/img/hero-banner-singers.jpg')"],[1,"banner","banner-singers","carousel-caption","d-flex","justify-content-center","align-items-center","flex-column"],[2,"background-image","url('/assets/img/hero-banner-lyricist.jpg')"],[1,"banner","banner-lyricist","carousel-caption","d-flex","justify-content-center","align-items-center","flex-column"],[2,"background-image","url('/assets/img/hero-banner-composers.jpg')"],[1,"wrapper"],[1,"menu-bg"],[1,"container"],[1,"row"],[4,"ngFor","ngForOf"],[1,"grid-1"],[1,"row","clip-3"],[1,"col-sm-12","col-md-6"],[1,"image-section"],["href","#"],[1,"cat-img"],["src","/assets/img/latest-releases-1.jpg"],[1,"head-section"],[1,"head-section-inner"],[1,"name"],[1,"sname"],[1,"col-md-6","col-sm-12"],[1,"col-sm-6"],[1,"image-sect"],["src","/assets/img/latest-releases-2.jpg"],["src","/assets/img/latest-releases-3.jpg"],[1,"row","space-g"],[1,"image"],["src","/assets/img/latest-releases-4.jpg"],["src","/assets/img/latest-releases-5.jpg"],[1,"grid"],[1,"col-sm-12"],["id","pills-tab","role","tablist",1,"nav","nav-pills","mb-20"],[1,""],[1,"row","clip-1"],[1,"col-md-3","col-6","mb-30"],[3,"routerLink"],[1,"image-4"],[3,"src"],[1,"talent"],[1,"nav-link",3,"click"],[1,"col-lg-3","col-md-4","col-sm-6","artist-category","show","mb-30","musicians"],[1,"profession"],["width","200px","height","200px",3,"src"],[1,"heading-section"],[1,"name","mb-0","text-nowrap"],["aria-hidden","true",1,"fa","fa-inr","fa-sm"]],template:function(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"carousel",0),o["\u0275\u0275elementStart"](1,"slide",1),o["\u0275\u0275elementStart"](2,"div",2),o["\u0275\u0275elementStart"](3,"div",3),o["\u0275\u0275elementStart"](4,"h1",4),o["\u0275\u0275text"](5,"Surprised your loved ones with soothing energy rhythm"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](6,"p",5),o["\u0275\u0275text"](7,"Book personal acoustic message to share the feeling with the right tune as per the occasion from your favorite music"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](8,"div",6),o["\u0275\u0275elementStart"](9,"a",7),o["\u0275\u0275text"](10,"Book Now"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](11,"slide",8),o["\u0275\u0275elementStart"](12,"div",9),o["\u0275\u0275elementStart"](13,"div",3),o["\u0275\u0275elementStart"](14,"h2",4),o["\u0275\u0275text"](15,"Gifts personalized message from your favorite singers"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](16,"p",5),o["\u0275\u0275text"](17,"Engage with your ideal singers for shoutout videos & messages to provide the unique & direct experience "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](18,"div",6),o["\u0275\u0275elementStart"](19,"a",7),o["\u0275\u0275text"](20,"Book Now"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](21,"slide",10),o["\u0275\u0275elementStart"](22,"div",11),o["\u0275\u0275elementStart"](23,"div",3),o["\u0275\u0275elementStart"](24,"h2",4),o["\u0275\u0275text"](25,"Share your special feeling for your special ones with special words"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](26,"p",5),o["\u0275\u0275text"](27,"Connect with your celebrity writers to draft your special messages with special words "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](28,"p"),o["\u0275\u0275elementStart"](29,"div",6),o["\u0275\u0275elementStart"](30,"a",7),o["\u0275\u0275text"](31,"Book Now"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](32,"slide",12),o["\u0275\u0275elementStart"](33,"div",11),o["\u0275\u0275elementStart"](34,"div",3),o["\u0275\u0275elementStart"](35,"h2",4),o["\u0275\u0275text"](36,"Deliver the perfect gifts, with perfect tunes"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](37,"p",5),o["\u0275\u0275text"](38,"Get composed your message from the famous music composers as per events nature"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](39,"div",6),o["\u0275\u0275elementStart"](40,"a",7),o["\u0275\u0275text"](41,"Book Now"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](42,"div",13),o["\u0275\u0275elementStart"](43,"div",14),o["\u0275\u0275elementStart"](44,"div",15),o["\u0275\u0275elementStart"](45,"div",16),o["\u0275\u0275template"](46,g,9,9,"ng-container",17),o["\u0275\u0275pipe"](47,"slice"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](48,"div",18),o["\u0275\u0275elementStart"](49,"div",15),o["\u0275\u0275elementStart"](50,"h2"),o["\u0275\u0275elementStart"](51,"span"),o["\u0275\u0275text"](52,"LATEST RELEASES"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](53,"hr"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](54,"div",19),o["\u0275\u0275elementStart"](55,"div",20),o["\u0275\u0275elementStart"](56,"div",21),o["\u0275\u0275elementStart"](57,"a",22),o["\u0275\u0275elementStart"](58,"div",23),o["\u0275\u0275element"](59,"img",24),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](60,"div",25),o["\u0275\u0275elementStart"](61,"div",26),o["\u0275\u0275elementStart"](62,"div",27),o["\u0275\u0275text"](63,"music video"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](64,"div",28),o["\u0275\u0275text"](65,"here comes the sun"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](66,"div",29),o["\u0275\u0275elementStart"](67,"div",16),o["\u0275\u0275elementStart"](68,"div",30),o["\u0275\u0275elementStart"](69,"div",31),o["\u0275\u0275elementStart"](70,"a",22),o["\u0275\u0275elementStart"](71,"div",23),o["\u0275\u0275element"](72,"img",32),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](73,"div",25),o["\u0275\u0275elementStart"](74,"div",26),o["\u0275\u0275elementStart"](75,"div",27),o["\u0275\u0275text"](76,"lyrics"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](77,"div",28),o["\u0275\u0275text"](78,"here comes the sun"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](79,"div",30),o["\u0275\u0275elementStart"](80,"div",31),o["\u0275\u0275elementStart"](81,"a",22),o["\u0275\u0275elementStart"](82,"div",23),o["\u0275\u0275element"](83,"img",33),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](84,"div",25),o["\u0275\u0275elementStart"](85,"div",26),o["\u0275\u0275elementStart"](86,"div",27),o["\u0275\u0275text"](87,"song"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](88,"div",28),o["\u0275\u0275text"](89,"across the universe"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](90,"div",34),o["\u0275\u0275elementStart"](91,"div",30),o["\u0275\u0275elementStart"](92,"div",35),o["\u0275\u0275elementStart"](93,"a",22),o["\u0275\u0275elementStart"](94,"div",23),o["\u0275\u0275element"](95,"img",36),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](96,"div",25),o["\u0275\u0275elementStart"](97,"div",26),o["\u0275\u0275elementStart"](98,"div",27),o["\u0275\u0275text"](99,"song"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](100,"div",28),o["\u0275\u0275text"](101,"eterna"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](102,"div",30),o["\u0275\u0275elementStart"](103,"div",35),o["\u0275\u0275elementStart"](104,"a",22),o["\u0275\u0275elementStart"](105,"div",23),o["\u0275\u0275element"](106,"img",37),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](107,"div",25),o["\u0275\u0275elementStart"](108,"div",26),o["\u0275\u0275elementStart"](109,"div",27),o["\u0275\u0275text"](110,"music video"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](111,"div",28),o["\u0275\u0275text"](112,"louder than words"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](113,"div",38),o["\u0275\u0275elementStart"](114,"div",15),o["\u0275\u0275elementStart"](115,"div",16),o["\u0275\u0275elementStart"](116,"div",39),o["\u0275\u0275elementStart"](117,"ul",40),o["\u0275\u0275template"](118,v,3,3,"li",17),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](119,"div",41),o["\u0275\u0275elementStart"](120,"div",42),o["\u0275\u0275template"](121,S,19,18,"ng-container",17),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()),2&e&&(o["\u0275\u0275property"]("noWrap",t.noWrapSlides)("showIndicators",t.showIndicator),o["\u0275\u0275advance"](9),o["\u0275\u0275property"]("routerLink",o["\u0275\u0275pureFunction0"](12,x)),o["\u0275\u0275advance"](10),o["\u0275\u0275property"]("routerLink",o["\u0275\u0275pureFunction0"](13,b)),o["\u0275\u0275advance"](11),o["\u0275\u0275property"]("routerLink",o["\u0275\u0275pureFunction0"](14,E)),o["\u0275\u0275advance"](10),o["\u0275\u0275property"]("routerLink",o["\u0275\u0275pureFunction0"](15,I)),o["\u0275\u0275advance"](6),o["\u0275\u0275property"]("ngForOf",o["\u0275\u0275pipeBind2"](47,9,t.categoryList,1)),o["\u0275\u0275advance"](72),o["\u0275\u0275property"]("ngForOf",t.categoryList),o["\u0275\u0275advance"](3),o["\u0275\u0275property"]("ngForOf",t.artistList))},directives:[h.a,h.c,c.h,s.NgForOf],pipes:[s.SlicePipe,u.a,s.LowerCasePipe,s.TitleCasePipe,s.DecimalPipe],styles:['@charset "UTF-8";.slide-animated slide.item{animation-duration:1s;animation-fill-mode:both}.slide-animated slide.item.active{width:100%;animation-name:carouselSlideIn}.slide-animated slide.item:not(.active){display:table-cell;animation-name:carouselSlideOut}@keyframes carouselSlideIn{0%{transform:translateX(100%)}to{transform:translateX(0)}}@keyframes carouselSlideOut{0%{transform:translateX(0)}to{transform:translateX(-100%)}}.carousel .carousel-inner{height:555px}@media screen and (max-width:575px){.carousel .carousel-inner{height:314px}}.carousel .carousel-item{height:555px;transition:transform .6s ease-in-out;background-size:cover;background-repeat:no-repeat}@media screen and (max-width:575px){.carousel .carousel-item{height:314px}}.carousel .carousel-item .banner{bottom:0;top:0;margin-top:auto;margin-bottom:auto}.carousel .carousel-item .banner .banner-inner{max-width:768px;width:100%;padding-left:30px;padding-right:30px;margin-left:auto;margin-right:auto}@media screen and (max-width:575px){.carousel .carousel-item .banner .banner-inner{padding-left:0;padding-right:0}}.carousel .carousel-item .banner .banner-inner h1,.carousel .carousel-item .banner .banner-inner h2{font-size:40px;font-weight:800}@media screen and (max-width:1199px){.carousel .carousel-item .banner .banner-inner h1,.carousel .carousel-item .banner .banner-inner h2{font-size:30px}}@media screen and (max-width:767px){.carousel .carousel-item .banner .banner-inner h1,.carousel .carousel-item .banner .banner-inner h2{font-size:20px}}.carousel .carousel-item .banner .banner-inner p{font-size:20px;padding-left:10px;padding-right:10px}@media screen and (max-width:767px){.carousel .carousel-item .banner .banner-inner p{font-size:15px}}@media screen and (max-width:479px){.carousel .carousel-item .banner .banner-inner p{font-size:13px}}.carousel .carousel-item .banner .banner-inner h1,.carousel .carousel-item .banner .banner-inner h2,.carousel .carousel-item .banner .banner-inner p{color:#fff;text-align:center;animation-duration:1.5s;animation-fill-mode:both}.carousel .carousel-item .banner .banner-inner .banner-btn_div{text-align:center;margin-top:45px;animation-duration:1.5s;animation-fill-mode:both}@media screen and (max-width:575px){.carousel .carousel-item .banner .banner-inner .banner-btn_div{margin-top:20px}}@media screen and (max-width:479px){.carousel .carousel-item .banner .banner-inner .banner-btn_div a{font-size:14px;min-width:120px}}.carousel .carousel-item .banner .banner-inner .banner-btn_div a:hover{text-decoration:none;color:#fff}.carousel .carousel-control-next,.carousel .carousel-control-prev{top:50%;background-color:#fff;border-radius:50%;width:30px;height:30px;display:flex;justify-content:center;align-items:center;cursor:pointer}.carousel .carousel-control-next span,.carousel .carousel-control-prev span{color:#000;font-size:20px;display:flex;justify-content:center;align-items:center}.carousel .carousel-control-next span:before,.carousel .carousel-control-prev span:before{font-family:FontAwesome}.carousel .carousel-control-next span.carousel-control-next-icon:before,.carousel .carousel-control-prev span.carousel-control-next-icon:before{content:"\uf105"}.carousel .carousel-control-next span.carousel-control-prev-icon:before,.carousel .carousel-control-prev span.carousel-control-prev-icon:before{content:"\uf104"}.carousel .carousel-control-prev{left:20px}.carousel .carousel-control-next{right:20px}.bg-light{background-color:transparent!important}.menu-bg{background-image:url(/assets/img/menu-bg.jpg);background-size:cover;padding-top:70px;padding-bottom:50px}.menu-bg .talent{color:#fff;text-align:center;background-color:#bf1f75;padding:7px;font-size:20px;cursor:pointer;font-weight:900;text-transform:capitalize}@media screen and (max-width:991px){.menu-bg .talent{font-size:18px}}@media screen and (max-width:767px){.menu-bg .talent{font-size:16px}}.grid-1{background-image:url(/assets/img/banner.jpg);color:#fff;padding-bottom:85px}.grid-1 h1,.grid-1 h2{font-size:20px;text-align:center;padding-top:70px}.grid-1 h1 hr,.grid-1 h2 hr{height:2px;width:10%;text-align:center;background-color:#33cb99;margin:5px auto 25px}.grid-1 .clip-3 .image,.grid-1 .clip-3 .image-sect,.grid-1 .clip-3 .image-section{position:relative}.grid-1 .clip-3 .image-sect a .cat-img,.grid-1 .clip-3 .image-section a .cat-img,.grid-1 .clip-3 .image a .cat-img{overflow:hidden}.grid-1 .clip-3 .image-sect a .cat-img img,.grid-1 .clip-3 .image-section a .cat-img img,.grid-1 .clip-3 .image a .cat-img img{transition:all .4s ease 0s}.grid-1 .clip-3 .image-sect a .head-section,.grid-1 .clip-3 .image-section a .head-section,.grid-1 .clip-3 .image a .head-section{position:absolute;bottom:0;top:0;width:100%;padding:5px 15px;text-align:left;background:#000;background:linear-gradient(0deg,rgba(0,0,0,.75),hsla(0,0%,100%,0));filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#ffffff",GradientType=1);display:flex;align-items:flex-end}@media only screen and (min-width:767.9px) and (max-width:1024px){.grid-1 .clip-3 .image-sect a .head-section,.grid-1 .clip-3 .image-section a .head-section,.grid-1 .clip-3 .image a .head-section{padding:5px 10px}}.grid-1 .clip-3 .image-sect a .head-section .name,.grid-1 .clip-3 .image-section a .head-section .name,.grid-1 .clip-3 .image a .head-section .name{font-size:9px;padding-top:7px;color:#c5bac5;text-transform:uppercase}.grid-1 .clip-3 .image-sect a .head-section .sname,.grid-1 .clip-3 .image-section a .head-section .sname,.grid-1 .clip-3 .image a .head-section .sname{font-size:15px;padding-bottom:7px;color:#fff;text-transform:capitalize}@media only screen and (min-width:767.9px) and (max-width:1024px){.grid-1 .clip-3 .image-sect a .head-section .sname,.grid-1 .clip-3 .image-section a .head-section .sname,.grid-1 .clip-3 .image a .head-section .sname{font-size:12px}}.grid-1 .clip-3 .image-sect a:hover img,.grid-1 .clip-3 .image-section a:hover img,.grid-1 .clip-3 .image a:hover img{transform:scale(1.1)}@media screen and (max-width:767px){.grid-1 .clip-3 .image-section{margin-bottom:20px}}@media screen and (max-width:575px){.grid-1 .clip-3 .image,.grid-1 .clip-3 .image-sect{margin-bottom:20px}}.grid-1 .clip-3 .space-g{padding-top:20px}@media screen and (max-width:575px){.grid-1 .clip-3 .space-g{padding-top:0}}.grid-1 .image-sect{margin-top:1px}#loader{background:#222}#loader,.loader{position:fixed;z-index:99;top:0;left:0;right:0;bottom:0;margin:auto}.loader{border:16px solid #f3f3f3;border-top-color:#3498db;border-radius:50%;width:120px;height:120px;animation:spin 2s linear infinite}@keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}'],encapsulation:2}),e})();const w=[{path:"",component:y,data:{title:"Title for Home Component"},pathMatch:"full"}];let _=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({imports:[[c.i.forChild(w)],c.i]}),e})();var k=i("s7LF");let C=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e,bootstrap:[y]}),e.\u0275inj=o["\u0275\u0275defineInjector"]({providers:[n.d],imports:[[s.CommonModule,k.c,r.h,_,h.b]]}),e})()},rqDK:function(e,t,i){"use strict";i.d(t,"a",function(){return a});var n=i("SVse"),s=i("AytR"),r=i("8Y7J");let a=(()=>{class e{constructor(e){this.dom=e,this.baseUrl=s.a.baseUrl}setCanonicalURL(e){const t=this.dom.getElementsByTagName("head")[0];let i=this.dom.querySelector("link[rel='canonical']")||null;null==i&&(i=this.dom.createElement("link"),t.appendChild(i)),i.setAttribute("rel","canonical"),i.setAttribute("href",this.baseUrl+e)}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](n.DOCUMENT))},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);