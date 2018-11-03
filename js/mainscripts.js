
var youtube_logo = "assets/youtube_social_icon_red.png";
var youtube_logo_dark = "assets/youtube_social_icon_dark.png";
var mark = "assets/GitHub-Mark-64px.png";
var mark_light = "assets/GitHub-Mark-Light-64px.png";
var linkedin_logo = "assets/In-White-66px-TM.png";
var linkedin_logo_black = "assets/In-Black-66px-TM.png";
var external_link = "assets/external_link.png";
var external_link_white = "assets/external_link_white.png";

function image_hover(element, asset){
    element.setAttribute('src', asset);
}

// For mobile redirection
function isAndroid(){
    return window.navigator.userAgent.match(/Android/i);
}

function isIphone(){
    return window.navigator.userAgent.match(/iPhone|iPad|iPod/i);
}

function isMobile(){
    if(isAndroid()) return true;
    if(isIphone()) return true;
    return false;
}

function mobileRedirect(){
    //window.alert(window.navigator.userAgent);
    if(isMobile()) window.location.href = "mobile.html";
}