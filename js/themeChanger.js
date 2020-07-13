var dark = '#182028';
var light = '#d8e0e8';
var gray = '#708090';
var blue = '#4080c0';
var night = true;

/*                      For DropDown Menus                      */

/*  function testInverse() {
    var bodySet = document.body.style;
    var bodyGet = getComputedStyle(document.body);

    [bodySet.backgroundColor, bodySet.color] = [bodyGet.color, bodyGet.backgroundColor];
}   */

function inverse() {
    var theme = document.body.style;
    night = !night;
    
    if(night) 
        setDark(theme);
    else
        setLight(theme);
}

function setDark(theme) {
    theme.backgroundColor = dark;
    theme.color = light;
}

function setLight(theme) {
    theme.backgroundColor = light;
    theme.color = dark;
}