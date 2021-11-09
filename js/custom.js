// JavaScript Document


jQuery('.carousel-inner').each(function () {
if (jQuery(this).children('div').length === 1)
jQuery(this).siblings('.carousel-control-prev, .carousel-control-next, .carousel-indicators').hide();
});

jQuery(document).ready(function() {
var owl = jQuery('.CarouselOwlSlider');
owl.owlCarousel({
margin: 5,
nav: true,
loop: true,
responsive: {
0: {items: 1},
480: {items: 1},
576: {items: 1},
768: {items: 1},
992: {items: 1},
1200: {items: 1}
}
})
})

jQuery(document).ready(function() {
var owl = jQuery('.CarouselOwlSlider-2');
owl.owlCarousel({
margin: 0,
nav: false,
loop: true,
responsive: {
0: {items: 1},
480: {items: 1},
576: {items: 1},
768: {items: 1.8},
992: {items: 1.8},
1200: {items: 1.8}
}
})
})

jQuery(document).ready(function() {
var owl = jQuery('.CarouselOwlTrending');
owl.owlCarousel({
margin: 0,
nav: false,
loop: true,
responsive: {
0: {items: 1},
480: {items: 1},
576: {items: 2},
768: {items: 3},
992: {items: 4},
1200: {items: 4}
}
})
})

//jQuery(".menu-toggle").click(function(){
//jQuery(".sidebar").toggleClass("active");
//});
//
//jQuery(".menu-toggle").click(function(){
//jQuery(".menu-toggle").toggleClass("inactive");
//});
//
//
//jQuery(function() {
//jQuery('#side-menu').metisMenu();
//});
//
//jQuery(document).ready(function () {
//jQuery(".main-menu li a").each(function () {
//if (jQuery(this).next().length > 0) {
//jQuery(this).addClass("parent");
//}
//})
//});
//
//!function(a,b,c){function d(b,c){this.element=a(b),this.settings=a.extend({},f,c),this._defaults=f,this._name=e,this.init()}var e="metisMenu",f={toggle:!0,doubleTapToGo:!1};d.prototype={init:function(){var b=this.element,d=this.settings.toggle,f=this;this.isIE()<=9?(b.find("li.active").has("ul").children("ul").collapse("show"),b.find("li").not(".active").has("ul").children("ul").collapse("hide")):(b.find("li.active").has("ul").children("ul").addClass("collapse in"),b.find("li").not(".active").has("ul").children("ul").addClass("collapse")),f.settings.doubleTapToGo&&b.find("li.active").has("ul").children("a").addClass("doubleTapToGo"),b.find("li").has("ul").children("a").on("click."+e,function(b){return b.preventDefault(),f.settings.doubleTapToGo&&f.doubleTapToGo(a(this))&&"#"!==a(this).attr("href")&&""!==a(this).attr("href")?(b.stopPropagation(),void(c.location=a(this).attr("href"))):(a(this).parent("li").toggleClass("active").children("ul").collapse("toggle"),void(d&&a(this).parent("li").siblings().removeClass("active").children("ul.in").collapse("hide")))})},isIE:function(){for(var a,b=3,d=c.createElement("div"),e=d.getElementsByTagName("i");d.innerHTML="<!--[if gt IE "+ ++b+"]><i></i><![endif]-->",e[0];)return b>4?b:a},doubleTapToGo:function(a){var b=this.element;return a.hasClass("doubleTapToGo")?(a.removeClass("doubleTapToGo"),!0):a.parent().children("ul").length?(b.find(".doubleTapToGo").removeClass("doubleTapToGo"),a.addClass("doubleTapToGo"),!1):void 0},remove:function(){this.element.off("."+e),this.element.removeData(e)}},a.fn[e]=function(b){return this.each(function(){var c=a(this);c.data(e)&&c.data(e).remove(),c.data(e,new d(this,b))}),this}}(jQuery,window,document);


jQuery(function () {
jQuery(".img-crop").responsiveImageCropper();
});

!function (e) {
var t = function () {};
t.prototype = {targetElements: void 0, options: void 0, run: function (e) {
var t = this;
this.targetElements = new Array, e.each(function (e) {
var i = jQuery(this);
i.css({display: "none"});
var a = new Image;
a.onload = function () {
i.css({position: "absolute"}), t.targetElements.push(i), t.croppingImageElement(i), i.css({display: "block"})
}, a.src = i.attr("src")
}), jQuery(window).resize(function (e) {
t.onResizeCallback()
})
}, onResizeCallback: function () {
var t = this;
e.each(this.targetElements, function (e) {
var i = this;
t.croppingImageElement(i)
})
}, croppingImageElement: function (t) {
var i, a;
t.data("crop-image-wrapped") ? (a = t.data("crop-image-outer"), i = t.data("crop-image-inner")) : (a = e("<div>"), i = e("<div>"), a.css({overflow: "hidden", margin: t.css("margin"), padding: t.css("padding")}), t.css({margin: 0, padding: 0}), i.css({position: "relative", overflow: "hidden"}), t.after(a), a.append(i), i.append(t), t.data("crop-image-outer", a), t.data("crop-image-inner", i), t.data("crop-image-wrapped", !0)), this.desideImageSizes(t)
}, desideImageSizes: function (e) {
var t = e.data("crop-image-outer"), i = e.data("crop-image-inner"), a = e.data("crop-image-ratio");
a || (a = 1);
var n = t.width() * a;
i.height(n), e.width(t.width()), e.height("auto"), e.css({position: "absolute", left: 0, top: -(e.height() - t.height()) / 2}), n > e.height() && (e.width("auto"), e.height(n), e.css({position: "absolute", left: -(e.width() - t.width()) / 2, top: 0}))
}, setOptions: function (e) {
this.options = e
}}, e.fn.responsiveImageCropper = function (i) {
var i = e.extend(e.fn.responsiveImageCropper.defaults, i), a = e(this);
return cropper = new t, cropper.setOptions(i), cropper.run(a), this
}, e.fn.responsiveImageCropper.defaults = {}
}(jQuery);