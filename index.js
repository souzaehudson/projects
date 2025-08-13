const menuButton = document.getElementById("menu");

const linksListMobile = document.getElementById("mobileMenu");

const bodyHtml = document.getElementById("body");
const mainHtml = document.getElementById("main");

const relAno = document.getElementById("relAno");
const noDie = document.getElementById("noDie");
const loved = document.getElementById("loved");

const firstLink = document.getElementById("firstLink");
const secondLink = document.getElementById("secondLink");
const thirdLink = document.getElementById("thirdLink");
const fourthLink = document.getElementById("fourthLink");

function openFirstLink() {
  window.open(
    "https://ojagunco.github.io/guia-para-juizes-evitarem-discriminacao-de-genero-ja-influencia-quase-7-mil-sentencas-neste-ano/"
  );
}

function openSecondLink() {
  window.open(
    "https://ojagunco.github.io/a-jornada-do-caso-marcia-barbosa-e-os-direitos-da-populacao-trans/"
  );
}

function openThirdLink() {
  window.open(
    "https://confraria-jagunco.github.io/a-sensacao-de-conforto-ou-nao-causada-pela-retrospectiva-spotify"
  );
}

function openFourthLink() {
  window.open(
    "https://confraria-jagunco.github.io/eu-sou-tao-util-quanto-a-arte/"
  );
}

let index = 1;

const album = [
  "https://i.imgur.com/GmoJTdZ.jpeg",
  "https://i.imgur.com/oyRASx0.jpeg",
  "https://i.imgur.com/GmoJTdZ.jpeg",
  "https://i.imgur.com/gmuEI0n.jpeg",
  "https://i.imgur.com/mc6utFt.jpeg"
];

function showLinksMobile() {
  linksListMobile.style.display = "flex";
}

function closeLinksMobile() {
  linksListMobile.style.display = "none";
}

function slideShow() {
  relAno.src = album[index];
  noDie.src = album[index];
  loved.src = album[index];
}

slideShow();

firstLink.addEventListener("click", openFirstLink);
secondLink.addEventListener("click", openSecondLink);
thirdLink.addEventListener("click", openThirdLink);
fourthLink.addEventListener("click", openFourthLink);

menuButton.addEventListener("click", showLinksMobile);
main.addEventListener("click", closeLinksMobile);
