var $ = jQuery;
var html = $('html');
var asContainer = $('.as-container');


// asContainer.after('<div class="handicap-icon"></div>');

var fontSizeIncrease = $('button[value="increase"]');
var fontSizeDecrease = $('button[value="decrease"]');
var fontSizeDefault = $('button[value="font-size-default"]');
var currentFontSize = html.css('font-size');

var grayscale = $('button[value="grayscale"]');
var grayscaleDefault = $('button[value="grayscale-default"]');

var contrast = $('button[value="contrast"]');
var contrastDefault = $('button[value="contrast-default"]');

var sepia = $('button[value="sepia"]');
var sepiaDefault = $('button[value="sepia-default"]');

var invert = $('button[value="invert"]');
var invertDefault = $('button[value="invert-default"]');


var cursor = $('button[value="cursor"]');
var cursorDefault = $('button[value="cursor-default"]');

var links = $('button[value="links"]');
var linksDefault = $('button[value="links-default"]');

fontSizeIncrease.click(function(){
    var html = $('html');
    html.css('font-size', parseInt(currentFontSize) + 1);
})

fontSizeDefault.click(function(){
    $('html').css('font-size', currentFontSize);
})

fontSizeDecrease.click(function(){

    var currentFontSize = html.css('font-size');
    html.css('font-size', parseInt(currentFontSize) - 1);
})

var handicapIcon = $('.handicap-icon');
var asClose = $('.as-close');

handicapIcon.click(function(){
    asContainer.css('display', 'block');
    asContainer.animate({'width' : '100%'}, 300);
})

asClose.click(function(){
    var asContainer = $('.as-container');
    
    asContainer.animate({'width' : '0%'}, 300, function(){
        asContainer.css('display', 'none');
    });
})

function setFilter(t, filterName, filerValue){
     if(t.hasClass('active-option') == 0){
        var html = $('html');
            html.removeAttr('style');
            html.css('filter', filterName + '(' + filerValue + ')');
        t.addClass('active-option');
    }
}

function removeFilter(t){
    var html = $('html');
        html.removeAttr('style');
        t.siblings().removeClass('active-option');
    }



grayscale.click(function(){
    setFilter($(this), 'grayscale', 1);
})

grayscaleDefault.click(function(){
    removeFilter($(this));
})

sepia.click(function(){
    setFilter($(this),'sepia', 1);
})

sepiaDefault.click(function(){
    removeFilter($(this));
})

contrast.click(function(){
    setFilter($(this),'contrast', 1.5);
})

contrastDefault.click(function(){
    removeFilter($(this));
})

invert.click(function(){
        setFilter($(this),'invert', 1);
})

invertDefault.click(function(){
    removeFilter($(this));
})

cursor.click(function(){
    $('html').css({'cursor' : 'url(images/cursor.cur), auto'})
})

cursorDefault.click(function(){
    $('html').css({'cursor' : 'initial'});
})

links.click(function(){
    $('a').css({'border-bottom' : '2px solid red'});
})

linksDefault.click(function(){
    $('a').css({'border-bottom' : 'none'});
    // $('a[href="video"]').css('background-color', '#fff');
})