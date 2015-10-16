/*!
 * jQuery YouTube Popup Player Plugin v2.4
 * http://lab.abhinayrathore.com/jquery_youtube/
 * https://github.com/abhinayrathore/jQuery-YouTube-Popup-Player-Plugin
 */
!function(o,e){function t(o,e,t){var i='<iframe title="YouTube video player" style="margin:0; padding:0;" width="'+e+'" ';return i+='height="'+t+'" src="'+o+'" frameborder="0" allowfullscreen></iframe>'}function i(t){o.ajax({url:e.location.protocol+"//query.yahooapis.com/v1/public/yql",data:{q:"select * from json where url ='http://www.youtube.com/oembed?url=http://www.youtube.com/watch?v="+t+"&format=json'",format:"json"},dataType:"jsonp",success:function(o){o&&o.query&&o.query.results&&o.query.results.json&&u.dialog({title:o.query.results.json.title})}})}function a(o){var e=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/,t=o.match(e);return t&&11===t[2].length?t[2]:!1}var u=null,r={},l={init:function(l){return l=o.extend({},o.fn.YouTubePopup.defaults,l),null===u&&(u=o("<div>").css({display:"none",padding:0}),o("body").append(u),u.dialog({autoOpen:!1,resizable:!1,draggable:l.draggable,modal:l.modal,dialogClass:l.cssClass,create:function(){r.backgroundImage=o(".ui-dialog").css("background-image"),r.border=o(".ui-dialog").css("border"),r.backgroundColor=o(".ui-dialog").css("background-color")},close:function(){u.html(""),o(".ui-dialog-titlebar").show(),o(".ui-dialog").css({"background-image":r.backgroundImage,border:r.border,"background-color":r.backgroundColor})}})),this.each(function(){var r,n,d,s,c=o(this),h=c.data("YouTube");h||(c.data("YouTube",{target:c}),o(c).bind("click.YouTubePopup",function(h){r=l.youtubeId,""===o.trim(r)&&c.is("a")&&(r=a(c.attr("href"))),(""===o.trim(r)||r===!1)&&(r=c.attr(l.idAttribute)),n=o.trim(l.title),d=e.location.protocol+"//www.youtube.com/embed/"+r+"?rel=0&showsearch=0&autohide="+l.autohide,d+="&autoplay="+l.autoplay+"&controls="+l.controls+"&fs="+l.fs+"&loop="+l.loop,d+="&showinfo="+l.showinfo+"&color="+l.color+"&theme="+l.theme,u.html(t(d,l.width,l.height)),u.dialog({width:"auto",height:"auto"}),u.dialog({minWidth:l.width,minHeight:l.height,title:n}),u.dialog("open"),o(".ui-widget-overlay").fadeTo("fast",l.overlayOpacity),s=o(".ui-dialog-titlebar"),l.hideTitleBar&&l.modal&&(s.hide(),o(".ui-widget-overlay").click(function(){u.dialog("close")})),l.clickOutsideClose&&l.modal&&o(".ui-widget-overlay").click(function(){u.dialog("close")}),s.removeClass("ui-corner-all").addClass("ui-corner-top"),l.showBorder||o(".ui-dialog").css({"background-image":"none",border:"none","background-color":"transparent"}),h.preventDefault()}))})},destroy:function(){return this.each(function(){o(this).unbind(".YouTubePopup"),o(this).removeData("YouTube")})}};o.fn.YouTubePopup=function(e){return l[e]?l[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?void o.error("Method "+e+" does not exist on jQuery.YouTubePopup"):l.init.apply(this,arguments)},o.fn.YouTubePopup.defaults={youtubeId:"",title:"",useYouTubeTitle:!0,idAttribute:"rel",cssClass:"YouTubeDialog",draggable:!1,modal:!0,width:742,height:418,hideTitleBar:!1,clickOutsideClose:!1,overlayOpacity:.7,autohide:2,autoplay:1,color:"red",controls:1,fs:1,loop:0,showinfo:0,theme:"light",showBorder:!0}}(jQuery,window);

