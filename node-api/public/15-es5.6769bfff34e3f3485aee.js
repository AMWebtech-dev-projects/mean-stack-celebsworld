!function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"9fPw":function(e,r,a){"use strict";a.r(r),a.d(r,"SignupModule",function(){return A});var i=a("SVse"),l=a("iInd"),s=a("rqDK"),o=a("AytR"),d=a("Sf1D"),u=a("Tbvk"),m=a("H56Y"),c=function e(){n(this,e)},p=a("8Y7J"),h=a("EApP"),f=a("cUpR"),g=a("s7LF"),v=a("IDld");function y(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"p",28),p["\u0275\u0275text"](1," This Email Already Exists, please try another one. "),p["\u0275\u0275elementEnd"]())}function E(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"p",28),p["\u0275\u0275text"](1," Your email address is invalid. Please enter a valid address. "),p["\u0275\u0275elementEnd"]())}function S(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"p",28),p["\u0275\u0275text"](1," This Phone Number Already Exists, please try another one. "),p["\u0275\u0275elementEnd"]())}function b(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"p",28),p["\u0275\u0275text"](1," The password and confirmation password do not match ! "),p["\u0275\u0275elementEnd"]())}var D,w,N,x=function(e,t){return{"text-danger":e,"text-primary":t}},C=function(){return["/login"]},M=[{path:"",component:(D=function(){function e(t,r,a,i,l,s,o,d){n(this,e),this.usersService=t,this.toastr=r,this.router=a,this.jwtService=i,this.alertService=l,this.globalService=s,this.canonicalService=o,this.title=d,this.currentUser=new m.a,this.userDetails=new c,this.requiredValidate={firstName:"",lastName:"",email:"",phoneNumber:"",password:"",confirm_password:""},this.alreadyEmailValidation=!1,this.alreadyphoneNumberValidation=!1,this.validEmail=!0}return t(e,[{key:"ngOnInit",value:function(){this.currentUser=this.jwtService.currentLoggedUserInfo,this.currentUser&&this.currentUser.role&&this.router.navigate(this.currentUser.role===o.a.userType.admin?["/dashboard"]:["/home"]),this.title.setTitle("Signup | Celebs Worldwide"),this.canonicalService.setCanonicalURL("signup")}},{key:"doSignup",value:function(){var e=this,t=Object.keys(this.requiredValidate),n=this,r=t.filter(function(e){return!n.userDetails[e]});return!(this.alreadyEmailValidation||!this.validEmail||this.alreadyphoneNumberValidation)&&(this.userDetails.password!==this.userDetails.confirm_password||r.length?(this.alertService.error("*Please fill all mandatory fields!"),setTimeout(function(){e.alertService.clear()},5e3),!1):void this.usersService.doSignup({email:this.userDetails.email,firstName:this.userDetails.firstName,lastName:this.userDetails.lastName,phoneNumber:this.userDetails.phoneNumber,matching_passwords:{password:this.userDetails.password,confirm_password:this.userDetails.confirm_password},terms:!0,role:"user"}).subscribe(function(t){200===t.status?(e.toastr.success(t.message,"Success"),e.router.navigate(["/login"])):e.alertService.error(t.message)}))}},{key:"checkEmailAlreadyExists",value:function(e){var t=this;if(!this.validEmail)return this.alreadyEmailValidation=!1,this.validEmail;this.alreadyEmailValidation=!1,this.usersService.emailAndNumberAlreadyExits({email:e,table:"users"}).subscribe(function(e){t.alreadyEmailValidation=!(200!==e.status||!e.data.length)},function(e){t.alreadyEmailValidation=!1})}},{key:"checkNumberAlreadyExists",value:function(e){var t=this;this.alreadyphoneNumberValidation=!1,this.usersService.emailAndNumberAlreadyExits({phoneNumber:e,table:"users"}).subscribe(function(e){200===e.status&&e.data.length&&(t.alreadyphoneNumberValidation=!0)})}}]),e}(),D.\u0275fac=function(e){return new(e||D)(p["\u0275\u0275directiveInject"](d.i),p["\u0275\u0275directiveInject"](h.b),p["\u0275\u0275directiveInject"](l.e),p["\u0275\u0275directiveInject"](d.f),p["\u0275\u0275directiveInject"](u.a),p["\u0275\u0275directiveInject"](d.e),p["\u0275\u0275directiveInject"](s.a),p["\u0275\u0275directiveInject"](f.d))},D.\u0275cmp=p["\u0275\u0275defineComponent"]({type:D,selectors:[["app-signup"]],decls:57,vars:36,consts:[[1,"app-body"],[1,"main","d-flex","align-items-center"],[1,"container"],[1,"row","justify-content-center"],[1,"col-lg-6","col-md-8"],[1,"card","position-relative"],[1,"d-flex","custom-border"],[1,"secondary-bg"],[1,"primary-bg"],[1,"card-body","p-4","text-center"],[1,"text-muted"],[1,"input-group","mb-3"],[1,"input-group-prepend"],[1,"input-group-text",3,"ngClass"],[1,"icon-user"],["name","first","type","text","placeholder","First Name",1,"form-control",3,"ngModel","ngModelChange"],["name","lastName","type","text","placeholder","Last Name",1,"form-control",3,"ngModel","ngModelChange"],["name","email","type","text","placeholder","Email",1,"form-control",3,"ngModel","ngModelChange"],["class","alert alert-danger validation-font-size  text-left","role","alert",4,"ngIf"],["_ngcontent-huu-c140","",1,"icon-phone"],["maxlength","10","name","phoneNumber","type","text","placeholder","Contact Number",1,"form-control",3,"ngModel","ngModelChange","keypress"],[1,"icon-lock"],["name","password","type","password","placeholder","Password",1,"form-control",3,"ngModel","ngModelChange"],[1,"input-group","mb-4"],["name","confirm_password","type","password","placeholder","Repeat password",1,"form-control",3,"ngModel","ngModelChange"],["type","button",1,"btn","btn-block","btn-primary",3,"click"],[1,"text-center","mt-20"],["href","javascript:void(0)",1,"text-primary",3,"routerLink"],["role","alert",1,"alert","alert-danger","validation-font-size","text-left"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"div",0),p["\u0275\u0275elementStart"](1,"main",1),p["\u0275\u0275elementStart"](2,"div",2),p["\u0275\u0275elementStart"](3,"div",3),p["\u0275\u0275elementStart"](4,"div",4),p["\u0275\u0275elementStart"](5,"div",5),p["\u0275\u0275elementStart"](6,"div",6),p["\u0275\u0275element"](7,"span",7),p["\u0275\u0275element"](8,"span",8),p["\u0275\u0275element"](9,"span",7),p["\u0275\u0275element"](10,"span",8),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](11,"div",9),p["\u0275\u0275elementStart"](12,"h1"),p["\u0275\u0275text"](13,"Register"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](14,"p",10),p["\u0275\u0275text"](15,"Create your account"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](16,"div",11),p["\u0275\u0275elementStart"](17,"div",12),p["\u0275\u0275elementStart"](18,"span",13),p["\u0275\u0275element"](19,"i",14),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](20,"input",15),p["\u0275\u0275listener"]("ngModelChange",function(e){return t.userDetails.firstName=e}),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](21,"div",11),p["\u0275\u0275elementStart"](22,"div",12),p["\u0275\u0275elementStart"](23,"span",13),p["\u0275\u0275element"](24,"i",14),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](25,"input",16),p["\u0275\u0275listener"]("ngModelChange",function(e){return t.userDetails.lastName=e}),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](26,"div",11),p["\u0275\u0275elementStart"](27,"div",12),p["\u0275\u0275elementStart"](28,"span",13),p["\u0275\u0275text"](29,"@"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](30,"input",17),p["\u0275\u0275listener"]("ngModelChange",function(e){return t.userDetails.email=e})("ngModelChange",function(){return t.checkEmailAlreadyExists(t.userDetails.email)}),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275template"](31,y,2,0,"p",18),p["\u0275\u0275template"](32,E,2,0,"p",18),p["\u0275\u0275elementStart"](33,"div",11),p["\u0275\u0275elementStart"](34,"div",12),p["\u0275\u0275elementStart"](35,"span",13),p["\u0275\u0275element"](36,"i",19),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](37,"input",20),p["\u0275\u0275listener"]("ngModelChange",function(e){return t.userDetails.phoneNumber=e})("ngModelChange",function(){return t.checkNumberAlreadyExists(t.userDetails.phoneNumber)})("keypress",function(e){return e.charCode>=48&&e.charCode<58}),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275template"](38,S,2,0,"p",18),p["\u0275\u0275elementStart"](39,"div",11),p["\u0275\u0275elementStart"](40,"div",12),p["\u0275\u0275elementStart"](41,"span",13),p["\u0275\u0275element"](42,"i",21),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](43,"input",22),p["\u0275\u0275listener"]("ngModelChange",function(e){return t.userDetails.password=e}),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](44,"div",23),p["\u0275\u0275elementStart"](45,"div",12),p["\u0275\u0275elementStart"](46,"span",13),p["\u0275\u0275element"](47,"i",21),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](48,"input",24),p["\u0275\u0275listener"]("ngModelChange",function(e){return t.userDetails.confirm_password=e}),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275template"](49,b,2,0,"p",18),p["\u0275\u0275element"](50,"app-alert"),p["\u0275\u0275elementStart"](51,"button",25),p["\u0275\u0275listener"]("click",function(){return t.doSignup()}),p["\u0275\u0275text"](52,"Create Account"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](53,"br"),p["\u0275\u0275elementStart"](54,"div",26),p["\u0275\u0275elementStart"](55,"a",27),p["\u0275\u0275text"](56,"Already have an account!"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275advance"](18),p["\u0275\u0275property"]("ngClass",p["\u0275\u0275pureFunction2"](17,x,!(null!=t.userDetails&&t.userDetails.firstName),null==t.userDetails?null:t.userDetails.firstName)),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngModel",t.userDetails.firstName),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("ngClass",p["\u0275\u0275pureFunction2"](20,x,!(null!=t.userDetails&&t.userDetails.lastName),null==t.userDetails?null:t.userDetails.lastName)),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngModel",t.userDetails.lastName),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("ngClass",p["\u0275\u0275pureFunction2"](23,x,!(null!=t.userDetails&&t.userDetails.email),null==t.userDetails?null:t.userDetails.email)),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngModel",t.userDetails.email),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",t.alreadyEmailValidation),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",!t.validEmail),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("ngClass",p["\u0275\u0275pureFunction2"](26,x,!(null!=t.userDetails&&t.userDetails.phoneNumber),null==t.userDetails?null:t.userDetails.phoneNumber)),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngModel",t.userDetails.phoneNumber),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",t.alreadyphoneNumberValidation),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("ngClass",p["\u0275\u0275pureFunction2"](29,x,!(null!=t.userDetails&&t.userDetails.password),null==t.userDetails?null:t.userDetails.password)),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngModel",t.userDetails.password),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("ngClass",p["\u0275\u0275pureFunction2"](32,x,!(null!=t.userDetails&&t.userDetails.confirm_password),null==t.userDetails?null:t.userDetails.confirm_password)),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngModel",t.userDetails.confirm_password),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",t.userDetails.password&&t.userDetails.confirm_password&&t.userDetails.password!=t.userDetails.confirm_password),p["\u0275\u0275advance"](6),p["\u0275\u0275property"]("routerLink",p["\u0275\u0275pureFunction0"](35,C)))},directives:[i.NgClass,g.b,g.g,g.j,i.NgIf,g.d,v.a,l.h],styles:[".validation-font-size[_ngcontent-%COMP%]{font-size:14px!important;margin-top:-22px!important;padding:8px!important}"]}),D),pathMatch:"full"}],k=((w=function e(){n(this,e)}).\u0275fac=function(e){return new(e||w)},w.\u0275mod=p["\u0275\u0275defineNgModule"]({type:w}),w.\u0275inj=p["\u0275\u0275defineInjector"]({imports:[[l.i.forChild(M)],l.i]}),w),I=a("V07A"),j=a("KtxW"),A=((N=function e(){n(this,e)}).\u0275fac=function(e){return new(e||N)},N.\u0275mod=p["\u0275\u0275defineNgModule"]({type:N}),N.\u0275inj=p["\u0275\u0275defineInjector"]({providers:[],imports:[[i.CommonModule,k,I.a,j.a,g.c,d.h]]}),N)},rqDK:function(e,r,a){"use strict";a.d(r,"a",function(){return o});var i=a("SVse"),l=a("AytR"),s=a("8Y7J"),o=function(){var e=function(){function e(t){n(this,e),this.dom=t,this.baseUrl=l.a.baseUrl}return t(e,[{key:"setCanonicalURL",value:function(e){var t=this.dom.getElementsByTagName("head")[0],n=this.dom.querySelector("link[rel='canonical']")||null;null==n&&(n=this.dom.createElement("link"),t.appendChild(n)),n.setAttribute("rel","canonical"),n.setAttribute("href",this.baseUrl+e)}}]),e}();return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275inject"](i.DOCUMENT))},e.\u0275prov=s["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()}}])}();