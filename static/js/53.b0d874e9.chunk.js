"use strict";(self.webpackChunkkeycloakify_advanced_starter=self.webpackChunkkeycloakify_advanced_starter||[]).push([[53],{5053:function(e,t,a){a.r(t);var n=a(885),r=a(2791),l=a(2981),o=a(2138),s=a(785),c=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},i=(0,r.memo)((function(e){var t=e.kcContext,a=e.i18n,i=e.doFetchDefaultThemeResources,m=void 0===i||i,u=c(e,["kcContext","i18n","doFetchDefaultThemeResources"]),p=(0,o.R)().cx,d=a.msg,f=a.msgStr,b=t.url,k=t.isAppInitiatedAction,v=(0,r.useState)(!1),C=(0,n.Z)(v,2),y=C[0],g=C[1];return r.createElement(l.Z,Object.assign({},Object.assign({kcContext:t,i18n:a,doFetchDefaultThemeResources:m},u),{headerNode:d("loginProfileTitle"),formNode:r.createElement("form",{id:"kc-update-profile-form",className:p(u.kcFormClass),action:b.loginAction,method:"post"},r.createElement(s.M,Object.assign({kcContext:t,onIsFormSubmittableValueChange:g,i18n:a},u)),r.createElement("div",{className:p(u.kcFormGroupClass)},r.createElement("div",{id:"kc-form-options",className:p(u.kcFormOptionsClass)},r.createElement("div",{className:p(u.kcFormOptionsWrapperClass)})),r.createElement("div",{id:"kc-form-buttons",className:p(u.kcFormButtonsClass)},k?r.createElement(r.Fragment,null,r.createElement("input",{className:p(u.kcButtonClass,u.kcButtonPrimaryClass,u.kcButtonLargeClass),type:"submit",value:f("doSubmit")}),r.createElement("button",{className:p(u.kcButtonClass,u.kcButtonDefaultClass,u.kcButtonLargeClass),type:"submit",name:"cancel-aia",value:"true",formNoValidate:!0},d("doCancel"))):r.createElement("input",{className:p(u.kcButtonClass,u.kcButtonPrimaryClass,u.kcButtonBlockClass,u.kcButtonLargeClass),type:"submit",defaultValue:f("doSubmit"),disabled:!y}))))}))}));t.default=i},785:function(e,t,a){a.d(t,{M:function(){return i}});var n=a(885),r=a(2791),l=a(2138),o=a(8737),s=a(5006),c=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},i=(0,r.memo)((function(e){var t=e.kcContext,a=e.onIsFormSubmittableValueChange,i=e.i18n,m=e.BeforeField,u=e.AfterField,p=c(e,["kcContext","onIsFormSubmittableValueChange","i18n","BeforeField","AfterField"]),d=(0,l.R)(),f=d.cx,b=d.css,k=i.advancedMsg,v=(0,s.H)({kcContext:t,i18n:i}),C=v.formValidationState,y=C.fieldStateByAttributeName,g=C.isFormSubmittable,E=v.formValidationReducer,h=v.attributesWithPassword;(0,r.useEffect)((function(){a(g)}),[g]);var F=(0,o.useCallbackFactory)((function(e,t){var a=(0,n.Z)(e,1)[0],r=(0,n.Z)(t,1)[0].target.value;return E({action:"update value",name:a,newValue:r})})),N=(0,o.useCallbackFactory)((function(e){var t=(0,n.Z)(e,1)[0];return E({action:"focus lost",name:t})})),O="";return r.createElement(r.Fragment,null,h.map((function(e,t){var a,n=e.group,l=void 0===n?"":n,o=e.groupDisplayHeader,s=void 0===o?"":o,c=e.groupDisplayDescription,i=void 0===c?"":c,d=y[e.name],v=d.value,C=d.displayableErrors,g=f(p.kcFormGroupClass,0!==C.length&&p.kcFormGroupErrorClass);return r.createElement(r.Fragment,{key:t},l!==O&&""!==(O=l)&&r.createElement("div",{className:g},r.createElement("div",{className:f(p.kcContentWrapperClass)},r.createElement("label",{id:"header-".concat(l),className:f(p.kcFormGroupHeader)},k(s)||O)),""!==i&&r.createElement("div",{className:f(p.kcLabelWrapperClass)},r.createElement("label",{id:"description-".concat(l),className:"".concat(f(p.kcLabelClass))},k(i)))),m&&r.createElement(m,{attribute:e}),r.createElement("div",{className:g},r.createElement("div",{className:f(p.kcLabelWrapperClass)},r.createElement("label",{htmlFor:e.name,className:f(p.kcLabelClass)},k(null!==(a=e.displayName)&&void 0!==a?a:"")),e.required&&r.createElement(r.Fragment,null,"*")),r.createElement("div",{className:f(p.kcInputWrapperClass)},function(){var t=e.validators.options;return void 0!==t?r.createElement("select",{id:e.name,name:e.name,onChange:F(e.name),onBlur:N(e.name),value:v},t.options.map((function(e){return r.createElement("option",{key:e,value:e},e)}))):r.createElement("input",{type:function(){switch(e.name){case"password-confirm":case"password":return"password";default:return"text"}}(),id:e.name,name:e.name,value:v,onChange:F(e.name),className:f(p.kcInputClass),"aria-invalid":0!==C.length,disabled:e.readOnly,autoComplete:e.autocomplete,onBlur:N(e.name)})}(),0!==C.length&&r.createElement("span",{id:"input-error-".concat(e.name),className:f(p.kcInputErrorMessageClass,b({position:1===C.length?"absolute":void 0,"& > span":{display:"block"}})),"aria-live":"polite"},C.map((function(e){return e.errorMessage}))))),u&&r.createElement(u,{attribute:e}))})))}))}}]);
//# sourceMappingURL=53.b0d874e9.chunk.js.map