window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (window.screen.width <= 992){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("btnup").style.display = "block";
    } else {
        document.getElementById("btnup").style.display = "none";
    }
  }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
