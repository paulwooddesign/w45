!function(e){typeof define=="function"&&define.amd?define(["jquery"],e):TogglePanel=e(jQuery)}(function(e){function l(e){Array.prototype.slice.call(e.querySelectorAll("video")).forEach(function(e){e.parentNode.insertBefore(e.cloneNode(!0),e);e.parentNode.removeChild(e)})}var t=0,n="TogglePanel",r="togglepanel",i="toggle-panel",s=[],o=!!navigator.userAgent.match(/iPad/i),u=e(window),a=e(document.documentElement).addClass("js"),f=e(document.body);e.fn[n]=function(c){function h(n,c){var h=i+"-"+t++,p=e.Deferred(),d=e(n),v=d.attr("aria-controls"),m=v?d:d.children().first(),g=v?e("#"+v):d.children().slice(1);g=g.wrapAll("<div><div></div></div>").parent().parent().addClass(i+"-content");o&&l(n);c=e.extend(!0,{ajax:{enabled:d.hasClass("ajax"),message:{defaultError:"An error occured. Please try again later.",notFound:"404: The requested content could not be found.",timeout:"The requested content could not be delivered in a timely fashion."},retry:{times:2},selector:'[role="main"] > *'}},c);if(c.ajax.enabled){if(!c.ajax.settings||!c.ajax.settings.url){var y=g.children().find("a");c.ajax.settings.url=y.attr("href");y.data("ajax-selector")&&(c.ajax.selector=y.data("ajax-selector"))}e.ajaxPrefilter(function(e,t,n){typeof n.retry!="function"&&(n.retry=function(){return this})})}m.data("expanded-text")&&(c.expandedText=m.data("expanded-text"));c.expandedText&&(c.collapsedText=m.html());var b={version:"1.0.0",destroy:function(){for(var e=0;e<s.length;e++)clearTimeout(s[e]);m.removeAttr("role");v||m.removeAttr("aria-controls");g.removeClass("transition").children().children().unwrap().unwrap();d.removeAttr("aria-expanded tabindex").removeClass("transition").removeData(r).filter('[id="'+h+'"]').removeAttr("id").end().add([window,document.body,m[0]]).off("."+h).end().trigger(r+"destroy");return b},collapse:function(){c.collapsedText&&m.html(c.collapsedText);g.height(0);d.attr("aria-expanded",n.ariaExpanded=!1).removeClass("expanded").trigger(r+"collapse");return b},expand:function(){c.beforeExpand(p);p.always(function(e){e&&g.children().empty().append(e);c.expandedText&&m.html(c.expandedText);g.height(g.children().outerHeight());d.attr("aria-expanded",n.ariaExpanded=!0).addClass("expanded").trigger(r+"expand")});return b},toggle:function(){return b[n.ariaExpanded?"collapse":"expand"]()},resize:function(){n.ariaExpanded&&g.height(g.children().outerHeight());return b},extensions:{ajax:{load:function(t){if(!n.ariaBusy&&t.state()!=="resolved"&&t.state()!=="rejected"){d.attr({"aria-busy":n.ariaBusy=!0,"aria-live":"polite"});e.ajax(c.ajax.settings).retry(c.ajax.retry).always(function(){n.ariaBusy=!1;d.removeAttr("aria-busy")}).done(function(n){t.resolve(e("<html></html>").html(n).find(c.ajax.selector))}).fail(function(e){t.reject("<p>"+({"Not Found":c.ajax.message.notFound,timeout:c.ajax.message.timeout}[e.statusText]||c.ajax.message.defaultError)+"</p>")})}}},hashWatch:function(){var t={changeHash:function(e,n){var r=n[0].id;n[0].id="";location.hash=e;n[0].id=r;return t},expand:function(e,r){var i="#"+n.id===e?d:d.find(e);if(i.length){r&&r.preventDefault();b.expand();t.changeHash(e,i);setTimeout(function(){a.add(f).animate({scrollTop:i.offset().top})},250)}return t}};f.on("click."+h,'a[href^="#"]:not([href="#"])',function(n){t.expand(e(n.target).attr("href"),n)}).on("hashchange."+h,function(){t.expand(location.hash)});return t.expand(location.hash)},pauseMedia:function(){d.on(r+"collapse."+h,function(){g.find("audio, video").each(function(){this.pause()})})},saveState:function(e){if(typeof e!="object")return;var t={remove:function(){e.removeItem(h);return t},load:function(){var n=e.getItem(h),r=JSON.parse(n);r&&r.expanded&&b.expand();return t},save:function(){e.setItem(h,JSON.stringify({expanded:n.ariaExpanded}));return t}};o?d.on(r+"expand."+h+" "+r+"collapse."+h,t.save):u.on("unload."+h,t.save);return t.load()}}};c.beforeExpand||(c.beforeExpand=c.ajax.enabled?b.extensions.ajax.load:function(e){e.resolve()});(e.resize?d:u).on("resize."+h,b.resize);m.attr("role","button").on("click."+h,function(e){e.preventDefault();b.toggle()});d.attr("tabindex",0).on("keydown."+h,function(e){e.keyCode===32&&e.target===n&&b.toggle()});m.attr("aria-controls")||m.attr("aria-controls",n.id||(n.id=h));s.push(setTimeout(function(){b.collapse();c.hashWatch&&b.extensions.hashWatch();c.pauseMedia&&b.extensions.pauseMedia();c.saveState&&b.extensions.saveState({local:localStorage,session:sessionStorage}[c.saveState]);s.push(setTimeout(function(){g.addClass("transition");d.addClass("transition")}))}));return b}var p=Array.prototype.slice.call(arguments,1);return this.each(function(t){var i=e(this);i.data(r)?typeof i.data(r)[c]=="function"?i.data(r)[c].apply(this,p):e.error(n+' method name "'+c+'" does not exist.'):i.data(r,h(this,c))})}});