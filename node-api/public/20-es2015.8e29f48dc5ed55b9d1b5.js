(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{Oa48:function(e,t,r){"use strict";r.r(t),r.d(t,"RecoverPasswordModule",function(){return v});var n=r("SVse"),s=r("iInd"),o=r("Sf1D"),a=r("8Y7J"),i=r("EApP"),d=r("7g+E"),l=r("cUpR"),c=r("s7LF");function p(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"div",16),a["\u0275\u0275elementStart"](1,"p",17),a["\u0275\u0275text"](2),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&e){const e=a["\u0275\u0275nextContext"]();a["\u0275\u0275advance"](2),a["\u0275\u0275textInterpolate1"](" ",e.expiredLinkErrorMsg," ")}}function u(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"p",32),a["\u0275\u0275text"](1," Your password should be minimum 8 characters with 1 number and 1 upper case and 1 special character. "),a["\u0275\u0275elementEnd"]())}function m(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"p",32),a["\u0275\u0275text"](1),a["\u0275\u0275elementEnd"]()),2&e){const e=a["\u0275\u0275nextContext"](2);a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate1"](" ",e.errorMessage," ")}}function h(e,t){if(1&e){const e=a["\u0275\u0275getCurrentView"]();a["\u0275\u0275elementStart"](0,"div",18),a["\u0275\u0275elementStart"](1,"div",19),a["\u0275\u0275elementStart"](2,"div",20),a["\u0275\u0275elementStart"](3,"span",21),a["\u0275\u0275element"](4,"i",22),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](5,"input",23),a["\u0275\u0275listener"]("ngModelChange",function(t){return a["\u0275\u0275restoreView"](e),a["\u0275\u0275nextContext"]().userData.password=t})("ngModelChange",function(){a["\u0275\u0275restoreView"](e);const t=a["\u0275\u0275nextContext"]();return t.checkStrongPassword(t.userData.password)})("keypress",function(t){return a["\u0275\u0275restoreView"](e),a["\u0275\u0275nextContext"]().AvoidSpace(t)}),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](6,"div",24),a["\u0275\u0275listener"]("click",function(){a["\u0275\u0275restoreView"](e);const t=a["\u0275\u0275nextContext"]();return t.changeTextToPassword(t.passwordEncrypt.newPass,"newPass")}),a["\u0275\u0275elementStart"](7,"span",21),a["\u0275\u0275element"](8,"i",25),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275template"](9,u,2,0,"p",26),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](10,"div",27),a["\u0275\u0275elementStart"](11,"div",20),a["\u0275\u0275elementStart"](12,"span",21),a["\u0275\u0275element"](13,"i",22),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](14,"input",28),a["\u0275\u0275listener"]("ngModelChange",function(t){return a["\u0275\u0275restoreView"](e),a["\u0275\u0275nextContext"]().userData.confirmPassword=t})("keypress",function(t){return a["\u0275\u0275restoreView"](e),a["\u0275\u0275nextContext"]().AvoidSpace(t)}),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](15,"div",24),a["\u0275\u0275listener"]("click",function(){a["\u0275\u0275restoreView"](e);const t=a["\u0275\u0275nextContext"]();return t.changeTextToPassword(t.passwordEncrypt.confPass,"confPass")}),a["\u0275\u0275elementStart"](16,"span",21),a["\u0275\u0275element"](17,"i",25),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275template"](18,m,2,1,"p",26),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](19,"div",29),a["\u0275\u0275elementStart"](20,"button",30),a["\u0275\u0275text"](21,"Cancel"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](22,"button",31),a["\u0275\u0275listener"]("click",function(){return a["\u0275\u0275restoreView"](e),a["\u0275\u0275nextContext"]().recoverPassword()}),a["\u0275\u0275text"](23,"Continue "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()}if(2&e){const e=a["\u0275\u0275nextContext"]();a["\u0275\u0275advance"](5),a["\u0275\u0275property"]("type",e.passwordEncrypt.newPass)("ngModel",e.userData.password),a["\u0275\u0275advance"](4),a["\u0275\u0275property"]("ngIf",!e.validPassword),a["\u0275\u0275advance"](5),a["\u0275\u0275property"]("type",e.passwordEncrypt.confPass)("ngModel",e.userData.confirmPassword),a["\u0275\u0275advance"](4),a["\u0275\u0275property"]("ngIf",""!=e.userData.password&&""!=e.userData.confirmPassword&&e.userData.password!=e.userData.confirmPassword?e.errorMessage:"")}}const f=[{path:"",component:(()=>{class e{constructor(e,t,r,n,s,o,a){this.toastr=e,this.spinner=t,this.usersService=r,this.router=n,this.globalService=s,this.route=o,this.title=a,this.userData={password:"",confirmPassword:""},this.errorMessage="Your New password and confirmation password do not match ! Please check your new passowrd. it should be same.",this.validPassword=!0,this.userInfo={},this.expiredLinkErrorMsg="",this.passwordEncrypt={newPass:"password",confPass:"password"}}ngOnInit(){this.route.params.subscribe(e=>{this.userId=e.userId,this.link=e.token,this.userId&&this.link&&this.getUsersData()}),this.title.setTitle("Recover Password | Celebs Worldwide")}getUsersData(){this.expiredLinkErrorMsg="",this.spinner.show(),this.usersService.getUserInfo({_id:this.userId,forgotLink:this.link}).subscribe(e=>{200===e.status?(this.userInfo=e.data,this.userInfo.forgotLink||(this.expiredLinkErrorMsg="Forgot Password Link has been expired. Please check link or again you can request for forgot password!"),this.spinner.hide()):(this.spinner.hide(),this.expiredLinkErrorMsg="Forgot Password Link has been expired. Please check link or again you can request for forgot password!")},e=>{this.spinner.hide(),this.toastr.error("There are some server error. Please check connection.","Error")})}recoverPassword(){if(!this.userData.password)return this.toastr.error("Please enter your password.","Error"),!1;if(!this.userData.confirmPassword)return this.toastr.error("Please enter your confirm password.","Error"),!1;if(""!==this.userData.password&&""!==this.userData.confirmPassword&&this.userData.password!==this.userData.confirmPassword)return!1;if(!this.validPassword)return!1;const e={_id:this.userId,forgotLink:"",forgotStatus:0,password:this.userData.password};this.spinner.show(),this.usersService.saveInfo(e).subscribe(e=>{this.spinner.hide(),200===e.status&&(this.toastr.success("Your password has been changed successfully. Please login to continue.","Success"),setTimeout(()=>{this.router.navigate(["/login"])},1e3))},e=>{this.spinner.hide(),this.toastr.error("There are some server error. Please check connection.","Error")})}AvoidSpace(e){if(32===(e?e.which:e.keyCode))return!1}checkStrongPassword(e){this.validPassword=!e||this.globalService.strongPassword(e)}changeTextToPassword(e,t){this.passwordEncrypt[t]="password"===e?"text":"password"}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](i.b),a["\u0275\u0275directiveInject"](d.c),a["\u0275\u0275directiveInject"](o.i),a["\u0275\u0275directiveInject"](s.e),a["\u0275\u0275directiveInject"](o.e),a["\u0275\u0275directiveInject"](s.a),a["\u0275\u0275directiveInject"](l.d))},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["app-recover-password"]],decls:19,vars:2,consts:[[1,"app-body"],[1,"main","d-flex","align-items-center"],[1,"container"],[1,"row"],[1,"col-md-8","mx-auto"],[1,"card-group"],[1,"card","p-4","mb-0","login-section","position-relative"],[1,"d-flex","custom-border"],[1,"secondary-bg"],[1,"primary-bg"],["id","forgotTitle text-left"],[1,"pl-4"],[1,"card-title","text-center"],[1,"text-center"],["class","text-center p-1",4,"ngIf"],["class","card-body ",4,"ngIf"],[1,"text-center","p-1"],["role","alert",1,"alert","alert-danger","text-left",2,"font-family","initial","line-height","20px"],[1,"card-body"],[1,"input-group","mb-3"],[1,"input-group-prepend"],[1,"input-group-text"],[1,"fa","fa-lock"],["maxlength","15","id","newPass","placeholder","Enter new password",1,"form-control",3,"type","ngModel","ngModelChange","keypress"],[1,"input-group-prepend","cursor-pointer",3,"click"],[1,"fa","fa-eye"],["class","alert alert-danger text-left","role","alert",4,"ngIf"],[1,"input-group"],["maxlength","15","id","confPass","placeholder","Enter confirm password",1,"form-control",3,"type","ngModel","ngModelChange","keypress"],[1,"row","ml-0","mr-0","flex-nowrap","gray-border","pt-3"],["type","button","routerLink","/login",1,"btn","btn-default","px-4","mr-2","btn-square","btn-gray"],["type","button",1,"btn","btn-primary","px-4","mr-2","btn-square",3,"click"],["role","alert",1,"alert","alert-danger","text-left"]],template:function(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"div",0),a["\u0275\u0275elementStart"](1,"main",1),a["\u0275\u0275elementStart"](2,"div",2),a["\u0275\u0275elementStart"](3,"div",3),a["\u0275\u0275elementStart"](4,"div",4),a["\u0275\u0275elementStart"](5,"div",5),a["\u0275\u0275elementStart"](6,"div",6),a["\u0275\u0275elementStart"](7,"div",7),a["\u0275\u0275element"](8,"span",8),a["\u0275\u0275element"](9,"span",9),a["\u0275\u0275element"](10,"span",8),a["\u0275\u0275element"](11,"span",9),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](12,"h1",10),a["\u0275\u0275elementStart"](13,"span",11),a["\u0275\u0275text"](14,"Recover Your Password "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](15,"div",12),a["\u0275\u0275elementStart"](16,"div",13),a["\u0275\u0275template"](17,p,3,1,"div",14),a["\u0275\u0275elementEnd"](),a["\u0275\u0275template"](18,h,24,6,"div",15),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&e&&(a["\u0275\u0275advance"](17),a["\u0275\u0275property"]("ngIf",t.expiredLinkErrorMsg),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",!t.expiredLinkErrorMsg))},directives:[n.NgIf,c.b,c.d,c.g,c.j,s.f],styles:[""]}),e})(),data:{title:"Recover Password",pathMatch:"full"}}];let w=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({imports:[[s.i.forChild(f)],s.i]}),e})();var g=r("V07A");let v=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({imports:[[n.CommonModule,w,g.a,c.c,o.h]]}),e})()}}]);