var main = document.querySelector("#main");
var crsr = document.querySelector(".cursor");

main.addEventListener("mousemove" ,function(dets){/* mousemove is another eventlistener */
    /* dets show the details what happen when we move cuesor on main  */
   crsr.style.left = dets.x+"px";
   crsr.style.top = dets.y+"px";
})