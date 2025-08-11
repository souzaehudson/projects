const menuButton = document.getElementById("menu");

const linksListMobile = document.getElementById("mobileMenu");

const bodyHtml = document.getElementById("body");
const mainHtml = document.getElementById("main");

const relAno = document.getElementById("relAno");
const noDie = document.getElementById("noDie");
const loved = document.getElementById("loved");

let index = 1;

const album = [
  "https://i.imgur.com/GmoJTdZ.jpeg",
  "https://i.imgur.com/oyRASx0.jpeg",
  "https://i.imgur.com/GmoJTdZ.jpeg",
  "https://i.imgur.com/gmuEI0n.jpeg",
  "https://i.imgur.com/mc6utFt.jpeg"
]

function showLinksMobile() {
  linksListMobile.style.display = "flex";
}

function closeLinksMobile() {
  linksListMobile.style.display = "none";
}

function slideShow () {
  relAno.src = album.[index];
  noDie.src = album.[index];
  loved.src = album.[index];
}

slideShow();

menuButton.addEventListener("click", showLinksMobile);
main.addEventListener("click", closeLinksMobile);
