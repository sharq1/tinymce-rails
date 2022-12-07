/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.10.7 (2022-12-06)
 */
!function(){"use strict";function e(r){return function(e){return n=typeof(t=e),(null===t?"null":"object"==n&&(Array.prototype.isPrototypeOf(t)||t.constructor&&"Array"===t.constructor.name)?"array":"object"==n&&(String.prototype.isPrototypeOf(t)||t.constructor&&"String"===t.constructor.name)?"string":n)===r;var t,n}}function t(t){return function(e){return typeof e===t}}function D(e){return!(null==e)}function l(){}function a(e){return function(){return e}}function n(e){return e}function r(){return g}var i,o=tinymce.util.Tools.resolve("tinymce.PluginManager"),v=function(){return(v=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},T=e("string"),s=e("object"),c=e("array"),N=t("boolean"),w=t("function"),u=t("number"),m=a(!1),d=a(!(i=null)),g={fold:function(e,t){return e()},isSome:m,isNone:d,getOr:n,getOrThunk:p,getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:a(null),getOrUndefined:a(void 0),or:n,orThunk:p,map:r,each:l,bind:r,exists:m,forall:d,filter:function(){return g},toArray:function(){return[]},toString:a("none()")};function p(e){return e()}function f(e,a,o,l){return function(e){for(var t=y(e),n=0,r=t.length;n<r;n++){var i=t[n];!function(e,t){(a(e,t)?o:l)(e,t)}(e[i],i)}}(e),1}function h(e,t){return A.call(e,t)}function S(e){for(var t=[],n=0,r=e.length;n<r;++n){if(!c(e[n]))throw new Error("Arr.flatten item "+n+" was not an array, input: "+e);U.apply(t,e[n])}return t}var b=function(n){function e(){return i}function t(e){return e(n)}var r=a(n),i={fold:function(e,t){return t(n)},isSome:d,isNone:m,getOr:r,getOrThunk:r,getOrDie:r,getOrNull:r,getOrUndefined:r,or:e,orThunk:e,map:function(e){return b(e(n))},each:function(e){e(n)},bind:t,exists:t,forall:t,filter:function(e){return e(n)?i:g},toArray:function(){return[n]},toString:function(){return"some("+n+")"}};return i},L={some:b,none:r,from:function(e){return null==e?g:b(e)}},y=Object.keys,A=Object.hasOwnProperty,U=Array.prototype.push;function I(e,t,n){!function(e,t,n){if(!(T(n)||N(n)||u(n)))throw console.error("Invalid call to Attribute.set. Key ",t,":: Value ",n,":: Element ",e),new Error("Attribute value was not simple");e.setAttribute(t,n+"")}(e.dom,t,n)}function C(e){return e.getParam("image_dimensions",!0,"boolean")}function x(e,t){return Math.max(parseInt(e,10),parseInt(t,10))}function O(e){return e&&e.replace(/px$/,"")}function P(e){return 0<e.length&&/^[0-9]+$/.test(e)&&(e+="px"),e}function _(e){if(e.margin){var t=String(e.margin).split(" ");switch(t.length){case 1:e["margin-top"]=e["margin-top"]||t[0],e["margin-right"]=e["margin-right"]||t[0],e["margin-bottom"]=e["margin-bottom"]||t[0],e["margin-left"]=e["margin-left"]||t[0];break;case 2:e["margin-top"]=e["margin-top"]||t[0],e["margin-right"]=e["margin-right"]||t[1],e["margin-bottom"]=e["margin-bottom"]||t[0],e["margin-left"]=e["margin-left"]||t[1];break;case 3:e["margin-top"]=e["margin-top"]||t[0],e["margin-right"]=e["margin-right"]||t[1],e["margin-bottom"]=e["margin-bottom"]||t[2],e["margin-left"]=e["margin-left"]||t[1];break;case 4:e["margin-top"]=e["margin-top"]||t[0],e["margin-right"]=e["margin-right"]||t[1],e["margin-bottom"]=e["margin-bottom"]||t[2],e["margin-left"]=e["margin-left"]||t[3]}delete e.margin}return e}function E(e){return"IMG"===e.nodeName&&(e.hasAttribute("data-mce-object")||e.hasAttribute("data-mce-placeholder"))}function R(e,t){return we.isDomSafe(t,"img",e.settings)}function k(e){return e.style.marginLeft&&e.style.marginRight&&e.style.marginLeft===e.style.marginRight?O(e.style.marginLeft):""}function z(e){return e.style.marginTop&&e.style.marginBottom&&e.style.marginTop===e.style.marginBottom?O(e.style.marginTop):""}function M(e){return e.style.borderWidth?O(e.style.borderWidth):""}function j(e,t){return e.hasAttribute(t)?e.getAttribute(t):""}function B(e,t){return e.style[t]||""}function H(e){return null!==e.parentNode&&"FIGURE"===e.parentNode.nodeName}function F(e,t,n){""===n?e.removeAttribute(t):e.setAttribute(t,n)}function G(e,t){var n=e.getAttribute("style"),r=t(null!==n?n:"");0<r.length?(e.setAttribute("style",r),e.setAttribute("data-mce-style",r)):e.removeAttribute("style")}function W(e,r){return function(e,t,n){e.style[t]?(e.style[t]=P(n),G(e,r)):F(e,t,n)}}function V(e,t){return e.style[t]?O(e.style[t]):j(e,t)}function $(e,t){var n=P(t);e.style.marginLeft=n,e.style.marginRight=n}function J(e,t){var n=P(t);e.style.marginTop=n,e.style.marginBottom=n}function K(e,t){var n=P(t);e.style.borderWidth=n}function X(e,t){e.style.borderStyle=t}function Z(e){return"FIGURE"===e.nodeName}function q(e){return 0===Ue.getAttrib(e,"alt").length&&"presentation"===Ue.getAttrib(e,"role")}function Q(){return{src:"",alt:"",title:"",width:"",height:"",class:"",style:"",caption:!1,hspace:"",vspace:"",border:"",borderStyle:"",isDecorative:!1}}function Y(e,t){return{src:j(t,"src"),alt:q(n=t)?"":j(n,"alt"),title:j(t,"title"),width:V(t,"width"),height:V(t,"height"),class:j(t,"class"),style:e(j(t,"style")),caption:H(t),hspace:k(t),vspace:z(t),border:M(t),borderStyle:B(t,"borderStyle"),isDecorative:q(t)};var n}function ee(e,t,n,r,i){n[r]!==t[r]&&i(e,r,n[r])}function te(r,i){return function(e,t,n){r(e,n),G(e,i)}}function ne(e,t){var n=_(e.dom.styles.parse(t)),r=e.dom.styles.parse(e.dom.styles.serialize(n));return e.dom.styles.serialize(r)}function re(e){var t=e.selection.getNode(),n=e.dom.getParent(t,"figure.image");return n?e.dom.select("img",n)[0]:t&&("IMG"!==t.nodeName||E(t))?null:t}function ie(n,e){var r,t,i=n.dom,a=(f(n.schema.getTextBlockElements(),function(e,t){return!n.schema.isValidChild(t,"figure")},(r=t={},function(e,t){r[t]=e}),l),t),o=i.getParent(e.parentNode,function(e){return h(t=a,n=e.nodeName)&&null!=t[n];var t,n},n.getBody());return o?i.split(o,e):e}function ae(r,e){var t=function(e){var t=document.createElement("img");if(Ce(function(e){return ne(r,e)},v(v({},e),{caption:!1}),t),Ie(t,e.alt,e.isDecorative),e.caption){var n=Ue.create("figure",{class:"image"});return n.appendChild(t),n.appendChild(Ue.create("figcaption",{contentEditable:"true"},"Caption")),n.contentEditable="false",n}return t}(e);r.dom.setAttrib(t,"data-mce-id","__mcenew"),r.focus(),r.selection.setContent(t.outerHTML);var n,i=r.dom.select('*[data-mce-id="__mcenew"]')[0];r.dom.setAttrib(i,"data-mce-id",null),Z(i)?(n=ie(r,i),r.selection.select(n)):r.selection.select(i)}function oe(t,e){var n,r,i,a,o,l,s,c,u,m,d,g,p,f,h,b=re(t);function y(){f.onload=f.onerror=null,g.selection&&(g.selection.select(f),g.nodeChanged())}b?(n=Y(function(e){return ne(t,e)},b),r=v(v({},n),e),s=t,c=r.src,i=v(v({},r),{src:R(s,c)?c:""}),r.src?(m=i,h=re(u=t),Ce(function(e){return ne(u,e)},m,h),u.dom.setAttrib(h,"src",h.getAttribute("src")),Z(h.parentNode)?(d=h.parentNode,ie(u,d),u.selection.select(h.parentNode)):(u.selection.select(h),g=u,p=m,(f=h).onload=function(){p.width||p.height||!C(g)||g.dom.setAttribs(f,{width:String(f.clientWidth),height:String(f.clientHeight)}),y()},f.onerror=y)):(a=t,(o=b)&&(l=a.dom.is(o.parentNode,"figure.image")?o.parentNode:o,a.dom.remove(l),a.focus(),a.nodeChanged(),a.dom.isEmpty(a.getBody())&&(a.setContent(""),a.selection.setCursorLocation())))):e.src&&ae(t,v(v({},Q()),e))}function le(e){return T(e.value)?e.value:""}function se(t){return void 0===t&&(t=le),function(e){return e?L.from(e).map(function(e){return Ne(e,t)}):L.none()}}function ce(e){var t=e.imageList.map(function(e){return{name:"images",type:"listbox",label:"Image list",items:e}}),n={name:"alt",type:"input",label:"Alternative description",disabled:e.hasAccessibilityOptions&&e.image.isDecorative},r=e.classList.map(function(e){return{name:"classes",type:"listbox",label:"Class",items:e}});return S([[{name:"src",type:"urlinput",filetype:"image",label:"Source"}],t.toArray(),e.hasAccessibilityOptions&&e.hasDescription?[{type:"label",label:"Accessibility",items:[{name:"isDecorative",type:"checkbox",label:"Image is decorative"}]}]:[],e.hasDescription?[n]:[],e.hasImageTitle?[{name:"title",type:"input",label:"Image title"}]:[],e.hasDimensions?[{name:"dimensions",type:"sizeinput"}]:[],[v(v({},e.classList.isSome()&&e.hasImageCaption?{type:"grid",columns:2}:{type:"panel"}),{items:S([r.toArray(),e.hasImageCaption?[{type:"label",label:"Caption",items:[{type:"checkbox",name:"caption",label:"Show caption"}]}]:[]])})]])}function ue(e){return{src:{value:e.src,meta:{}},images:e.src,alt:e.alt,title:e.title,dimensions:{width:e.width,height:e.height},classes:e.class,caption:e.caption,style:e.style,vspace:e.vspace,border:e.border,hspace:e.hspace,borderstyle:e.borderStyle,fileinput:[],isDecorative:e.isDecorative}}function me(e,t){return{src:e.src.value,alt:0===e.alt.length&&t?null:e.alt,title:e.title,width:e.dimensions.width,height:e.dimensions.height,class:e.classes,style:e.style,caption:e.caption,hspace:e.hspace,vspace:e.vspace,border:e.border,borderStyle:e.borderstyle,isDecorative:e.isDecorative}}function de(e,t,n,r){var i,a,o,l,s,c,u,m,d,g,p,f,h,b,y,v,A,D,w,S,U,I,C,x,O;U=t,C=(I=r).getData(),x=U,O=C.src.value,(/^(?:[a-zA-Z]+:)?\/\//.test(O)?L.none():x.prependURL.bind(function(e){return O.substring(0,e.length)!==e?L.some(e+O):L.none()})).each(function(e){I.setData({src:{value:e,meta:C.src.meta}})}),h=t,w=(b=r).getData(),void 0!==(S=w.src.meta)&&(y=xe({},w),A=y,D=S,(v=h).hasDescription&&T(D.alt)&&(A.alt=D.alt),v.hasAccessibilityOptions&&(A.isDecorative=D.isDecorative||A.isDecorative||!1),v.hasImageTitle&&T(D.title)&&(A.title=D.title),v.hasDimensions&&(T(D.width)&&(A.dimensions.width=D.width),T(D.height)&&(A.dimensions.height=D.height)),T(D.class)&&Ee(v.classList,D.class).each(function(e){A.classes=e.value}),v.hasImageCaption&&N(D.caption)&&(A.caption=D.caption),v.hasAdvTab&&(T(D.style)&&(A.style=D.style),T(D.vspace)&&(A.vspace=D.vspace),T(D.border)&&(A.border=D.border),T(D.hspace)&&(A.hspace=D.hspace),T(D.borderstyle)&&(A.borderstyle=D.borderstyle)),b.setData(y)),i=e,a=t,o=n,c=(s=(l=r).getData()).src.value,(u=s.src.meta||{}).width||u.height||!a.hasDimensions||(0<c.length?i.imageSize(c).then(function(e){o.open&&l.setData({dimensions:e})}).catch(function(e){return console.error(e)}):l.setData({dimensions:{width:"",height:""}})),m=t,d=n,p=(g=r).getData(),f=Ee(m.imageList,p.src.value),d.prevImage=f,g.setData({images:f.map(function(e){return e.value}).getOr("")})}function ge(l,s,t,c){var e,n=c.getData();c.block("Uploading image"),(0<(e=n.fileinput).length?L.some(e[0]):L.none()).fold(function(){c.unblock()},function(n){function r(){c.unblock(),URL.revokeObjectURL(a)}function i(e){c.setData({src:{value:e,meta:{}}}),c.showTab("general"),de(l,s,t,c)}var a=URL.createObjectURL(n),o=n;new De(function(e,t){var n=new FileReader;n.onload=function(){e(n.result)},n.onerror=function(){t(n.error.message)},n.readAsDataURL(o)}).then(function(e){var t=l.createBlobCache(n,a,e);s.automaticUploads?l.uploadImage(t).then(function(e){i(e.url),r()}).catch(function(e){r(),l.alertErr(e)}):(l.addToBlobCache(t),i(t.blobUri()),c.unblock())})})}function pe(S,U,I){return function(e,t){var n,r,i,a,o,l,s,c,u,m,d,g,p,f,h,b,y,v,A,D,w;"src"===t.name?de(S,U,I,e):"images"===t.name?(c=S,u=U,m=I,g=(d=e).getData(),(p=Ee(u.imageList,g.images)).each(function(e){""===g.alt||m.prevImage.map(function(e){return e.text===g.alt}).getOr(!1)?""===e.value?d.setData({src:e,alt:m.prevAlt}):d.setData({src:e,alt:e.text}):d.setData({src:e})}),m.prevImage=p,de(c,u,m,d)):"alt"===t.name?I.prevAlt=e.getData().alt:"style"===t.name?(o=S,s=(l=e).getData(),y=o.parseStyle,v=o.serializeStyle,D=_(y((A=s).style)),(w=xe({},A)).vspace=D["margin-top"]&&D["margin-bottom"]&&D["margin-top"]===D["margin-bottom"]?O(String(D["margin-top"])):"",w.hspace=D["margin-right"]&&D["margin-left"]&&D["margin-right"]===D["margin-left"]?O(String(D["margin-right"])):"",w.border=D["border-width"]?O(String(D["border-width"])):"",w.borderstyle=D["border-style"]?String(D["border-style"]):"",w.style=v(y(v(D))),l.setData(w)):"vspace"===t.name||"hspace"===t.name||"border"===t.name||"borderstyle"===t.name?(n=S,i=xe(ue(U.image),(r=e).getData()),f=n.normalizeCss,h=me(i,!1),F(b=document.createElement("img"),"style",h.style),!k(b)&&""===h.hspace||$(b,h.hspace),!z(b)&&""===h.vspace||J(b,h.vspace),!M(b)&&""===h.border||K(b,h.border),!B(b,"borderStyle")&&""===h.borderStyle||X(b,h.borderStyle),a=f(b.getAttribute("style")),r.setData({style:a})):"fileinput"===t.name?ge(S,U,I,e):"isDecorative"===t.name&&(e.getData().isDecorative?e.disable("alt"):e.enable("alt"))}}function fe(v){var t,n,r,i,a,o,l,s,c,A={onSubmit:function(n){return function(e){var t=xe(ue(n.image),e.getData());c.execCommand("mceUpdateImage",!1,me(t,n.hasAccessibilityOptions)),c.editorUpload.uploadImagesAuto(),e.close()}},imageSize:function(e){return R(s,e)?(i=s.documentBaseURI.toAbsolute(e),new De(function(t){function n(e){r.onload=r.onerror=null,r.parentNode&&r.parentNode.removeChild(r),t(e)}var r=document.createElement("img");r.onload=function(){var e=x(r.width,r.clientWidth),t=x(r.height,r.clientHeight);n(De.resolve({width:e,height:t}))},r.onerror=function(){n(De.reject("Failed to get image dimensions for: "+i))};var e=r.style;e.visibility="hidden",e.position="fixed",e.bottom=e.left="0px",e.width=e.height="auto",document.body.appendChild(r),r.src=i}).then(function(e){return{width:String(e.width),height:String(e.height)}})):De.resolve({width:"",height:""});var i},addToBlobCache:function(e){l.editorUpload.blobCache.add(e)},createBlobCache:function(e,t,n){return o.editorUpload.blobCache.create({blob:e,blobUri:t,name:e.name?e.name.replace(/\.[^\.]+$/,""):null,filename:e.name,base64:n.split(",")[1]})},alertErr:function(e){a.windowManager.alert(e)},normalizeCss:function(e){return ne(i,e)},parseStyle:function(e){return r.dom.parseStyle(e)},serializeStyle:function(e,t){return n.dom.serializeStyle(e,t)},uploadImage:(t=n=r=i=a=o=l=s=c=v,function(e){return Oe(t).upload([e],!1).then(function(e){return 0===e.length?De.reject("Failed to upload image"):!1===e[0].status?De.reject(e[0].error.message):e[0]})})};return{open:function(){var a,r,t,e,i,n,o,l,s,c,u,m,d,g,p,f,h,b,y;r=v,i=Pe(function(e){return r.convertURL(e.value||e.url,"src")}),n=new De(function(t){var n=function(e){t(i(e).map(function(e){return S([[{text:"None",value:""}],e])}))},e=r.getParam("image_list",!1);T(e)?Se.send({url:e,success:function(e){n(JSON.parse(e))}}):w(e)?e(n):n(e)}),o=_e(r.getParam("image_class_list")),l=r.getParam("image_advtab",!1,"boolean"),s=r.getParam("image_uploadtab",!0,"boolean"),c=D(r.getParam("images_upload_url")),u=D(r.getParam("images_upload_handler")),m=(e=re(t=r))?Y(function(e){return ne(t,e)},e):Q(),d=r.getParam("image_description",!0,"boolean"),g=r.getParam("image_title",!1,"boolean"),p=C(r),f=r.getParam("image_caption",!1,"boolean"),h=r.getParam("a11y_advanced_options",!1,"boolean"),b=r.getParam("automatic_uploads",!0,"boolean"),y=L.some(r.getParam("image_prepend_url","","string")).filter(function(e){return T(e)&&0<e.length}),n.then(function(e){return{image:m,imageList:e,classList:o,hasAdvTab:l,hasUploadTab:s,hasUploadUrl:c,hasUploadHandler:u,hasDescription:d,hasImageTitle:g,hasDimensions:p,hasImageCaption:f,prependURL:y,hasAccessibilityOptions:h,automaticUploads:b}}).then((a=A,function(e){var t,n,r,i={prevImage:Ee((t=e).imageList,t.image.src),prevAlt:t.image.alt,open:!0};return{title:"Insert/Edit Image",size:"normal",body:(r=e).hasAdvTab||r.hasUploadUrl||r.hasUploadHandler?{type:"tabpanel",tabs:S([[ke(r)],r.hasAdvTab?[Re(r)]:[],r.hasUploadTab&&(r.hasUploadUrl||r.hasUploadHandler)?[Me(r)]:[]])}:{type:"panel",items:ze(r)},buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],initialData:ue(e.image),onSubmit:a.onSubmit(e),onChange:pe(a,e,i),onClose:(n=i,function(){n.open=!1})}})).then(v.windowManager.open)}}}function he(a){return function(e){for(var t=e.length,n=function(e){e.attr("contenteditable",a?"true":null)};t--;){var r,i=e[t];(r=i.attr("class"))&&/\bimage\b/.test(r)&&(i.attr("contenteditable",a?"false":null),Te.each(i.getAll("figcaption"),n))}}}"undefined"!=typeof window||Function("return this;")();function be(e){if(null==e)throw new Error("Node cannot be null or undefined");return{dom:e}}var ye,ve=be,Ae=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),De=tinymce.util.Tools.resolve("tinymce.util.Promise"),we=tinymce.util.Tools.resolve("tinymce.util.URI"),Se=tinymce.util.Tools.resolve("tinymce.util.XHR"),Ue=Ae.DOM,Ie=function(e,t,n){n?(Ue.setAttrib(e,"role","presentation"),I(ve(e),"alt","")):(i===t?ve(e).dom.removeAttribute("alt"):I(ve(e),"alt",t),"presentation"===Ue.getAttrib(e,"role")&&Ue.setAttrib(e,"role",""))},Ce=function(e,t,n){var r=Y(e,n);ee(n,r,t,"caption",function(e,t,n){return H(r=e)?(o=r.parentNode,Ue.insertAfter(r,o),Ue.remove(o)):(i=r,a=Ue.create("figure",{class:"image"}),Ue.insertAfter(a,i),a.appendChild(i),a.appendChild(Ue.create("figcaption",{contentEditable:"true"},"Caption")),a.contentEditable="false"),0;var r,i,a,o}),ee(n,r,t,"src",F),ee(n,r,t,"title",F),ee(n,r,t,"width",W(0,e)),ee(n,r,t,"height",W(0,e)),ee(n,r,t,"class",F),ee(n,r,t,"style",te(function(e,t){return F(e,"style",t),0},e)),ee(n,r,t,"hspace",te($,e)),ee(n,r,t,"vspace",te(J,e)),ee(n,r,t,"border",te(K,e)),ee(n,r,t,"borderStyle",te(X,e)),t.alt===r.alt&&t.isDecorative===r.isDecorative||Ie(n,t.alt,t.isDecorative)},xe=(ye=function(e,t){return s(e)&&s(t)?xe(e,t):t},function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(0===e.length)throw new Error("Can't merge zero objects");for(var n={},r=0;r<e.length;r++){var i,a=e[r];for(i in a)h(a,i)&&(n[i]=ye(n[i],a[i]))}return n}),Oe=tinymce.util.Tools.resolve("tinymce.util.ImageUploader"),Te=tinymce.util.Tools.resolve("tinymce.util.Tools"),Ne=function(e,a){var o=[];return Te.each(e,function(e){var t,n,r,i=T((t=e).text)?t.text:T(t.title)?t.title:"";void 0!==e.menu?(n=Ne(e.menu,a),o.push({text:i,items:n})):(r=a(e),o.push({text:i,value:r}))}),o},Le=function(e,i){return function(e){for(var t,n=0;n<e.length;n++){var r=h(t=e[n],"items")?Le(t.items,i):t.value===i?L.some(t):L.none();if(r.isSome())return r}return L.none()}(e)},Pe=se,_e=function(e){return se(le)(e)},Ee=function(e,t){return e.bind(function(e){return Le(e,t)})},Re=function(e){return{title:"Advanced",name:"advanced",items:[{type:"input",label:"Style",name:"style"},{type:"grid",columns:2,items:[{type:"input",label:"Vertical space",name:"vspace",inputMode:"numeric"},{type:"input",label:"Horizontal space",name:"hspace",inputMode:"numeric"},{type:"input",label:"Border width",name:"border",inputMode:"numeric"},{type:"listbox",name:"borderstyle",label:"Border style",items:[{text:"Select...",value:""},{text:"Solid",value:"solid"},{text:"Dotted",value:"dotted"},{text:"Dashed",value:"dashed"},{text:"Double",value:"double"},{text:"Groove",value:"groove"},{text:"Ridge",value:"ridge"},{text:"Inset",value:"inset"},{text:"Outset",value:"outset"},{text:"None",value:"none"},{text:"Hidden",value:"hidden"}]}]}]}},ke=function(e){return{title:"General",name:"general",items:ce(e)}},ze=ce,Me=function(e){return{title:"Upload",name:"upload",items:[{type:"dropzone",name:"fileinput"}]}};o.add("image",function(e){var t,n,r;(t=e).on("PreInit",function(){t.parser.addNodeFilter("figure",he(!0)),t.serializer.addNodeFilter("figure",he(!1))}),(n=e).ui.registry.addToggleButton("image",{icon:"image",tooltip:"Insert/edit image",onAction:fe(n).open,onSetup:function(e){return e.setActive(D(re(n))),n.selection.selectorChangedWithUnbind("img:not([data-mce-object],[data-mce-placeholder]),figure.image",e.setActive).unbind}}),n.ui.registry.addMenuItem("image",{icon:"image",text:"Image...",onAction:fe(n).open}),n.ui.registry.addContextMenu("image",{update:function(e){return Z(e)||"IMG"===e.nodeName&&!E(e)?["image"]:[]}}),(r=e).addCommand("mceImage",fe(r).open),r.addCommand("mceUpdateImage",function(e,t){r.undoManager.transact(function(){return oe(r,t)})})})}();