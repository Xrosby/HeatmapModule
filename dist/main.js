!function(t){var e={};function a(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=e,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(i,r,function(e){return t[e]}.bind(null,r));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=1)}([function(t,e,a){var i,r,n;n=function(){var t,e={defaultRadius:40,defaultRenderer:"canvas2d",defaultGradient:{.25:"rgb(0,0,255)",.55:"rgb(0,255,0)",.85:"yellow",1:"rgb(255,0,0)"},defaultMaxOpacity:1,defaultMinOpacity:0,defaultBlur:.85,defaultXField:"x",defaultYField:"y",defaultValueField:"value",plugins:{}},a=function(){var t=function(t){this._coordinator={},this._data=[],this._radi=[],this._min=10,this._max=1,this._xField=t.xField||t.defaultXField,this._yField=t.yField||t.defaultYField,this._valueField=t.valueField||t.defaultValueField,t.radius&&(this._cfgRadius=t.radius)},a=e.defaultRadius;return t.prototype={_organiseData:function(t,e){var i=t[this._xField],r=t[this._yField],n=this._radi,s=this._data,o=this._max,h=this._min,d=t[this._valueField]||1,u=t.radius||this._cfgRadius||a;s[i]||(s[i]=[],n[i]=[]),s[i][r]?s[i][r]+=d:(s[i][r]=d,n[i][r]=u);var l=s[i][r];return l>o?(e?this.setDataMax(l):this._max=l,!1):l<h?(e?this.setDataMin(l):this._min=l,!1):{x:i,y:r,value:d,radius:u,min:h,max:o}},_unOrganizeData:function(){var t=[],e=this._data,a=this._radi;for(var i in e)for(var r in e[i])t.push({x:i,y:r,radius:a[i][r],value:e[i][r]});return{min:this._min,max:this._max,data:t}},_onExtremaChange:function(){this._coordinator.emit("extremachange",{min:this._min,max:this._max})},addData:function(){if(arguments[0].length>0)for(var t=arguments[0],e=t.length;e--;)this.addData.call(this,t[e]);else{var a=this._organiseData(arguments[0],!0);a&&(0===this._data.length&&(this._min=this._max=a.value),this._coordinator.emit("renderpartial",{min:this._min,max:this._max,data:[a]}))}return this},setData:function(t){var e=t.data,a=e.length;this._data=[],this._radi=[];for(var i=0;i<a;i++)this._organiseData(e[i],!1);return this._max=t.max,this._min=t.min||0,this._onExtremaChange(),this._coordinator.emit("renderall",this._getInternalData()),this},removeData:function(){},setDataMax:function(t){return this._max=t,this._onExtremaChange(),this._coordinator.emit("renderall",this._getInternalData()),this},setDataMin:function(t){return this._min=t,this._onExtremaChange(),this._coordinator.emit("renderall",this._getInternalData()),this},setCoordinator:function(t){this._coordinator=t},_getInternalData:function(){return{max:this._max,min:this._min,data:this._data,radi:this._radi}},getData:function(){return this._unOrganizeData()}},t}(),i=function(){var t=function(t){var e=t.gradient||t.defaultGradient,a=document.createElement("canvas"),i=a.getContext("2d");a.width=256,a.height=1;var r=i.createLinearGradient(0,0,256,1);for(var n in e)r.addColorStop(n,e[n]);return i.fillStyle=r,i.fillRect(0,0,256,1),i.getImageData(0,0,256,1).data},e=function(t,e){var a=document.createElement("canvas"),i=a.getContext("2d"),r=t,n=t;if(a.width=a.height=2*t,1==e)i.beginPath(),i.arc(r,n,t,0,2*Math.PI,!1),i.fillStyle="rgba(0,0,0,1)",i.fill();else{var s=i.createRadialGradient(r,n,t*e,r,n,t);s.addColorStop(0,"rgba(0,0,0,1)"),s.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=s,i.fillRect(0,0,2*t,2*t)}return a};function a(e){var a=e.container,i=this.shadowCanvas=document.createElement("canvas"),r=this.canvas=e.canvas||document.createElement("canvas"),n=(this._renderBoundaries=[1e4,1e4,0,0],getComputedStyle(e.container)||{});r.className="heatmap-canvas",this._width=r.width=i.width=e.width||+n.width.replace(/px/,""),this._height=r.height=i.height=e.height||+n.height.replace(/px/,""),this.shadowCtx=i.getContext("2d"),this.ctx=r.getContext("2d"),r.style.cssText=i.style.cssText="position:absolute;left:0;top:0;",a.style.position="relative",a.appendChild(r),this._palette=t(e),this._templates={},this._setStyles(e)}return a.prototype={renderPartial:function(t){t.data.length>0&&(this._drawAlpha(t),this._colorize())},renderAll:function(t){this._clear(),t.data.length>0&&(this._drawAlpha(function(t){for(var e=[],a=t.min,i=t.max,r=t.radi,n=(t=t.data,Object.keys(t)),s=n.length;s--;)for(var o=n[s],h=Object.keys(t[o]),d=h.length;d--;){var u=h[d],l=t[o][u],c=r[o][u];e.push({x:o,y:u,value:l,radius:c})}return{min:a,max:i,data:e}}(t)),this._colorize())},_updateGradient:function(e){this._palette=t(e)},updateConfig:function(t){t.gradient&&this._updateGradient(t),this._setStyles(t)},setDimensions:function(t,e){this._width=t,this._height=e,this.canvas.width=this.shadowCanvas.width=t,this.canvas.height=this.shadowCanvas.height=e},_clear:function(){this.shadowCtx.clearRect(0,0,this._width,this._height),this.ctx.clearRect(0,0,this._width,this._height)},_setStyles:function(t){this._blur=0==t.blur?0:t.blur||t.defaultBlur,t.backgroundColor&&(this.canvas.style.backgroundColor=t.backgroundColor),this._width=this.canvas.width=this.shadowCanvas.width=t.width||this._width,this._height=this.canvas.height=this.shadowCanvas.height=t.height||this._height,this._opacity=255*(t.opacity||0),this._maxOpacity=255*(t.maxOpacity||t.defaultMaxOpacity),this._minOpacity=255*(t.minOpacity||t.defaultMinOpacity),this._useGradientOpacity=!!t.useGradientOpacity},_drawAlpha:function(t){for(var a=this._min=t.min,i=this._max=t.max,r=(t=t.data||[]).length,n=1-this._blur;r--;){var s,o=t[r],h=o.x,d=o.y,u=o.radius,l=Math.min(o.value,i),c=h-u,_=d-u,f=this.shadowCtx;this._templates[u]?s=this._templates[u]:this._templates[u]=s=e(u,n);var g=(l-a)/(i-a);f.globalAlpha=g<.01?.01:g,f.drawImage(s,c,_),c<this._renderBoundaries[0]&&(this._renderBoundaries[0]=c),_<this._renderBoundaries[1]&&(this._renderBoundaries[1]=_),c+2*u>this._renderBoundaries[2]&&(this._renderBoundaries[2]=c+2*u),_+2*u>this._renderBoundaries[3]&&(this._renderBoundaries[3]=_+2*u)}},_colorize:function(){var t=this._renderBoundaries[0],e=this._renderBoundaries[1],a=this._renderBoundaries[2]-t,i=this._renderBoundaries[3]-e,r=this._width,n=this._height,s=this._opacity,o=this._maxOpacity,h=this._minOpacity,d=this._useGradientOpacity;t<0&&(t=0),e<0&&(e=0),t+a>r&&(a=r-t),e+i>n&&(i=n-e);for(var u=this.shadowCtx.getImageData(t,e,a,i),l=u.data,c=l.length,_=this._palette,f=3;f<c;f+=4){var g,m=l[f],p=4*m;p&&(g=s>0?s:m<o?m<h?h:m:o,l[f-3]=_[p],l[f-2]=_[p+1],l[f-1]=_[p+2],l[f]=d?_[p+3]:g)}u.data=l,this.ctx.putImageData(u,t,e),this._renderBoundaries=[1e3,1e3,0,0]},getValueAt:function(t){var e=this.shadowCtx.getImageData(t.x,t.y,1,1).data[3],a=this._max,i=this._min;return Math.abs(a-i)*(e/255)>>0},getDataURL:function(){return this.canvas.toDataURL()}},a}(),r=(t=!1,"canvas2d"===e.defaultRenderer&&(t=i),t),n={merge:function(){for(var t={},e=arguments.length,a=0;a<e;a++){var i=arguments[a];for(var r in i)t[r]=i[r]}return t}},s=function(){var t=function(){function t(){this.cStore={}}return t.prototype={on:function(t,e,a){var i=this.cStore;i[t]||(i[t]=[]),i[t].push((function(t){return e.call(a,t)}))},emit:function(t,e){var a=this.cStore;if(a[t])for(var i=a[t].length,r=0;r<i;r++)(0,a[t][r])(e)}},t}(),i=function(t){var e=t._renderer,a=t._coordinator,i=t._store;a.on("renderpartial",e.renderPartial,e),a.on("renderall",e.renderAll,e),a.on("extremachange",(function(e){t._config.onExtremaChange&&t._config.onExtremaChange({min:e.min,max:e.max,gradient:t._config.gradient||t._config.defaultGradient})})),i.setCoordinator(a)};function s(){var s=this._config=n.merge(e,arguments[0]||{});if(this._coordinator=new t,s.plugin){var o=s.plugin;if(!e.plugins[o])throw new Error("Plugin '"+o+"' not found. Maybe it was not registered.");var h=e.plugins[o];this._renderer=new h.renderer(s),this._store=new h.store(s)}else this._renderer=new r(s),this._store=new a(s);i(this)}return s.prototype={addData:function(){return this._store.addData.apply(this._store,arguments),this},removeData:function(){return this._store.removeData&&this._store.removeData.apply(this._store,arguments),this},setData:function(){return this._store.setData.apply(this._store,arguments),this},setDataMax:function(){return this._store.setDataMax.apply(this._store,arguments),this},setDataMin:function(){return this._store.setDataMin.apply(this._store,arguments),this},configure:function(t){return this._config=n.merge(this._config,t),this._renderer.updateConfig(this._config),this._coordinator.emit("renderall",this._store._getInternalData()),this},repaint:function(){return this._coordinator.emit("renderall",this._store._getInternalData()),this},getData:function(){return this._store.getData()},getDataURL:function(){return this._renderer.getDataURL()},getValueAt:function(t){return this._store.getValueAt?this._store.getValueAt(t):this._renderer.getValueAt?this._renderer.getValueAt(t):null}},s}();return{create:function(t){return new s(t)},register:function(t,a){e.plugins[t]=a}}},t.exports?t.exports=n():void 0===(r="function"==typeof(i=n)?i.call(e,a,e,t):i)||(t.exports=r)},function(t,e,a){"use strict";a.r(e);var i=a(0);a.n(i).a.create({container:document.getElementById("map")}).setData({max:5,data:[{x:100,y:550,value:1e5},{x:200,y:65,value:100},{x:120,y:315,value:25},{x:220,y:65,value:10}]})}]);