function swapshare(){
    if(window.innerWidth<1000)
    {
        //drag up the social
        if(document.getElementById('switcher-button-arrow').style.filter == "none" || document.getElementById('switcher-button-arrow').style.filter == "")
        {
            document.getElementById('social-links').style.visibility = "visible";
            document.getElementById('social-links').style.opacity = "1";
            document.getElementById('social-links').style.left = "0";
            document.getElementById('social-links').style.bottom = "0";
            document.getElementById('switcher-button-arrow').style.filter = "brightness(0) saturate(100%) invert(97%) sepia(11%) saturate(87%) hue-rotate(303deg) brightness(115%) contrast(100%)";
            document.getElementById('switcher-button').style.rotate = "360deg";
        }else
        {
            document.getElementById('social-links').style.bottom = "-5.5em";
            document.getElementById('switcher-button-arrow').style.filter = "none";
            document.getElementById('switcher-button').style.rotate = "-360deg";
        }
    }else 
    {
        //pop up the social;
        if(document.getElementById('switcher-button-arrow').style.filter == "none" || document.getElementById('switcher-button-arrow').style.filter == "")
        {
            document.getElementById('social-links').style.left = "16.75em";
            document.getElementById('social-links').style.bottom= "7em";
            document.getElementById('social-links').style.visibility = "visible";
            document.getElementById('social-links').style.opacity = "1";
            document.getElementById('switcher-button').style.backgroundColor = "hsla(212, 23%, 69%, 100%)";
            document.getElementById('switcher-button-arrow').style.filter = "brightness(0) saturate(100%) invert(97%) sepia(11%) saturate(87%) hue-rotate(303deg) brightness(115%) contrast(100%)";
            document.getElementById('switcher-button').style.rotate = "360deg";
        }else
        {
            document.getElementById('social-links').style.visibility = "hidden";
            document.getElementById('social-links').style.opacity = "0";
            document.getElementById('switcher-button').style.backgroundColor = "hsla(212, 23%, 69%, 40%)";
            document.getElementById('switcher-button-arrow').style.filter = "none";
            document.getElementById('switcher-button').style.rotate = "-360deg";
        }
    }
}

function windowIsResizing(){
    // in case of resizing lets auto hide the social link to avoid having issues with it
    document.getElementById('social-links').style.visibility = "hidden";
    document.getElementById('social-links').style.opacity = "0";
    if(window.innerWidth<1000)
    {
        //drag up the social
        if(document.getElementById('switcher-button-arrow').style.filter != "none")
        {   
            document.getElementById('social-links').style.bottom = "-5.5em";
            document.getElementById('switcher-button-arrow').style.filter = "none";
            document.getElementById('switcher-button').style.rotate = "-360deg";
        }
    }else 
    {
        //pop up the social;
        if(document.getElementById('switcher-button-arrow').style.filter != "none")
        {   
            document.getElementById('switcher-button').style.backgroundColor = "hsla(212, 23%, 69%, 40%)";
            document.getElementById('switcher-button-arrow').style.filter = "none";
            document.getElementById('switcher-button').style.rotate = "-360deg";
        }
    }
}

//add a resize listener
window.addEventListener('resize', windowIsResizing);