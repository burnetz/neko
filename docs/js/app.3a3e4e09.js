(function(t){function n(n){for(var i,o,s=n[0],u=n[1],l=n[2],h=0,f=[];h<s.length;h++)o=s[h],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(t[i]=u[i]);c&&c(n);while(f.length)f.shift()();return r.push.apply(r,l||[]),e()}function e(){for(var t,n=0;n<r.length;n++){for(var e=r[n],i=!0,s=1;s<e.length;s++){var u=e[s];0!==a[u]&&(i=!1)}i&&(r.splice(n--,1),t=o(o.s=e[0]))}return t}var i={},a={app:0},r=[];function o(n){if(i[n])return i[n].exports;var e=i[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=i,o.d=function(t,n,e){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)o.d(e,i,function(n){return t[n]}.bind(null,i));return e},o.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="/neko/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=n,s=s.slice();for(var l=0;l<s.length;l++)n(s[l]);var c=u;r.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";var i=e("85ec"),a=e.n(i);a.a},"1f53":function(t,n,e){t.exports=e.p+"img/cat.f5407fe6.png"},"202d":function(t,n,e){t.exports=e.p+"img/walk1.9b5f2d6a.png"},3888:function(t,n,e){t.exports=e.p+"img/walk2.ca579e86.png"},4580:function(t,n,e){},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var i=e("2b0e"),a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[t._l(t.num_cat,(function(n){return e("Neko",{key:n,ref:"neko"+n,refInFor:!0,on:{mouseenter:function(){t.randomWalk(n)}}})})),e("Nekojarashi",{on:{njmove:function(n){t.NJx=n[0],t.NJy=n[1]},grab:t.njGrab}})],2)},r=[],o=(e("b64b"),function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"neko"},[0==t.status?i("div",{on:{mouseenter:function(n){return t.$emit("mouseenter")}}},[i("img",{style:t.stylePosition,attrs:{alt:"catsit",src:e("7b83")}})]):t._e(),1==t.status?i("div",{on:{mouseenter:function(n){return t.$emit("mouseenter")}}},[i("img",{style:t.stylePosition,attrs:{alt:"catwalk3",src:e("9292")}})]):t._e(),2==t.status?i("div",[i("img",{style:Object.assign(t.stylePosition,{transform:"rotate("+180*Math.atan((t.targety-t.y)/(t.targetx-t.x))/Math.PI+"deg) rotateY("+(t.targetx-t.x<0?0:180)+"deg)"}),attrs:{alt:"cat"+t.walkPicName,src:e("9e01")("./"+t.walkPicName+".png")}})]):t._e()])}),s=[],u=0,l=1,c=2,h=8,f={name:"Neko",props:{ix:String,iy:String},data:function(){return{x:parseInt(this.ix)||window.innerWidth/2,y:parseInt(this.iy)||window.innerHeight/2,status:u,walkspeed:3,walkcount:0,targetx:parseInt(this.ix)|window.innerWidth/2,targety:parseInt(this.iy)|window.innerHeight/2,walktimer:null,sittimer:null}},computed:{walkPicName:function(){return"walk"+String(Math.floor(this.walkcount/this.walkspeed)+1)},stylePosition:function(){return{left:this.x-50+"px",top:this.y-50+"px"}}},methods:{walk:function(t){var n=this;this.status==c&&clearInterval(this.walktimer),clearInterval(this.sittimer);var e=this;this.status=c,this.walktimer=setInterval((function(){var i=e.targetx-e.x,a=e.targety-e.y;Math.pow(i,2)+Math.pow(a,2)<n.walkspeed&&(clearInterval(e.walktimer),e.status=l,e.sittimer=setTimeout((function(){e.sit()}),5e3),t&&t());var r=Math.abs(Math.atan(a/i));0!=i&&(e.x+=Math.cos(r)*(i<0?-1:1)*n.walkspeed),0!=a&&(e.y+=Math.sin(r)*(a<0?-1:1)*n.walkspeed),e.walkcount+1<n.walkspeed*h?e.walkcount+=1:e.walkcount=0}),50)},walkToTarget:function(t,n,e){this.targetx=t,this.targety=n,this.walk(e)},sit:function(){this.status==c&&clearInterval(this.walktimer),this.status=u}}},p=f,d=(e("80a0"),e("2877")),g=Object(d["a"])(p,o,s,!1,null,"5b38624a",null),m=g.exports,k=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"nekojarashi-field",on:{mousemove:t.njmove}},[i("div",{ref:"nekojarashi",staticClass:"nekojarashi-cover",style:{left:this.NJx-25+"px",top:this.NJy-25+"px",transform:t.isShaking?"rotate(5deg)":"rotate(-5deg)"},on:{mousedown:function(n){return t.grabChanged(!t.isGrabbing)}}},[i("img",{staticClass:"nekojarashi-img",attrs:{alt:"nekojarashi",src:e("f25f")}})])])},w=[],b={data:function(){return{isGrabbing:!1,NJx:window.innerWidth-50,NJy:window.innerHeight-50,shakeTimer:null,isShaking:!1}},mounted:function(){this.shake(),this.$emit("nekojarashi",[this.NJx,this.NJy])},methods:{grabChanged:function(t){this.isGrabbing=t,this.$emit("grab",this.isGrabbing),this.isGrabbing&&this.$emit("njmove",[this.NJx,this.NJy]),this.shake()},njmove:function(t){this.isGrabbing&&(this.NJx=t.x,this.NJy=t.y,this.$emit("njmove",[this.NJx,this.NJy]))},shake:function(){clearTimeout(this.shakeTimer),this.isShaking=!this.isShaking,this.isShaking&&!this.isGrabbing?this.shakeTimer=setTimeout(this.shake,2e3):this.shakeTimer=setTimeout(this.shake,250)}}},v=b,y=(e("d51c"),Object(d["a"])(v,k,w,!1,null,null,null)),x=y.exports,j=10,N={name:"App",components:{Neko:m,Nekojarashi:x},data:function(){return{randtimer:[null],num_cat:0,NJx:window.innerWidth-10,NJy:window.innerHeight-10,isGrabbing:!1}},created:function(){this.num_cat=Math.floor(Math.random()*Math.floor(j))+1},mounted:function(){for(var t=1;t<=Object.keys(this.$refs).length;t++)this.randtimer.push(null),this.$refs["neko"+t][0].x=Math.floor(Math.random()*(window.innerWidth-100))+50,this.$refs["neko"+t][0].y=Math.floor(Math.random()*(window.innerHeight-100))+50,this.randomWalk(t)},methods:{randomWalk:function(t){clearTimeout(this.randtimer[t]);var n=this,e=Math.floor(Math.random()*window.innerWidth),i=Math.floor(Math.random()*window.innerHeight);this.$refs["neko"+t][0].walkToTarget(e,i,(function(){var e=100*Math.floor(50*Math.random());e>4e3&&(e=6e4),n.randtimer[t]=setTimeout((function(){n.randomWalk(t)}),e)}))},njGrab:function(t){this.isGrabbing=t;for(var n=1;n<=Object.keys(this.$refs).length;n++)this.isGrabbing?this.nekojarashiWalk(n,this.setNekojarashiWalk):this.randomWalk(n)},nekojarashiWalk:function(t){var n=this;if(clearTimeout(this.randtimer[t]),this.isGrabbing){var e=this;this.$refs["neko"+t][0].walkToTarget(this.NJx,this.NJy,(function(){clearTimeout(n.randtimer[t]),e.randtimer[t]=setTimeout((function(){e.randomWalk(t)}),1e3)})),this.randtimer[t]=setTimeout((function(){e.nekojarashiWalk(t)}),200)}}}},M=N,T=(e("034f"),Object(d["a"])(M,a,r,!1,null,null,null)),O=T.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(O)}}).$mount("#app")},"7b83":function(t,n,e){t.exports=e.p+"img/sit.53dd1279.png"},"80a0":function(t,n,e){"use strict";var i=e("4580"),a=e.n(i);a.a},"85ec":function(t,n,e){},9064:function(t,n,e){},9292:function(t,n,e){t.exports=e.p+"img/walk3.4cef5ae4.png"},"9e01":function(t,n,e){var i={"./cat.png":"1f53","./logo.png":"cf05","./nekojarashi.png":"f25f","./sit.png":"7b83","./walk1.png":"202d","./walk2.png":"3888","./walk3.png":"9292","./walk4.png":"f141","./walk5.png":"d1b4","./walk6.png":"d241","./walk7.png":"c542","./walk8.png":"ad77"};function a(t){var n=r(t);return e(n)}function r(t){if(!e.o(i,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return i[t]}a.keys=function(){return Object.keys(i)},a.resolve=r,t.exports=a,a.id="9e01"},ad77:function(t,n,e){t.exports=e.p+"img/walk8.ca579e86.png"},c542:function(t,n,e){t.exports=e.p+"img/walk7.4cef5ae4.png"},cf05:function(t,n,e){t.exports=e.p+"img/logo.82b9c7a5.png"},d1b4:function(t,n,e){t.exports=e.p+"img/walk5.8d0e7d47.png"},d241:function(t,n,e){t.exports=e.p+"img/walk6.d61a033c.png"},d51c:function(t,n,e){"use strict";var i=e("9064"),a=e.n(i);a.a},f141:function(t,n,e){t.exports=e.p+"img/walk4.d61a033c.png"},f25f:function(t,n,e){t.exports=e.p+"img/nekojarashi.03a5605a.png"}});
//# sourceMappingURL=app.3a3e4e09.js.map