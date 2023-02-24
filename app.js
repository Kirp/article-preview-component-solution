function swapshare(){
    //console.log(document.getElementById('switcher-button').style.filter);
    if(document.getElementById('switcher-button').style.filter == "none" || document.getElementById('switcher-button').style.filter == "")
    {
        document.getElementById('social-links').style.bottom = "0";
        document.getElementById('switcher-button').style.filter = "brightness(0) saturate(100%) invert(97%) sepia(11%) saturate(87%) hue-rotate(303deg) brightness(115%) contrast(100%)";
        document.getElementById('switcher-button').style.rotate = "360deg";
    }else
    {
        document.getElementById('social-links').style.bottom = "-5.5em";
        document.getElementById('switcher-button').style.filter = "none";
        document.getElementById('switcher-button').style.rotate = "-360deg";
    }
}