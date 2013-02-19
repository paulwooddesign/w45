//////////////////////////////////////////////////////////////
// Set Variables
/////////////////////////////////////////////////////////////
function isMobile(){return navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/BlackBerry/)}function isiPad(){return navigator.platform.indexOf("iPad")!=-1}function isiPhone(){return navigator.platform.indexOf("iPhone")!=-1||navigator.platform.indexOf("iPod")!=-1}function isotopeAnimationEngine(){return jQuery.browser.mozilla||jQuery.browser.msie?"jquery":"css"}function lightboxInit(){screen.width>500&&jQuery("a[rel^='prettyPhoto']").prettyPhoto({social_tools:!1,deeplinking:!1})}function projectFilterInit(){jQuery("#filterNav a").click(function(){var e=jQuery(this).attr("data-filter");jQuery("#projects .thumbs2").isotope({filter:e,hiddenStyle:{opacity:0,scale:1}});if(!jQuery(this).hasClass("selected")){jQuery(this).parents("#filterNav").find(".selected").removeClass("selected");jQuery(this).addClass("selected")}return!1})}function projectThumbInit(){if(!isiPad()&&!isiPhone()){jQuery(".project.small").hover(function(){jQuery(this).hasClass("selected")||jQuery(this).find("img:last").stop().fadeTo("fast",.9)},function(){jQuery(this).hasClass("selected")||jQuery(this).find("img:last").stop().fadeTo("fast",1)});jQuery(".project.small").hover(function(){jQuery(this).find(".title").stop().fadeTo("fast",1);jQuery(this).find("img:last").attr("title","")},function(){jQuery(this).hasClass("selected")||jQuery(this).find(".title").stop().fadeTo("fast",0)})}jQuery(".project.small").css("opacity","1");jQuery(".project.small.ajx").click(function(){jQuery(".thumbs2 .selected .title").hide();jQuery(".thumbs2 .selected").find("img:last").stop().fadeTo("fast",1);jQuery(".thumbs2 .selected").removeClass("selected");jQuery(this).addClass("selected");jQuery(".thumbs2 .selected .title").show();var e=jQuery(this).attr("id").replace(/^project-/,"");jQuery.scrollTo(0,scrollSpeed);processProject(e)})}function processProject(e){jQuery("#projectBox").css("height",jQuery("#projectHolder").outerHeight());if(currentProject!="")jQuery("#projectHolder").fadeOut(transitionSpeed,function(){jQuery(".project.ajax").remove();currentProject="";if(e){loadProject(e);jQuery("#ajaxLoading").fadeIn("fast")}});else if(e){jQuery("#homeMessage").removeClass("withBorder");jQuery("#pageHead").removeClass("withBorder");jQuery("#projectBox").animate({height:emptyProjectBoxHeight},scrollSpeed,function(){jQuery("#ajaxLoading").fadeIn("fast",function(){loadProject(e)})})}e||jQuery("#projectBox").animate({height:0},scrollSpeed,function(){jQuery("#homeMessage").addClass("withBorder");jQuery("#pageHead").addClass("withBorder")})}function loadProject(e){jQuery("#projectHolder").load(MyAjax.ajaxurl,{action:"myajax-submit",slug:e},function(e){})}function waitForMedia(e,t){var n=0,r=0,i=["img"],s=t!="0"?1:0;for(var o=0;o<=i.length;o++)n+=jQuery("#projectHolder "+i[o]).length;if(n>0)for(var o=0;o<=i.length;o++)jQuery("#projectHolder "+i[o]).each(function(){jQuery(this).load(function(){r++;r==n&&jQuery("#ajaxLoading").fadeOut("fast",function(){jQuery(".flexslider").flexslider({slideshowSpeed:t+"000",slideshow:s,animation:"fade",animationLoop:!0,controlNav:!0,directionNav:!0,pauseOnAction:!0,pauseOnHover:!1,useCSS:!0,touch:!0,video:!1});showProject(e)})})});else jQuery("#ajaxLoading").fadeOut("fast",function(){isiPad()&&jQuery.each(jQuery("iframe"),function(){jQuery(this).attr({src:jQuery(this).attr("src")})});showProject(e)})}function showProject(e){jQuery("#projectHolder").fadeIn(transitionSpeed);currentProject="project-"+e;jQuery("#"+currentProject).addClass("selected");targetHeight=jQuery("#projectHolder").outerHeight();jQuery("#projectHolder").css("height",targetHeight);jQuery("#projectBox").animate({height:jQuery("#projectHolder").outerHeight()},scrollSpeed,function(){jQuery("#projectHolder").css("height","auto");jQuery("#projectBox").css("height","auto")});previousHeight=targetHeight;jQuery("#projectHolder .closeBtn").click(function(){jQuery(".thumbs .selected .title").hide();jQuery(".thumbs .selected").find("img:last").stop().fadeTo("fast",1);jQuery(".thumbs .selected").removeClass("selected");jQuery.scrollTo(0,scrollSpeed);processProject()})}function nextPrevProject(e){var t=e;jQuery(".thumbs .selected .title").hide();jQuery(".thumbs .selected").find("img:last").stop().fadeTo("fast",1);jQuery(".thumbs .selected").removeClass("selected");jQuery("#project-"+t).addClass("selected");jQuery(".thumbs .selected").find(".title").stop().fadeTo("fast",1);jQuery.scrollTo(0,scrollSpeed);processProject(t)}function toggle_panel(){jQuery(".toggle-panel").TogglePanel({ajax:{settings:{timeout:1e3}},hashWatch:!0,pauseMedia:!0,saveState:"session"});jQuery(".collapse-all").on("click",function(){jQuery(".toggle-panel").TogglePanel("collapse")});jQuery(".expand-all").on("click",function(){jQuery(".toggle-panel").TogglePanel("expand")});jQuery(".toggle-all").on("click",function(){jQuery(".toggle-panel").TogglePanel("toggle")})}function tab_panel(){jQuery(".accordion, .tabs").TabsAccordion({hashWatch:!0,pauseMedia:!0,responsiveSwitch:1})}function horThumbSlider(){jQuery(".video-touchslider").royalSlider({arrowsNav:!1,fadeinLoadedSlide:!0,controlNavigationSpacing:0,controlNavigation:"thumbnails",thumbs:{autoCenter:!0,fitInViewport:!0,orientation:"horizontal",spacing:0},imageScaleMode:"fill",imageAlignCenter:!0,loop:!1,loopRewind:!0,numImagesToPreload:3,video:{autoHideArrows:!0,autoHideControlNav:!1,youTubeCode:'<iframe src="http://www.youtube.com/embed/%id%?theme=dark&color=white&rel=1&autoplay=1&showinfo=0" frameborder="no"></iframe>',vimeoCode:'<iframe src="http://player.vimeo.com/video/%id%?byline=0&amp;portrait=0&amp;autoplay=1&amp;color=FF9E15"" frameborder="no" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>',keyboardNavEnabled:!0,autoHideBlocks:!0},minSlideOffset:10,slidesSpacing:0})}function instagramSlider(){jQuery("#instagram").royalSlider({arrowsNav:!1,fadeinLoadedSlide:!0,controlNavigationSpacing:0,controlNavigation:"thumbnails",thumbs:{autoCenter:!0,fitInViewport:!0,orientation:"horizontal",spacing:0},imageScaleMode:"fill",imageAlignCenter:!0,loop:!1,loopRewind:!0,numImagesToPreload:3,video:{autoHideArrows:!0,autoHideControlNav:!1,youTubeCode:'<iframe src="http://www.youtube.com/embed/%id%?theme=dark&color=white&rel=1&autoplay=1&showinfo=0" frameborder="no"></iframe>',vimeoCode:'<iframe src="http://player.vimeo.com/video/%id%?byline=0&amp;portrait=0&amp;autoplay=1&amp;color=FF9E15"" frameborder="no" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>',keyboardNavEnabled:!0,autoHideBlocks:!0},minSlideOffset:10,slidesSpacing:0})}function video_gallery(){jQuery(".video-gallery").royalSlider({arrowsNav:!1,fadeinLoadedSlide:!0,controlNavigationSpacing:0,controlNavigation:"thumbnails",thumbs:{autoCenter:!1,fitInViewport:!0,orientation:"vertical",spacing:0},imageScaleMode:"fill",imageAlignCenter:!0,loop:!1,loopRewind:!0,numImagesToPreload:3,video:{autoHideArrows:!0,autoHideControlNav:!1,youTubeCode:'<iframe src="http://www.youtube.com/embed/%id%?theme=dark&color=white&rel=1&autoplay=1&showinfo=0" frameborder="no"></iframe>',vimeoCode:'<iframe src="http://player.vimeo.com/video/%id%?byline=0&amp;portrait=0&amp;autoplay=1&amp;color=FF9E15"" frameborder="no" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>',keyboardNavEnabled:!0,autoHideBlocks:!0},minSlideOffset:10,slidesSpacing:0})}function fullPageSlidshow(){jQuery("#full_bg_slideshow").royalSlider({arrowsNav:!0,loop:!0,keyboardNavEnabled:!0,controlsInside:!1,imageScaleMode:"fill",arrowsNavAutoHide:!1,autoScaleSlider:!0,controlNavigation:"bullets",thumbsFitInViewport:!1,navigateByClick:!0,startSlideId:0,autoPlay:!0,transitionType:"fade",autoPlay:{enabled:!0,delay:4e3},globalCaption:!0})}var transitionSpeed=500,scrollSpeed=700,fadeDelay=100,currentProject="",nextProject="",previousHeight="",emptyProjectBoxHeight=400,hasSlideshow=!1;jQuery.noConflict();jQuery(document).ready(function(){tab_panel();horThumbSlider();video_gallery();toggle_panel();fullPageSlidshow();var e=jQuery("#homeSlider").royalSlider({imageScaleMode:"fill",allowCSS3OnMacWebkit:!0,arrowsNav:!1,fullscreen:!1,loop:!0,thumbs:{firstMargin:!1},autoPlay:{enabled:!0,delay:5e3},controlNavigation:"bullets",thumbsFirstMargin:!1,controlsInside:!0,autoScaleSlider:!0,autoScaleSliderWidth:1600,autoScaleSliderHeight:400,keyboardNavEnabled:!0,minSlideOffset:50,slidesSpacing:0,arrowsNav:!0});jQuery(".carousel-image-text-horizontal").touchCarousel({pagingNav:!0,scrollbar:!1,itemsPerPage:4,scrollbarAutoHide:!0,scrollbarTheme:"dark",pagingNav:!1,snapToItems:!0,scrollToLast:!0,useWebkit3d:!0,loopItems:!1});jQuery(".carousel-image-and-text").touchCarousel({itemsPerPage:1,scrollbar:!1,scrollbarAutoHide:!0,scrollbarTheme:"dark",pagingNav:!1,snapToItems:!1,scrollToLast:!0,useWebkit3d:!0,loopItems:!1});jQuery(".videoContainer").fitVids();jQuery("table").footable();jQuery(".para_back").zlayer({mass:25,force:"push",canvas:"#para-wrapper"});jQuery(".para_middle").zlayer({mass:28,force:"push",canvas:"#para-wrapper"});jQuery(".para_front").zlayer({mass:15,force:"push",canvas:"#para-wrapper"})});jQuery(window).load(function(){lightboxInit();projectThumbInit();projectFilterInit();instagramSlider();jQuery(".slide_menu").pageslide({direction:"left",modal:!0});var e=location.hash.replace("#","");e!="index"&&processProject(e)});jQuery(window).resize(function(){});