const menuButton = document.getElementById("menu");

const linksListMobile = document.getElementById("mobileMenu");

const bodyHtml = document.getElementById("body");
const mainHtml = document.getElementById("main");

const firstLink = document.getElementById("firstLink");
const secondLink = document.getElementById("secondLink");
const thirdLink = document.getElementById("thirdLink");
const fourthLink = document.getElementById("fourthLink");

function showLinksMobile () {
  linksListMobile.style.display = "flex";
};
function closeLinksMobile () {
  linksListMobile.style.display = "none";
};

function openFirstLink () {
  window.open("https://ojagunco.github.io/guia-para-juizes-evitarem-discriminacao-de-genero-ja-influencia-quase-7-mil-sentencas-neste-ano/")
};

function openSecondLink () {
  window.open("https://ojagunco.github.io/a-jornada-do-caso-marcia-barbosa-e-os-direitos-da-populacao-trans/")
};

function openThirdLink () {
  window.open("https://confraria-jagunco.github.io/a-sensacao-de-conforto-ou-nao-causada-pela-retrospectiva-spotify/")
};

function openFourthLink () {
  window.open("https://confraria-jagunco.github.io/eu-sou-tao-util-quanto-a-arte/")
};

menuButton.addEventListener("click", showLinksMobile);
main.addEventListener("click", closeLinksMobile);

firstLink.addEventListener("click", openFirstLink);
secondLink.addEventListener("click", openSecondLink);
thirdLink.addEventListener("click", openThirdLink);
fourthLink.addEventListener("click", openFourthLink);
