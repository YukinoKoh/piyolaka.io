document.addEventListener('DOMContentLoaded', function() {
  includeHTML()
}, false);

function openburger(x) {
  var menu = document.getElementById("menu");

  x.classList.toggle("change");
  // if it is true, the menu is open and action move to the opposite status
  if(x.hasAttribute("menu")== true){
    // to close the menu
    x.removeAttribute("menu");
    menu.removeAttribute("class");
    menu.setAttribute("class","hidden");
  }else{
    // to open the menu
    x.setAttribute("menu","on")
    menu.removeAttribute("class");
    menu.setAttribute("class","show menu-container");
  }
}

function openmenu(){
  var icon = document.getElementById("menu-icon");
  var menu = document.getElementById("menu");
  var bg = document.getElementById("content");
  // if it is true, the menu is open and action move to the opposite status
  if(icon.hasAttribute("menu")== true){
    // to close the menu
    icon.removeAttribute("menu", "class");
    icon.setAttribute("class", "rotate-menu-to-close");
    menu.removeAttribute("class");
    menu.setAttribute("class","hidden");
    bg.removeAttribute("class");
    bg.setAttribute("class","container");
  }else{
    // to open the menu
    icon.setAttribute("menu","on")
    icon.setAttribute("class", "rotate-menu-to-open");
    menu.removeAttribute("class");
    menu.setAttribute("class","show menu-container");
    bg.setAttribute("class", "opaque");
  }
}


async function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /* Remove the attribute, and call this function once more: */
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        /* Exit the function: */
        return;
      }
    }
    return 'resolved';
  } 