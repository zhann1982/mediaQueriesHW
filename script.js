const menuIcon = document.getElementsByClassName('header__navbar__links__menu-icon');
const closeIcon = document.getElementsByClassName('header__navbar__links__close-icon');
const navbarLinksList = document.getElementsByClassName('header__navbar__links__list');
const shoppingCartIcon = document.getElementsByClassName('header__navbar__links__shoppingCartIcon');
const navbarLinks = document.getElementsByClassName('header__navbar__links');


menuIcon[0].addEventListener("touchend", function(){
    menuIcon[0].style.display = "none";
    shoppingCartIcon[0].style.display = "none";
    closeIcon[0].style.display = "block";
    navbarLinksList[0].style.display = "block";
    navbarLinks[0].style.display = "block";
});

closeIcon[0].addEventListener("touchend", function(){
    menuIcon[0].style.display = "block";
    shoppingCartIcon[0].style.display = "block";
    closeIcon[0].style.display = "none";
    navbarLinksList[0].style.display = "none";
    navbarLinks[0].style.display = "flex";
});


const cardsPages = document.getElementsByClassName('cards__page');
const cardsPageLinks = document.getElementsByClassName('cards__header__link');

cardsPageLinks[0].addEventListener("touchstart", function(){
    cardsPages[0].style.display = "flex";
    cardsPages[1].style.display = "none";
    cardsPages[2].style.display = "none";
   
    cardsPageLinks[0].style.background = "var(--darkGreen)"
    cardsPageLinks[0].style.color = "#fff"
    cardsPageLinks[1].style.background = "var(--lightGreen)"
    cardsPageLinks[1].style.color = "var(--darkBlack)"
    cardsPageLinks[2].style.background = "var(--lightGreen)"
    cardsPageLinks[2].style.color = "var(--darkBlack)"
});

cardsPageLinks[1].addEventListener("touchstart", function(){
    cardsPages[0].style.display = "none";
    cardsPages[1].style.display = "flex";
    cardsPages[2].style.display = "none";
    
    cardsPageLinks[0].style.background = "var(--lightGreen)"
    cardsPageLinks[0].style.color = "var(--darkBlack)"
    cardsPageLinks[1].style.background = "var(--darkGreen)"
    cardsPageLinks[1].style.color = "#fff"
    cardsPageLinks[2].style.background = "var(--lightGreen)"
    cardsPageLinks[2].style.color = "var(--darkBlack)"
    
});

cardsPageLinks[2].addEventListener("touchstart", function(){
    cardsPages[0].style.display = "none";
    cardsPages[1].style.display = "none";
    cardsPages[2].style.display = "flex";

    cardsPageLinks[0].style.background = "var(--lightGreen)"
    cardsPageLinks[0].style.color = "var(--darkBlack)"
    cardsPageLinks[1].style.background = "var(--lightGreen)"
    cardsPageLinks[1].style.color = "var(--darkBlack)"
    cardsPageLinks[2].style.background = "var(--darkGreen)"
    cardsPageLinks[2].style.color = "#fff"
});