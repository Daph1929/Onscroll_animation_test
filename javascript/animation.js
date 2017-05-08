
window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        document.getElementById("myImg").className = "slideUp";
        document.getElementById("text").className = "slideUp";
    }

    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        document.getElementById("x").className = "slideUp";
    }

    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        document.getElementById("y").className = "slideUp";
    }
}

