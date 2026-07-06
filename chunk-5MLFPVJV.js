import{Z as W,_ as f,aa as F,ca as j}from"./chunk-WLDK3DBJ.js";import{j as B,l as D,m as J,n as K,p as S}from"./chunk-TYXIHH5J.js";import{Ab as z,Bb as P,Cb as H,Db as i,Eb as M,Fb as E,Hb as b,Jb as y,Ka as O,Kb as _,Na as l,Nb as L,Ob as U,Pb as G,Q as h,R as T,Ub as w,W as x,Za as C,_a as I,aa as N,ba as Q,bb as $,da as u,db as s,dc as k,ja as A,lb as m,mb as n,ob as R,pb as V,qb as v,vb as g,wb as d,xb as q}from"./chunk-EKEZSOAM.js";var te=["*"];function ae(e,o){if(e&1&&(g(0,"span",3),U(1),d()),e&2){let t=i();l(),G(t.label)}}function re(e,o){if(e&1&&q(0,"span",5),e&2){let t=i(2);v(t.icon),n("ngClass","p-avatar-icon")}}function ne(e,o){if(e&1&&s(0,re,1,3,"span",4),e&2){let t=i(),r=L(5);n("ngIf",t.icon)("ngIfElse",r)}}function ie(e,o){if(e&1){let t=P();g(0,"img",7),H("error",function(a){N(t);let c=i(2);return Q(c.imageError(a))}),d()}if(e&2){let t=i(2);n("src",t.image,O),m("aria-label",t.ariaLabel)}}function oe(e,o){if(e&1&&s(0,ie,1,2,"img",6),e&2){let t=i();n("ngIf",t.image)}}var le=({dt:e})=>`
.p-avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: ${e("avatar.width")};
    height: ${e("avatar.height")};
    font-size: ${e("avatar.font.size")};
    color: ${e("avatar.color")};
    background: ${e("avatar.background")};
    border-radius: ${e("avatar.border.radius")};
}

.p-avatar-image {
    background: transparent;
}

.p-avatar-circle {
    border-radius: 50%;
}

.p-avatar-circle img {
    border-radius: 50%;
}

.p-avatar-icon {
    font-size: ${e("avatar.icon.size")};
    width: ${e("avatar.icon.size")};
    height: ${e("avatar.icon.size")};
}

.p-avatar img {
    width: 100%;
    height: 100%;
}

.p-avatar-lg {
    width: ${e("avatar.lg.width")};
    height: ${e("avatar.lg.width")};
    font-size: ${e("avatar.lg.font.size")};
}

.p-avatar-lg .p-avatar-icon {
    font-size: ${e("avatar.lg.icon.size")};
    width: ${e("avatar.lg.icon.size")};
    height: ${e("avatar.lg.icon.size")};
}

.p-avatar-xl {
    width: ${e("avatar.xl.width")};
    height: ${e("avatar.xl.width")};
    font-size: ${e("avatar.xl.font.size")};
}

.p-avatar-xl .p-avatar-icon {
    font-size: ${e("avatar.xl.font.size")};
    width: ${e("avatar.xl.icon.size")};
    height: ${e("avatar.xl.icon.size")};
}

.p-avatar-group {
    display: flex;
    align-items: center;
}

.p-avatar-group .p-avatar + .p-avatar {
    margin-inline-start: ${e("avatar.group.offset")};
}

.p-avatar-group .p-avatar {
    border: 2px solid ${e("avatar.group.border.color")};
}

.p-avatar-group .p-avatar-lg + .p-avatar-lg {
    margin-inline-start: ${e("avatar.lg.group.offset")};
}

.p-avatar-group .p-avatar-xl + .p-avatar-xl {
    margin-inline-start: ${e("avatar.xl.group.offset")};
}
`,se={root:({props:e})=>["p-avatar p-component",{"p-avatar-image":e.image!=null,"p-avatar-circle":e.shape==="circle","p-avatar-lg":e.size==="large","p-avatar-xl":e.size==="xlarge"}],label:"p-avatar-label",icon:"p-avatar-icon"},X=(()=>{class e extends F{name="avatar";theme=le;classes=se;static \u0275fac=(()=>{let t;return function(a){return(t||(t=u(e)))(a||e)}})();static \u0275prov=h({token:e,factory:e.\u0275fac})}return e})();var ce=(()=>{class e extends j{label;icon;image;size="normal";shape="square";style;styleClass;ariaLabel;ariaLabelledBy;onImageError=new A;_componentStyle=x(X);imageError(t){this.onImageError.emit(t)}get hostClass(){return this.styleClass}static \u0275fac=(()=>{let t;return function(a){return(t||(t=u(e)))(a||e)}})();static \u0275cmp=C({type:e,selectors:[["p-avatar"]],hostVars:19,hostBindings:function(r,a){r&2&&(m("data-pc-name","avatar")("aria-label",a.ariaLabel)("aria-labelledby",a.ariaLabelledBy),V(a.style),v(a.hostClass),R("p-avatar",!0)("p-component",!0)("p-avatar-circle",a.shape==="circle")("p-avatar-lg",a.size==="large")("p-avatar-xl",a.size==="xlarge")("p-avatar-image",a.image!=null))},inputs:{label:"label",icon:"icon",image:"image",size:"size",shape:"shape",style:"style",styleClass:"styleClass",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onImageError:"onImageError"},features:[w([X]),$],ngContentSelectors:te,decls:6,vars:2,consts:[["iconTemplate",""],["imageTemplate",""],["class","p-avatar-text",4,"ngIf","ngIfElse"],[1,"p-avatar-text"],[3,"class","ngClass",4,"ngIf","ngIfElse"],[3,"ngClass"],[3,"src","error",4,"ngIf"],[3,"error","src"]],template:function(r,a){if(r&1&&(M(),E(0),s(1,ae,2,1,"span",2)(2,ne,1,2,"ng-template",null,0,k)(4,oe,1,1,"ng-template",null,1,k)),r&2){let c=L(3);l(),n("ngIf",a.label)("ngIfElse",c)}},dependencies:[S,B,D,f],encapsulation:2,changeDetection:0})}return e})(),ke=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=I({type:e});static \u0275inj=T({imports:[ce,f,f]})}return e})();var pe=["start"],me=["end"],ge=["center"],de=["*"];function fe(e,o){e&1&&z(0)}function ue(e,o){if(e&1&&(g(0,"div",4),s(1,fe,1,0,"ng-container",5),d()),e&2){let t=i();m("data-pc-section","start"),l(),n("ngTemplateOutlet",t.startTemplate||t._startTemplate)}}function ve(e,o){e&1&&z(0)}function be(e,o){if(e&1&&(g(0,"div",6),s(1,ve,1,0,"ng-container",5),d()),e&2){let t=i();m("data-pc-section","center"),l(),n("ngTemplateOutlet",t.centerTemplate||t._centerTemplate)}}function ye(e,o){e&1&&z(0)}function _e(e,o){if(e&1&&(g(0,"div",7),s(1,ye,1,0,"ng-container",5),d()),e&2){let t=i();m("data-pc-section","end"),l(),n("ngTemplateOutlet",t.endTemplate||t._endTemplate)}}var he=({dt:e})=>`
.p-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: ${e("toolbar.padding")};
    background: ${e("toolbar.background")};
    border: 1px solid ${e("toolbar.border.color")};
    color: ${e("toolbar.color")};
    border-radius: ${e("toolbar.border.radius")};
    gap: ${e("toolbar.gap")};
}

.p-toolbar-start,
.p-toolbar-center,
.p-toolbar-end {
    display: flex;
    align-items: center;
}
`,Te={root:"p-toolbar p-component",start:"p-toolbar-start",center:"p-toolbar-center",end:"p-toolbar-end"},Y=(()=>{class e extends F{name="toolbar";theme=he;classes=Te;static \u0275fac=(()=>{let t;return function(a){return(t||(t=u(e)))(a||e)}})();static \u0275prov=h({token:e,factory:e.\u0275fac})}return e})();var xe=(()=>{class e extends j{style;styleClass;ariaLabelledBy;_componentStyle=x(Y);getBlockableElement(){return this.el.nativeElement.children[0]}startTemplate;endTemplate;centerTemplate;templates;_startTemplate;_endTemplate;_centerTemplate;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"start":case"left":this._startTemplate=t.template;break;case"end":case"right":this._endTemplate=t.template;break;case"center":this._centerTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(a){return(t||(t=u(e)))(a||e)}})();static \u0275cmp=C({type:e,selectors:[["p-toolbar"]],contentQueries:function(r,a,c){if(r&1&&(b(c,pe,4),b(c,me,4),b(c,ge,4),b(c,W,4)),r&2){let p;y(p=_())&&(a.startTemplate=p.first),y(p=_())&&(a.endTemplate=p.first),y(p=_())&&(a.centerTemplate=p.first),y(p=_())&&(a.templates=p)}},inputs:{style:"style",styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy"},features:[w([Y]),$],ngContentSelectors:de,decls:5,vars:9,consts:[["role","toolbar",3,"ngClass","ngStyle"],["class","p-toolbar-start",4,"ngIf"],["class","p-toolbar-center",4,"ngIf"],["class","p-toolbar-end",4,"ngIf"],[1,"p-toolbar-start"],[4,"ngTemplateOutlet"],[1,"p-toolbar-center"],[1,"p-toolbar-end"]],template:function(r,a){r&1&&(M(),g(0,"div",0),E(1),s(2,ue,2,2,"div",1)(3,be,2,2,"div",2)(4,_e,2,2,"div",3),d()),r&2&&(v(a.styleClass),n("ngClass","p-toolbar p-component")("ngStyle",a.style),m("aria-labelledby",a.ariaLabelledBy)("data-pc-name","toolbar"),l(2),n("ngIf",a.startTemplate||a._startTemplate),l(),n("ngIf",a.centerTemplate||a._centerTemplate),l(),n("ngIf",a.endTemplate||a._endTemplate))},dependencies:[S,B,D,K,J,f],encapsulation:2,changeDetection:0})}return e})(),Xe=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=I({type:e});static \u0275inj=T({imports:[xe,f,f]})}return e})();export{ke as a,Xe as b};
