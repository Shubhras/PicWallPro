(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{MMsv:function(t,e,l){"use strict";l.d(e,"a",function(){return n});var n=function(){function t(t,e){this._elementRef=t,this._renderer=e,this.flipped=!1}return t.prototype.ngAfterContentInit=function(){var t=this;setTimeout(function(){t.toggleButtons.forEach(function(e){t._renderer.listen(e.elementRef.nativeElement,"click",function(e){e.preventDefault(),e.stopPropagation(),t.toggle()})})})},t.prototype.toggle=function(){this.flipped=!this.flipped},t}()},pB8N:function(t,e,l){"use strict";l.r(e);var n=l("CcnG"),o=l("gIcY"),i=(l("6kGA"),l("P6uZ")),s=function(){function t(t,e,l,n){this.fb=t,this.dialog=e,this.userService=l,this.alertService=n,this.color="blue",this.message="Empty",this.selectedColor="blue",this.msg="",this.fg=this.fb.group({color:[this.color,o.y.required]})}return t.prototype.detectFiles=function(t){this.selectedFiles=t.target.files,this.fileName=this.selectedFiles[0].name,console.log("selectedFiles: "+this.fileName)},t.prototype.selectFile=function(t){var e=this;if(t.target.files[0]&&0!=t.target.files[0].length)if(null!=t.target.files[0].type.match(/image\/*/)){var l=new FileReader;l.readAsDataURL(t.target.files[0]),l.onload=function(t){e.msg="",e.url=l.result}}else this.msg="Only images are supported";else this.msg="You must select an image"},t.prototype.ngOnInit=function(){this.currentUser=JSON.parse(localStorage.getItem("currentUser")),this.company_id=this.currentUser.data.company_id,this.getColor()},t.prototype.addColor=function(t){var e=this;"blue"==t?alert("please select a color"):(console.log("kkkkkk",t),console.log("\nkkkkkk",t.toString(16)),this.userService.addColorCode(t,this.company_id).pipe(Object(i.a)()).subscribe(function(t){200==t.status_code?(e.MessageSuccess=t,e.getColor(),e.alertService.success(e.MessageSuccess.message,!0)):(e.MessageError=t,e.alertService.error(e.MessageError.message,!0))},function(t){e.alertService.error(t)}))},t.prototype.getColor=function(){var t=this;this.userService.getColorCode(this.company_id).pipe(Object(i.a)()).subscribe(function(e){e.data&&(t.colorData=e.data,console.log("color code:",t.colorData.code))},function(e){t.alertService.error(e)})},t}(),a=function(){return function(){}}(),p=l("pMnS"),u=l("t68o"),r=l("D2NE"),d=l("7Z8E"),m=l("NcP4"),c=l("zbXB"),f=l("21Lb"),y=l("OzfB"),g=l("seP3"),b=l("Ip0R"),v=l("wYp6"),h=l("MMsv"),x=l("bujt"),w=l("UodH"),k=l("dWZg"),C=l("lLAP"),R=l("wFw1"),E=l("P8j/"),I=l("o3x0"),S=l("la9Q"),_=l("8MOy"),M=n["\u0275crt"]({encapsulation:2,styles:[["@media only screen and (min-width:1200px){.mat-dialog-container{min-width:449px!important}}#unit-change .mat-cell-name,#unit-change .mat-header-name{text-align:left;padding-left:3px}#unit-change .mat-header-action{padding-right:0;width:70px}#unit-change .mat-cell-action{padding-right:2px}#unit-change .mat-icon-edit{font-size:18px;min-height:25px;height:25px;border-radius:4px;background-color:#3972b9e8;color:#fff;margin-left:4px}#unit-change .mat-icon-clear{font-size:18px;min-height:25px;height:25px;border-radius:4px;background-color:#f44336;color:#fff;margin-left:4px}@media (min-width:601px) and (max-width:767px){.addunit-dial .mat-dialog-container{min-width:309px!important}}@media (min-width:1101px) and (max-width:1199px){.addunit-dial .mat-dialog-container{min-width:449px!important}}.add_icon{float:right;margin-right:-90px;margin-top:35px;font-size:39px}.form-control1{width:240px;height:49px;margin-left:4px}.header-field-activate{width:539px;height:74px;border:1px solid #e7e4e4;border-radius:5px;padding:14px;margin-top:20px}.btn-light{width:200px;background-color:#1c5e97}.input-width{width:250px}img.upload_branding_img{width:150px;padding-top:10%;margin-left:10%}.hi{width:150px;height:150px;background:#000;margin:10px;color:#fff;padding:20px}input[type=file]{display:none}.fileUpload1 input.upload1{display:inline-block}button.form-control1.upload-button1{background-color:#2372bb;color:#ffff}.output1{text-align:center;margin-left:-60px}.content.all-pages-content .right{display:flex;flex:0 0 auto;width:189px;min-width:204px;max-width:318px}"]],data:{animation:[{type:7,name:"animate",definitions:[{type:1,expr:"void => *",animation:[{type:10,animation:{type:8,animation:[{type:6,styles:{opacity:"{{opacity}}",transform:"scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})"},offset:null},{type:4,styles:{type:6,styles:"*",offset:null},timings:"{{duration}} {{delay}} cubic-bezier(0.0, 0.0, 0.2, 1)"}],options:{params:{duration:"200ms",delay:"0ms",opacity:"0",scale:"1",x:"0",y:"0",z:"0"}}},options:null}],options:null}],options:{}},{type:7,name:"animateStagger",definitions:[{type:0,name:"50",styles:{type:6,styles:"*",offset:null},options:void 0},{type:0,name:"100",styles:{type:6,styles:"*",offset:null},options:void 0},{type:0,name:"200",styles:{type:6,styles:"*",offset:null},options:void 0},{type:1,expr:"void => 50",animation:{type:11,selector:"@*",animation:[{type:12,timings:"50ms",animation:[{type:9,options:null}]}],options:{optional:!0}},options:null},{type:1,expr:"void => 100",animation:{type:11,selector:"@*",animation:[{type:12,timings:"100ms",animation:[{type:9,options:null}]}],options:{optional:!0}},options:null},{type:1,expr:"void => 200",animation:{type:11,selector:"@*",animation:[{type:12,timings:"200ms",animation:[{type:9,options:null}]}],options:{optional:!0}},options:null}],options:{}},{type:7,name:"fadeInOut",definitions:[{type:0,name:"0",styles:{type:6,styles:{display:"none",opacity:0},offset:null},options:void 0},{type:0,name:"1",styles:{type:6,styles:{display:"block",opacity:1},offset:null},options:void 0},{type:1,expr:"1 => 0",animation:{type:4,styles:null,timings:"300ms ease-out"},options:null},{type:1,expr:"0 => 1",animation:{type:4,styles:null,timings:"300ms ease-in"},options:null}],options:{}},{type:7,name:"slideInOut",definitions:[{type:0,name:"0",styles:{type:6,styles:{height:"0px",display:"none"},offset:null},options:void 0},{type:0,name:"1",styles:{type:6,styles:{height:"*",display:"block"},offset:null},options:void 0},{type:1,expr:"1 => 0",animation:{type:4,styles:null,timings:"300ms ease-out"},options:null},{type:1,expr:"0 => 1",animation:{type:4,styles:null,timings:"300ms ease-in"},options:null}],options:{}},{type:7,name:"slideIn",definitions:[{type:1,expr:"void => left",animation:[{type:6,styles:{transform:"translateX(100%)"},offset:null},{type:4,styles:{type:6,styles:{transform:"translateX(0)"},offset:null},timings:"300ms ease-in"}],options:null},{type:1,expr:"left => void",animation:[{type:6,styles:{transform:"translateX(0)"},offset:null},{type:4,styles:{type:6,styles:{transform:"translateX(-100%)"},offset:null},timings:"300ms ease-in"}],options:null},{type:1,expr:"void => right",animation:[{type:6,styles:{transform:"translateX(-100%)"},offset:null},{type:4,styles:{type:6,styles:{transform:"translateX(0)"},offset:null},timings:"300ms ease-in"}],options:null},{type:1,expr:"right => void",animation:[{type:6,styles:{transform:"translateX(0)"},offset:null},{type:4,styles:{type:6,styles:{transform:"translateX(100%)"},offset:null},timings:"300ms ease-in"}],options:null}],options:{}},{type:7,name:"slideInLeft",definitions:[{type:0,name:"void",styles:{type:6,styles:{transform:"translateX(-100%)",display:"none"},offset:null},options:void 0},{type:0,name:"*",styles:{type:6,styles:{transform:"translateX(0)",display:"flex"},offset:null},options:void 0},{type:1,expr:"void => *",animation:{type:4,styles:null,timings:"300ms"},options:null},{type:1,expr:"* => void",animation:{type:4,styles:null,timings:"300ms"},options:null}],options:{}},{type:7,name:"slideInRight",definitions:[{type:0,name:"void",styles:{type:6,styles:{transform:"translateX(100%)",display:"none"},offset:null},options:void 0},{type:0,name:"*",styles:{type:6,styles:{transform:"translateX(0)",display:"flex"},offset:null},options:void 0},{type:1,expr:"void => *",animation:{type:4,styles:null,timings:"300ms"},options:null},{type:1,expr:"* => void",animation:{type:4,styles:null,timings:"300ms"},options:null}],options:{}},{type:7,name:"slideInTop",definitions:[{type:0,name:"void",styles:{type:6,styles:{transform:"translateY(-100%)",display:"none"},offset:null},options:void 0},{type:0,name:"*",styles:{type:6,styles:{transform:"translateY(0)",display:"flex"},offset:null},options:void 0},{type:1,expr:"void => *",animation:{type:4,styles:null,timings:"300ms"},options:null},{type:1,expr:"* => void",animation:{type:4,styles:null,timings:"300ms"},options:null}],options:{}},{type:7,name:"slideInBottom",definitions:[{type:0,name:"void",styles:{type:6,styles:{transform:"translateY(100%)",display:"none"},offset:null},options:void 0},{type:0,name:"*",styles:{type:6,styles:{transform:"translateY(0)",display:"flex"},offset:null},options:void 0},{type:1,expr:"void => *",animation:{type:4,styles:null,timings:"300ms"},options:null},{type:1,expr:"* => void",animation:{type:4,styles:null,timings:"300ms"},options:null}],options:{}},{type:7,name:"expandCollapse",definitions:[{type:0,name:"void",styles:{type:6,styles:{height:"0px"},offset:null},options:void 0},{type:0,name:"*",styles:{type:6,styles:{height:"*"},offset:null},options:void 0},{type:1,expr:"void => *",animation:{type:4,styles:null,timings:"300ms ease-out"},options:null},{type:1,expr:"* => void",animation:{type:4,styles:null,timings:"300ms ease-in"},options:null}],options:{}},{type:7,name:"routerTransitionLeft",definitions:[{type:1,expr:"* => *",animation:[{type:11,selector:"content > :enter, content > :leave",animation:[{type:6,styles:{position:"absolute",top:0,bottom:0,left:0,right:0},offset:null}],options:{optional:!0}},{type:11,selector:"content > :enter",animation:[{type:6,styles:{transform:"translateX(100%)",opacity:0},offset:null}],options:{optional:!0}},{type:2,steps:[{type:3,steps:[{type:11,selector:"content > :leave",animation:[{type:6,styles:{transform:"translateX(0)",opacity:1},offset:null},{type:4,styles:{type:6,styles:{transform:"translateX(-100%)",opacity:0},offset:null},timings:"600ms cubic-bezier(0.0, 0.0, 0.2, 1)"}],options:{optional:!0}},{type:11,selector:"content > :enter",animation:[{type:6,styles:{transform:"translateX(100%)"},offset:null},{type:4,styles:{type:6,styles:{transform:"translateX(0%)",opacity:1},offset:null},timings:"600ms cubic-bezier(0.0, 0.0, 0.2, 1)"}],options:{optional:!0}}],options:null},{type:11,selector:"content > :leave",animation:{type:9,options:null},options:{optional:!0}},{type:11,selector:"content > :enter",animation:{type:9,options:null},options:{optional:!0}}],options:null}],options:null}],options:{}},{type:7,name:"routerTransitionRight",definitions:[{type:1,expr:"* => *",animation:[{type:11,selector:"content > :enter, content > :leave",animation:[{type:6,styles:{position:"absolute",top:0,bottom:0,left:0,right:0},offset:null}],options:{optional:!0}},{type:11,selector:"content > :enter",animation:[{type:6,styles:{transform:"translateX(-100%)",opacity:0},offset:null}],options:{optional:!0}},{type:2,steps:[{type:3,steps:[{type:11,selector:"content > :leave",animation:[{type:6,styles:{transform:"translateX(0)",opacity:1},offset:null},{type:4,styles:{type:6,styles:{transform:"translateX(100%)",opacity:0},offset:null},timings:"600ms cubic-bezier(0.0, 0.0, 0.2, 1)"}],options:{optional:!0}},{type:11,selector:"content > :enter",animation:[{type:6,styles:{transform:"translateX(-100%)"},offset:null},{type:4,styles:{type:6,styles:{transform:"translateX(0%)",opacity:1},offset:null},timings:"600ms cubic-bezier(0.0, 0.0, 0.2, 1)"}],options:{optional:!0}}],options:null},{type:11,selector:"content > :leave",animation:{type:9,options:null},options:{optional:!0}},{type:11,selector:"content > :enter",animation:{type:9,options:null},options:{optional:!0}}],options:null}],options:null}],options:{}},{type:7,name:"routerTransitionUp",definitions:[{type:1,expr:"* => *",animation:[{type:11,selector:"content > :enter, content > :leave",animation:[{type:6,styles:{position:"absolute",top:0,bottom:0,left:0,right:0},offset:null}],options:{optional:!0}},{type:11,selector:"content > :enter",animation:[{type:6,styles:{transform:"translateY(100%)",opacity:0},offset:null}],options:{optional:!0}},{type:3,steps:[{type:11,selector:"content > :leave",animation:[{type:6,styles:{transform:"translateY(0)",opacity:1},offset:null},{type:4,styles:{type:6,styles:{transform:"translateY(-100%)",opacity:0},offset:null},timings:"600ms cubic-bezier(0.0, 0.0, 0.2, 1)"}],options:{optional:!0}},{type:11,selector:"content > :enter",animation:[{type:6,styles:{transform:"translateY(100%)"},offset:null},{type:4,styles:{type:6,styles:{transform:"translateY(0%)",opacity:1},offset:null},timings:"600ms cubic-bezier(0.0, 0.0, 0.2, 1)"}],options:{optional:!0}}],options:null},{type:11,selector:"content > :leave",animation:{type:9,options:null},options:{optional:!0}},{type:11,selector:"content > :enter",animation:{type:9,options:null},options:{optional:!0}}],options:null}],options:{}},{type:7,name:"routerTransitionDown",definitions:[{type:1,expr:"* => *",animation:[{type:11,selector:"content > :enter, content > :leave",animation:[{type:6,styles:{position:"absolute",top:0,bottom:0,left:0,right:0},offset:null}],options:{optional:!0}},{type:11,selector:"content > :enter",animation:[{type:6,styles:{transform:"translateY(-100%)",opacity:0},offset:null}],options:{optional:!0}},{type:2,steps:[{type:3,steps:[{type:11,selector:"content > :leave",animation:[{type:6,styles:{transform:"translateY(0)",opacity:1},offset:null},{type:4,styles:{type:6,styles:{transform:"translateY(100%)",opacity:0},offset:null},timings:"600ms cubic-bezier(0.0, 0.0, 0.2, 1)"}],options:{optional:!0}},{type:11,selector:"content > :enter",animation:[{type:6,styles:{transform:"translateY(-100%)"},offset:null},{type:4,styles:{type:6,styles:{transform:"translateY(0%)",opacity:1},offset:null},timings:"600ms cubic-bezier(0.0, 0.0, 0.2, 1)"}],options:{optional:!0}}],options:null},{type:11,selector:"content > :leave",animation:{type:9,options:null},options:{optional:!0}},{type:11,selector:"content > :enter",animation:{type:9,options:null},options:{optional:!0}}],options:null}],options:null}],options:{}},{type:7,name:"routerTransitionFade",definitions:[{type:1,expr:"* => *",animation:{type:3,steps:[{type:11,selector:"content > :enter, content > :leave ",animation:[{type:6,styles:{position:"absolute",top:0,bottom:0,left:0,right:0},offset:null}],options:{optional:!0}},{type:11,selector:"content > :enter",animation:[{type:6,styles:{opacity:0},offset:null}],options:{optional:!0}},{type:11,selector:"content > :leave",animation:[{type:6,styles:{opacity:1},offset:null},{type:4,styles:{type:6,styles:{opacity:0},offset:null},timings:"300ms cubic-bezier(0.0, 0.0, 0.2, 1)"}],options:{optional:!0}},{type:11,selector:"content > :enter",animation:[{type:6,styles:{opacity:0},offset:null},{type:4,styles:{type:6,styles:{opacity:1},offset:null},timings:"300ms cubic-bezier(0.0, 0.0, 0.2, 1)"}],options:{optional:!0}},{type:11,selector:"content > :enter",animation:{type:9,options:null},options:{optional:!0}},{type:11,selector:"content > :leave",animation:{type:9,options:null},options:{optional:!0}}],options:null},options:null}],options:{}}]}});function L(t){return n["\u0275vid"](0,[(t()(),n["\u0275eld"](0,0,null,null,1,"div",[],null,null,null,null,null)),(t()(),n["\u0275eld"](1,0,null,null,0,"img",[["class","upload_branding_img"],["src","/assets/images/logos/defaul_logo.png"]],null,null,null,null,null))],null,null)}function F(t){return n["\u0275vid"](0,[(t()(),n["\u0275eld"](0,0,null,null,1,"div",[],null,null,null,null,null)),(t()(),n["\u0275eld"](1,0,null,null,0,"img",[["class","upload_branding_img"]],[[8,"src",4]],null,null,null,null))],null,function(t,e){t(e,1,0,e.component.url)})}function Y(t){return n["\u0275vid"](0,[(t()(),n["\u0275eld"](0,0,null,null,7,"div",[["fxFlex","50"]],null,null,null,null,null)),n["\u0275did"](1,737280,null,0,f.a,[y.h,n.ElementRef,[3,f.e],y.l,y.f],{flex:[0,"flex"]},null),(t()(),n["\u0275eld"](2,0,null,null,2,"mat-label",[],null,null,null,null,null)),n["\u0275did"](3,16384,null,0,g.f,[],null,null),(t()(),n["\u0275ted"](-1,null,["Default Color"])),(t()(),n["\u0275eld"](5,0,null,null,2,"div",[["style","width: 230px; height: 280px; display: flex; justify-content: center"]],null,null,null,null,null)),n["\u0275did"](6,278528,null,0,b.NgStyle,[n.KeyValueDiffers,n.ElementRef,n.Renderer2],{ngStyle:[0,"ngStyle"]},null),n["\u0275pod"](7,{"background-color":0})],function(t,e){var l=e.component;t(e,1,0,"50");var n=t(e,7,0,l.selectedColor);t(e,6,0,n)},null)}function z(t){return n["\u0275vid"](0,[(t()(),n["\u0275eld"](0,0,null,null,7,"div",[["fxFlex","50"]],null,null,null,null,null)),n["\u0275did"](1,737280,null,0,f.a,[y.h,n.ElementRef,[3,f.e],y.l,y.f],{flex:[0,"flex"]},null),(t()(),n["\u0275eld"](2,0,null,null,2,"mat-label",[],null,null,null,null,null)),n["\u0275did"](3,16384,null,0,g.f,[],null,null),(t()(),n["\u0275ted"](-1,null,["Saved Color"])),(t()(),n["\u0275eld"](5,0,null,null,2,"div",[["style","width: 230px; height: 280px; display: flex; justify-content: center"]],null,null,null,null,null)),n["\u0275did"](6,278528,null,0,b.NgStyle,[n.KeyValueDiffers,n.ElementRef,n.Renderer2],{ngStyle:[0,"ngStyle"]},null),n["\u0275pod"](7,{"background-color":0})],function(t,e){var l=e.component;t(e,1,0,"50");var n=t(e,7,0,l.colorData.code);t(e,6,0,n)},null)}function P(t){return n["\u0275vid"](0,[(t()(),n["\u0275eld"](0,0,null,null,53,"div",[["class","page-layout blank"],["id","unit-change"]],null,null,null,null,null)),(t()(),n["\u0275eld"](1,0,null,null,10,"div",[["class","header header-content-dashboard"],["fxLayout","column"],["fxLayout.gt-xs","row"],["fxLayoutAlign","center center"]],null,null,null,null,null)),n["\u0275did"](2,737280,null,0,f.e,[y.h,n.ElementRef,y.l],{layout:[0,"layout"],layoutGtXs:[1,"layoutGtXs"]},null),n["\u0275did"](3,737280,null,0,f.d,[y.h,n.ElementRef,[6,f.e],y.l],{align:[0,"align"]},null),(t()(),n["\u0275eld"](4,0,null,null,7,"div",[["fxLayout","row"],["style","margin-right: 6pc;"]],null,null,null,null,null)),n["\u0275did"](5,737280,null,0,f.e,[y.h,n.ElementRef,y.l],{layout:[0,"layout"]},null),(t()(),n["\u0275eld"](6,0,null,null,5,"div",[["class","logo"],["fxLayout","row"]],null,null,null,null,null)),n["\u0275did"](7,737280,null,0,f.e,[y.h,n.ElementRef,y.l],{layout:[0,"layout"]},null),(t()(),n["\u0275eld"](8,0,null,null,3,"span",[["class","logo-text header-tittle"]],[[24,"@animate",0]],null,null,null,null)),n["\u0275pod"](9,{delay:0,x:1}),n["\u0275pod"](10,{value:0,params:1}),(t()(),n["\u0275ted"](-1,null,[" BRANDING "])),(t()(),n["\u0275eld"](12,0,null,null,41,"div",[["class","content all-pages-content"]],null,null,null,null,null)),(t()(),n["\u0275eld"](13,0,null,null,40,"div",[["class","left"]],null,null,null,null,null)),(t()(),n["\u0275eld"](14,0,null,null,39,"div",[["class","main-widget main-widget-filter"]],null,null,null,null,null)),(t()(),n["\u0275eld"](15,0,null,null,38,"div",[["class","widget-group p-0"],["fxLayout","row"]],[[24,"@animateStagger",0]],null,null,null,null)),n["\u0275did"](16,737280,null,0,f.e,[y.h,n.ElementRef,y.l],{layout:[0,"layout"]},null),n["\u0275pod"](17,{value:0}),(t()(),n["\u0275eld"](18,0,null,null,35,"fuse-widget",[["class","widget p-0"],["fxFlex","100"],["fxFlex.gt-md","50"],["fxFlex.gt-xs","50"],["style","margin-left: 3pc;\n                "]],[[2,"flipped",null]],null,null,v.b,v.a)),n["\u0275did"](19,737280,null,0,f.a,[y.h,n.ElementRef,[3,f.e],y.l,y.f],{flex:[0,"flex"],flexGtXs:[1,"flexGtXs"],flexGtMd:[2,"flexGtMd"]},null),n["\u0275did"](20,1097728,null,1,h.a,[n.ElementRef,n.Renderer2],null,null),n["\u0275qud"](603979776,1,{toggleButtons:1}),(t()(),n["\u0275eld"](22,0,null,0,31,"div",[["class","content"],["fxLayout","row wrap"]],null,null,null,null,null)),n["\u0275did"](23,737280,null,0,f.e,[y.h,n.ElementRef,y.l],{layout:[0,"layout"]},null),(t()(),n["\u0275eld"](24,0,null,null,29,"div",[["class","friend"],["fxFlex","50"]],null,null,null,null,null)),n["\u0275did"](25,737280,null,0,f.a,[y.h,n.ElementRef,[3,f.e],y.l,y.f],{flex:[0,"flex"]},null),(t()(),n["\u0275and"](16777216,null,null,1,null,L)),n["\u0275did"](27,16384,null,0,b.NgIf,[n.ViewContainerRef,n.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),n["\u0275and"](16777216,null,null,1,null,F)),n["\u0275did"](29,16384,null,0,b.NgIf,[n.ViewContainerRef,n.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),n["\u0275eld"](30,0,null,null,0,"br",[],null,null,null,null,null)),(t()(),n["\u0275eld"](31,0,null,null,4,"button",[["class","form-control1 upload-button1 fileUpload1"],["mat-stroked-button",""]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],null,null,x.d,x.b)),n["\u0275did"](32,180224,null,0,w.b,[n.ElementRef,k.a,C.h,[2,R.a]],null,null),(t()(),n["\u0275eld"](33,0,null,0,2,"label",[["class","upload1"]],null,null,null,null,null)),(t()(),n["\u0275eld"](34,0,null,null,0,"input",[["type","file"]],null,[[null,"change"]],function(t,e,l){var n=!0;return"change"===e&&(n=!1!==t.component.selectFile(l)&&n),n},null,null)),(t()(),n["\u0275ted"](-1,null,[" Upload Logo "])),(t()(),n["\u0275eld"](36,0,null,null,13,"div",[["style","margin-top: 40px;"]],null,null,null,null,null)),(t()(),n["\u0275eld"](37,0,null,null,12,"div",[["class","row"],["fxFlex","100"],["style","height: 320px;padding-left: 9px;"]],null,null,null,null,null)),n["\u0275did"](38,737280,null,0,f.a,[y.h,n.ElementRef,[3,f.e],y.l,y.f],{flex:[0,"flex"]},null),(t()(),n["\u0275eld"](39,0,null,null,6,"div",[["fxFlex","50"],["style","margin-right: 76px;"]],null,null,null,null,null)),n["\u0275did"](40,737280,null,0,f.a,[y.h,n.ElementRef,[3,f.e],y.l,y.f],{flex:[0,"flex"]},null),(t()(),n["\u0275eld"](41,0,null,null,2,"mat-label",[],null,null,null,null,null)),n["\u0275did"](42,16384,null,0,g.f,[],null,null),(t()(),n["\u0275ted"](-1,null,["Pick a Color"])),(t()(),n["\u0275eld"](44,16777216,[["colorcode",1]],null,1,"div",[["value","selectedColor"]],[[4,"background",null]],[[null,"colorPickerChange"],[null,"click"],[null,"focus"],[null,"input"]],function(t,e,l){var o=!0,i=t.component;return"click"===e&&(o=!1!==n["\u0275nov"](t,45).handleClick(l)&&o),"focus"===e&&(o=!1!==n["\u0275nov"](t,45).handleFocus(l)&&o),"input"===e&&(o=!1!==n["\u0275nov"](t,45).handleInput(l)&&o),"colorPickerChange"===e&&(o=!1!==(i.selectedColor=l)&&o),o},null,null)),n["\u0275did"](45,671744,null,0,E.b,[n.Injector,n.ComponentFactoryResolver,n.ApplicationRef,n.ViewContainerRef,n.ElementRef,E.d],{colorPicker:[0,"colorPicker"],cpToggle:[1,"cpToggle"],cpDialogDisplay:[2,"cpDialogDisplay"],cpCancelButton:[3,"cpCancelButton"],cpCancelButtonClass:[4,"cpCancelButtonClass"]},{colorPickerChange:"colorPickerChange"}),(t()(),n["\u0275and"](16777216,null,null,1,null,Y)),n["\u0275did"](47,16384,null,0,b.NgIf,[n.ViewContainerRef,n.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),n["\u0275and"](16777216,null,null,1,null,z)),n["\u0275did"](49,16384,null,0,b.NgIf,[n.ViewContainerRef,n.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),n["\u0275eld"](50,0,null,null,3,"div",[],null,null,null,null,null)),(t()(),n["\u0275eld"](51,0,null,null,2,"button",[["class","form-control1 upload-button1 fileUpload1"],["mat-stroked-button",""],["type","submit"]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(t,e,l){var n=!0,o=t.component;return"click"===e&&(n=!1!==o.addColor(o.selectedColor)&&n),n},x.d,x.b)),n["\u0275did"](52,180224,null,0,w.b,[n.ElementRef,k.a,C.h,[2,R.a]],null,null),(t()(),n["\u0275ted"](-1,0,[" Save Color Code "]))],function(t,e){var l=e.component;t(e,2,0,"column","row"),t(e,3,0,"center center"),t(e,5,0,"row"),t(e,7,0,"row"),t(e,16,0,"row"),t(e,19,0,"100","50","50"),t(e,23,0,"row wrap"),t(e,25,0,"50"),t(e,27,0,!l.url),t(e,29,0,l.url),t(e,38,0,"100"),t(e,40,0,"50"),t(e,45,0,l.selectedColor,!0,"inline",!1,"btn btn-primary btn-xs"),t(e,47,0,!l.colorData),t(e,49,0,l.colorData)},function(t,e){var l=e.component,o=t(e,10,0,"*",t(e,9,0,"100ms","-25px"));t(e,8,0,o);var i=t(e,17,0,"50");t(e,15,0,i),t(e,18,0,n["\u0275nov"](e,20).flipped),t(e,31,0,n["\u0275nov"](e,32).disabled||null,"NoopAnimations"===n["\u0275nov"](e,32)._animationMode),t(e,44,0,l.selectedColor),t(e,51,0,n["\u0275nov"](e,52).disabled||null,"NoopAnimations"===n["\u0275nov"](e,52)._animationMode)})}function X(t){return n["\u0275vid"](0,[(t()(),n["\u0275eld"](0,0,null,null,1,"app-branding",[],null,null,null,P,M)),n["\u0275did"](1,114688,null,0,s,[o.f,I.e,S.a,_.a],null,null)],function(t,e){t(e,1,0)},null)}var D=n["\u0275ccf"]("app-branding",s,X,{},{},[]),T=l("M2Lx"),N=l("eDkP"),A=l("Fzqc"),B=l("mVsa"),j=l("uGex"),U=l("Wf4p"),O=l("Se1k"),G=l("k/Rj"),V=l("v9Dh"),Z=l("ZYjt"),q=l("4epT"),H=l("jQLj"),W=l("BBZF"),K=l("Izlp"),J=l("Ry/H"),Q=function(){function t(t){this._httpClient=t}return t.prototype.resolve=function(t,e){var l=this;return new Promise(function(t,e){Promise.all([l.getWidgets()]).then(function(){t()},e)})},t.prototype.getWidgets=function(){var t=this;return new Promise(function(e,l){t._httpClient.get("api/analytics-dashboard-widgets").subscribe(function(l){t.widgets=l,e(l)},l)})},t}(),$=l("t/Na"),tt=l("ZYCi"),et=l("SMsm"),lt=l("4c35"),nt=l("qAlS"),ot=l("La40"),it=l("/VYK"),st=l("b716"),at=l("/fSM"),pt=l("xdbM"),ut=l("/qvy"),rt=l("b3E/"),dt=l("w6+6"),mt=l("IZET"),ct=l("1jDe"),ft=l("T8sE"),yt=l("skic"),gt=l("KeWI"),bt=l("UsZU"),vt=l("50k4"),ht=l("o56U"),xt=l("U3vz"),wt=l("r6ye"),kt=l("KktT"),Ct=l("eby4"),Rt=l("hUWP"),Et=l("3pJQ"),It=l("V9q+"),St=l("RaCk"),_t=l("Tk7p"),Mt=l("5HBU"),Lt=l("4CPF"),Ft=l("y4qS"),Yt=l("BHnd"),zt=l("de3e"),Pt=l("8mMr");l.d(e,"BrandingModuleNgFactory",function(){return Xt});var Xt=n["\u0275cmf"](a,[],function(t){return n["\u0275mod"]([n["\u0275mpd"](512,n.ComponentFactoryResolver,n["\u0275CodegenComponentFactoryResolver"],[[8,[p.a,u.a,r.a,d.a,m.a,c.b,c.a,D]],[3,n.ComponentFactoryResolver],n.NgModuleRef]),n["\u0275mpd"](4608,b.NgLocalization,b.NgLocaleLocalization,[n.LOCALE_ID,[2,b["\u0275angular_packages_common_common_a"]]]),n["\u0275mpd"](4608,T.c,T.c,[]),n["\u0275mpd"](4608,b.LocationStrategy,b.PathLocationStrategy,[b.PlatformLocation,[2,b.APP_BASE_HREF]]),n["\u0275mpd"](4608,b.Location,b.Location,[b.LocationStrategy]),n["\u0275mpd"](4608,N.c,N.c,[N.i,N.e,n.ComponentFactoryResolver,N.h,N.f,n.Injector,n.NgZone,b.DOCUMENT,A.b,[2,b.Location]]),n["\u0275mpd"](5120,N.j,N.k,[N.c]),n["\u0275mpd"](5120,B.b,B.g,[N.c]),n["\u0275mpd"](5120,j.a,j.b,[N.c]),n["\u0275mpd"](4608,U.b,U.b,[]),n["\u0275mpd"](5120,I.c,I.d,[N.c]),n["\u0275mpd"](135680,I.e,I.e,[N.c,n.Injector,[2,b.Location],[2,I.b],I.c,[3,I.e],N.e]),n["\u0275mpd"](4608,E.d,E.d,[]),n["\u0275mpd"](4608,O.a,O.a,[n.ApplicationRef,n.ComponentFactoryResolver,n.Injector]),n["\u0275mpd"](4608,G.a,G.a,[O.a]),n["\u0275mpd"](4608,o.B,o.B,[]),n["\u0275mpd"](4608,o.f,o.f,[]),n["\u0275mpd"](4608,y.j,y.i,[y.d,y.g]),n["\u0275mpd"](5120,n.APP_BOOTSTRAP_LISTENER,function(t,e){return[y.m(t,e)]},[b.DOCUMENT,n.PLATFORM_ID]),n["\u0275mpd"](5120,V.b,V.c,[N.c]),n["\u0275mpd"](4608,Z.HAMMER_GESTURE_CONFIG,U.c,[[2,U.g],[2,U.l]]),n["\u0275mpd"](5120,q.c,q.a,[[3,q.c]]),n["\u0275mpd"](4608,H.i,H.i,[]),n["\u0275mpd"](5120,H.a,H.b,[N.c]),n["\u0275mpd"](4608,W.c,W.c,[]),n["\u0275mpd"](4608,W.b,W.b,[]),n["\u0275mpd"](4608,K.a,J.b,[[2,J.a],W.c,W.b]),n["\u0275mpd"](4608,Q,Q,[$.c]),n["\u0275mpd"](1073742336,b.CommonModule,b.CommonModule,[]),n["\u0275mpd"](1073742336,tt.s,tt.s,[[2,tt.z],[2,tt.o]]),n["\u0275mpd"](1073742336,A.a,A.a,[]),n["\u0275mpd"](1073742336,U.l,U.l,[[2,U.d],[2,Z.HAMMER_LOADER]]),n["\u0275mpd"](1073742336,k.b,k.b,[]),n["\u0275mpd"](1073742336,U.x,U.x,[]),n["\u0275mpd"](1073742336,w.c,w.c,[]),n["\u0275mpd"](1073742336,T.d,T.d,[]),n["\u0275mpd"](1073742336,g.e,g.e,[]),n["\u0275mpd"](1073742336,et.c,et.c,[]),n["\u0275mpd"](1073742336,lt.g,lt.g,[]),n["\u0275mpd"](1073742336,nt.c,nt.c,[]),n["\u0275mpd"](1073742336,N.g,N.g,[]),n["\u0275mpd"](1073742336,B.e,B.e,[]),n["\u0275mpd"](1073742336,U.v,U.v,[]),n["\u0275mpd"](1073742336,U.s,U.s,[]),n["\u0275mpd"](1073742336,j.d,j.d,[]),n["\u0275mpd"](1073742336,C.a,C.a,[]),n["\u0275mpd"](1073742336,ot.i,ot.i,[]),n["\u0275mpd"](1073742336,it.c,it.c,[]),n["\u0275mpd"](1073742336,st.c,st.c,[]),n["\u0275mpd"](1073742336,I.k,I.k,[]),n["\u0275mpd"](1073742336,E.c,E.c,[]),n["\u0275mpd"](1073742336,at.a,at.a,[]),n["\u0275mpd"](1073742336,pt.ChartsModule,pt.ChartsModule,[]),n["\u0275mpd"](1073742336,ut.a,ut.a,[]),n["\u0275mpd"](1073742336,rt.a,rt.a,[]),n["\u0275mpd"](1073742336,dt.a,dt.a,[]),n["\u0275mpd"](1073742336,mt.a,mt.a,[]),n["\u0275mpd"](1073742336,ct.a,ct.a,[]),n["\u0275mpd"](1073742336,ft.a,ft.a,[]),n["\u0275mpd"](1073742336,yt.a,yt.a,[]),n["\u0275mpd"](1073742336,gt.a,gt.a,[]),n["\u0275mpd"](1073742336,bt.a,bt.a,[]),n["\u0275mpd"](1073742336,vt.a,vt.a,[]),n["\u0275mpd"](1073742336,ht.a,ht.a,[]),n["\u0275mpd"](1073742336,xt.a,xt.a,[]),n["\u0275mpd"](1073742336,wt.a,wt.a,[]),n["\u0275mpd"](1073742336,kt.a,kt.a,[]),n["\u0275mpd"](1073742336,Ct.a,Ct.a,[]),n["\u0275mpd"](1073742336,o.z,o.z,[]),n["\u0275mpd"](1073742336,o.l,o.l,[]),n["\u0275mpd"](1073742336,o.v,o.v,[]),n["\u0275mpd"](1073742336,y.e,y.e,[]),n["\u0275mpd"](1073742336,f.c,f.c,[]),n["\u0275mpd"](1073742336,Rt.a,Rt.a,[]),n["\u0275mpd"](1073742336,Et.a,Et.a,[]),n["\u0275mpd"](1073742336,It.a,It.a,[[2,y.k],n.PLATFORM_ID]),n["\u0275mpd"](1073742336,St.a,St.a,[]),n["\u0275mpd"](1073742336,_t.a,_t.a,[]),n["\u0275mpd"](1073742336,Mt.a,Mt.a,[]),n["\u0275mpd"](1073742336,Lt.a,Lt.a,[]),n["\u0275mpd"](1073742336,Ft.p,Ft.p,[]),n["\u0275mpd"](1073742336,Yt.m,Yt.m,[]),n["\u0275mpd"](1073742336,V.e,V.e,[]),n["\u0275mpd"](1073742336,q.d,q.d,[]),n["\u0275mpd"](1073742336,H.j,H.j,[]),n["\u0275mpd"](1073742336,zt.c,zt.c,[]),n["\u0275mpd"](1073742336,Pt.b,Pt.b,[]),n["\u0275mpd"](1073742336,a,a,[]),n["\u0275mpd"](1024,tt.m,function(){return[[{path:"**",component:s,resolve:{}}]]},[]),n["\u0275mpd"](256,J.a,{apiKey:"AIzaSyD81ecsCj4yYpcXSLFcYU97PvRsE_X8Bx8"},[])])})},wYp6:function(t,e,l){"use strict";var n=l("CcnG");l("MMsv"),l.d(e,"a",function(){return o}),l.d(e,"b",function(){return i});var o=n["\u0275crt"]({encapsulation:2,styles:[["fuse-widget{display:block;position:relative;-webkit-perspective:3000px;perspective:3000px;padding:12px}fuse-widget>div{position:relative;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;transition:-webkit-transform 1s;transition:transform 1s;transition:transform 1s,-webkit-transform 1s}fuse-widget>.fuse-widget-front{display:flex;flex-direction:column;flex:1 1 auto;position:relative;overflow:hidden;visibility:visible;width:100%;opacity:1;z-index:10;border-radius:8px;transition:visibility 0s ease-in .2s,opacity 0s ease-in .2s,-webkit-transform .5s ease-out 0s;transition:transform .5s ease-out 0s,visibility 0s ease-in .2s,opacity 0s ease-in .2s;transition:transform .5s ease-out 0s,visibility 0s ease-in .2s,opacity 0s ease-in .2s,-webkit-transform .5s ease-out 0s;-webkit-transform:rotateY(0);transform:rotateY(0);-webkit-backface-visibility:hidden;backface-visibility:hidden;border:1px solid}fuse-widget>.fuse-widget-back{display:block;position:absolute;top:12px;right:12px;bottom:12px;left:12px;overflow:hidden;visibility:hidden;opacity:0;z-index:10;border-radius:8px;transition:visibility 0s ease-in .2s,opacity 0s ease-in .2s,-webkit-transform .5s ease-out 0s;transition:transform .5s ease-out 0s,visibility 0s ease-in .2s,opacity 0s ease-in .2s;transition:transform .5s ease-out 0s,visibility 0s ease-in .2s,opacity 0s ease-in .2s,-webkit-transform .5s ease-out 0s;-webkit-transform:rotateY(180deg);transform:rotateY(180deg);-webkit-backface-visibility:hidden;backface-visibility:hidden;border:1px solid}fuse-widget>.fuse-widget-back [fuseWidgetToggle]{position:absolute;top:0;right:0}fuse-widget.flipped>.fuse-widget-front{visibility:hidden;opacity:0;-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}fuse-widget.flipped>.fuse-widget-back{display:block;visibility:visible;opacity:1;-webkit-transform:rotateY(360deg);transform:rotateY(360deg)}fuse-widget .mat-form-field.mat-form-field-type-mat-select .mat-form-field-wrapper{padding:16px 0}fuse-widget .mat-form-field.mat-form-field-type-mat-select .mat-form-field-wrapper .mat-form-field-infix{border:none;padding:0}fuse-widget .mat-form-field.mat-form-field-type-mat-select .mat-form-field-underline{display:none}"]],data:{}});function i(t){return n["\u0275vid"](0,[n["\u0275ncd"](null,0)],null,null)}}}]);