(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"h+HL":function(e,t,n){"use strict";n.r(t),n.d(t,"ForgotPasswordModule",function(){return b});var r=n("SVse"),a=n("iInd"),s=n("rqDK"),i=n("Tbvk"),o=n("Sf1D"),l=n("8Y7J"),d=n("EApP"),c=n("7g+E"),m=n("cUpR"),u=n("s7LF");function p(e,t){1&e&&l["\u0275\u0275element"](0,"i",22)}const h=[{path:"",component:(()=>{class e{constructor(e,t,n,r,a,s,i){this.alertService=e,this.toastr=t,this.spinner=n,this.globalService=r,this.usersService=a,this.canonicalService=s,this.title=i,this.userData={email:""}}ngOnInit(){this.title.setTitle("Forgot Password | Celebs Worldwide"),this.canonicalService.setCanonicalURL("forgotpassword")}forgotPassword(){this.loading=!0,this.userData.email=this.userData.email.toLocaleLowerCase(),this.usersService.forgotPassword(this.userData).subscribe(e=>{200===e.status?(this.toastr.success("Please check your email, Reset password link has been sent.","Success"),this.errorMessage="",this.successMessage=e.message,this.userData={email:""},this.loading=!1):(this.toastr.error(e.message,"Error"),this.successMessage="",this.errorMessage=e.message,this.userData={email:""},this.loading=!1)},e=>{this.toastr.error("There are some server Please check connection.","Error")})}}return e.\u0275fac=function(t){return new(t||e)(l["\u0275\u0275directiveInject"](i.a),l["\u0275\u0275directiveInject"](d.b),l["\u0275\u0275directiveInject"](c.c),l["\u0275\u0275directiveInject"](o.e),l["\u0275\u0275directiveInject"](o.i),l["\u0275\u0275directiveInject"](s.a),l["\u0275\u0275directiveInject"](m.d))},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["app-forgot-password"]],decls:33,vars:5,consts:[[1,"app-body",2,"padding-top","150px !important"],[1,"main","d-flex","align-items-center"],[1,"container"],[1,"row"],[1,"col-md-6","mx-auto","p-1"],[1,"card","p-3","position-relative"],[1,"d-flex","custom-border"],[1,"secondary-bg"],[1,"primary-bg"],[1,"card-body"],["id","forgotTitle"],[1,""],[1,"input-group","mb-3"],[1,"input-group-prepend"],[1,"input-group-text"],[1,"fa","fa-envelope-o"],["type","email","placeholder","Email address","id","forgotEmail",1,"form-control",3,"ngModel","ngModelChange"],[1,"text-danger"],[1,"col"],["type","button",1,"btn","btn-primary","px-4",3,"disabled","click"],["loadingMessage","","class","fa fa-refresh fa-spin ml-2","aria-hidden","true",4,"ngIf"],["type","button","routerLink","/login",1,"btn","btn-secondary","px-4","m-2"],["loadingMessage","","aria-hidden","true",1,"fa","fa-refresh","fa-spin","ml-2"]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"div",0),l["\u0275\u0275elementStart"](1,"main",1),l["\u0275\u0275elementStart"](2,"div",2),l["\u0275\u0275elementStart"](3,"div",3),l["\u0275\u0275elementStart"](4,"div",4),l["\u0275\u0275elementStart"](5,"div",5),l["\u0275\u0275elementStart"](6,"div",6),l["\u0275\u0275element"](7,"span",7),l["\u0275\u0275element"](8,"span",8),l["\u0275\u0275element"](9,"span",7),l["\u0275\u0275element"](10,"span",8),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](11,"div",9),l["\u0275\u0275elementStart"](12,"h1",10),l["\u0275\u0275text"](13,"Forgot Password"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](14,"p",11),l["\u0275\u0275text"](15,"Enter the email address associated with your account to reset your password."),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](16,"div",12),l["\u0275\u0275elementStart"](17,"div",13),l["\u0275\u0275elementStart"](18,"span",14),l["\u0275\u0275element"](19,"i",15),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](20,"input",16),l["\u0275\u0275listener"]("ngModelChange",function(e){return t.userData.email=e}),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](21,"h6",17),l["\u0275\u0275text"](22),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](23,"h6",11),l["\u0275\u0275text"](24),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](25,"div",3),l["\u0275\u0275elementStart"](26,"div",18),l["\u0275\u0275elementStart"](27,"button",19),l["\u0275\u0275listener"]("click",function(){return t.forgotPassword()}),l["\u0275\u0275text"](28,"Continue "),l["\u0275\u0275elementStart"](29,"span"),l["\u0275\u0275template"](30,p,1,0,"i",20),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](31,"button",21),l["\u0275\u0275text"](32,"Cancel"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275advance"](20),l["\u0275\u0275property"]("ngModel",t.userData.email),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate"](t.errorMessage),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate"](t.successMessage),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("disabled",""==t.userData.email),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("ngIf",t.loading))},directives:[u.b,u.g,u.j,r.NgIf,a.f],styles:[""]}),e})(),data:{title:"Forgot Password"},pathMatch:"full"}];let g=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=l["\u0275\u0275defineInjector"]({imports:[[a.i.forChild(h)],a.i]}),e})();var f=n("V07A"),v=n("KtxW");let b=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=l["\u0275\u0275defineInjector"]({imports:[[r.CommonModule,g,f.a,v.a,u.c,o.h]]}),e})()},rqDK:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n("SVse"),a=n("AytR"),s=n("8Y7J");let i=(()=>{class e{constructor(e){this.dom=e,this.baseUrl=a.a.baseUrl}setCanonicalURL(e){const t=this.dom.getElementsByTagName("head")[0];let n=this.dom.querySelector("link[rel='canonical']")||null;null==n&&(n=this.dom.createElement("link"),t.appendChild(n)),n.setAttribute("rel","canonical"),n.setAttribute("href",this.baseUrl+e)}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275inject"](r.DOCUMENT))},e.\u0275prov=s["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);