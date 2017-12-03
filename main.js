//Denne prosedyren legger til show classen til drowdown klassen, da kommer mobil-navbaren ned.
function drop() {
    document.getElementById("dropdown").classList.toggle("show");
}

//Denne koden er for slideshowet.

var slideIndex = 1;
showSlides(slideIndex);

function nesteSlide(n) {
    showSlides(slideIndex += n);
}

function denneSliden(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("bilder");
    var kuler = document.getElementsByClassName("kule");
    if (n > slides.length) {slideIndex = 1}    
        else if (n < 1) {slideIndex = slides.length}
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
            }

            for (i = 0; i < kuler.length; i++) {
                kuler[i].className = kuler[i].className.replace(" active", "");
            }

            slides[slideIndex-1].style.display = "block";  
            kuler[slideIndex-1].className += " active";
        }




        document.onkeydown = function(e) {
            e = e || window.event;
            if (e.keyCode == '37') {
            showSlides(++slideIndex) //left <- show Prev image
        } else if (e.keyCode == '39') {
            // right -> show next image
            showSlides(--slideIndex)
        }
    }