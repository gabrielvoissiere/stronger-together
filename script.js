// récuperation des boutons
const projectBtn = document.querySelector('#project-btn');
const oeuvreBtn = document.querySelector('#oeuvre-btn');
const plusBtn = document.querySelector('#plus-btn');
const closeBtn = document.querySelector('#close-btn');

// récuperation des sections projets et oeuvres
const projectBox = document.querySelector('#project-box');
const oeuvreBox = document.querySelector('#oeuvre-box');
const plusBox = document.querySelector('#plus');

// si on clique sur le bouton projets
projectBtn.addEventListener("click", function() {
    // on cache la div oeuvre et on affiche la div projet
    projectBox.classList.toggle('hide');
    oeuvreBox.classList.toggle('hide');
    // on desactive le bouton projet et on active le bouton oeuvre
    oeuvreBtn.removeAttribute("disabled")
    projectBtn.setAttribute("disabled", true)
})

oeuvreBtn.addEventListener("click", function() {
    // on cache la div projet et on affiche la div oeuvre
    projectBox.classList.toggle('hide');
    oeuvreBox.classList.toggle('hide');
    // on desactive le bouton oeuvre et on active le bouton projet
    oeuvreBtn.setAttribute("disabled", true)
    projectBtn.removeAttribute("disabled")
})

// si on clique sur le bouton plus
plusBtn.addEventListener("click", function() {
    // on affiche ou cache la secction plus
    plusBox.classList.toggle('hide');
})

closeBtn.addEventListener("click", function() {
    // on cache la secction plus
    plusBox.classList.toggle('hide');
})

// recuperation de l'année en cours
const date = new Date();
const year = date.getFullYear();

// on inserer la date dans la span date du footer
document.querySelector('#date').innerHTML = year;

// curseur personnalisé
const cursor = document.querySelector('#cursor');
window.addEventListener("mousemove", function(event) {
    let x = event.pageX
    let y = event.pageY
    let cursorWeight = cursor.offsetWidth / 2
    let cursorHeight = cursor.offsetHeight / 2
    cursor.style.top = (y - cursorHeight) + "px"
    cursor.style.left = (x - cursorWeight) + "px"
})

// récuperation des liens de la page
let links = document.querySelectorAll('a');
links.forEach(elm => {
    elm.addEventListener("mouseover", function() {
        cursor.style.backgroundColor = "white"
        cursor.style.border = "4px solid gray"
    })
    elm.addEventListener("mouseout", function() {
        cursor.style.backgroundColor = "gray"
        cursor.style.border = "none"
    })
});

// récuperation des boutons de la page
let btns = document.querySelectorAll('button');
btns.forEach(elm => {
    elm.addEventListener("mouseover", function() {
        cursor.style.backgroundColor = "white"
        cursor.style.border = "4px solid gray"
    })
    elm.addEventListener("mouseout", function() {
        cursor.style.backgroundColor = "gray"
        cursor.style.border = "none"
    })
    elm.addEventListener("click", function() {
        cursor.style.backgroundColor = "gray"
        cursor.style.border = "none"
    })
});
