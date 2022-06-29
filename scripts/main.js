const dvContent = document.getElementById("dvContent");
const navbar = document.querySelector('.navbar')
const itemHome = document.querySelector(".nvHome");
const itemAbautUs = document.querySelector(".nvAbautUs");
const itemPortfolio = document.querySelector(".nvPortfolio");
const itemBlog = document.querySelector(".nvBlog");
const itemContac = document.querySelector(".nvContac");
const pageloader = document.getElementById("loader-container");
const hamburgerIcon = document.getElementById("hamburger-icon");
const navbarbuttons = document.querySelector(".navbar-buttons-container");
const aHomeAbaut = document.getElementById("homeAbaut");
let carouselSlidesArray, carouselContainer;
document.documentElement.style.setProperty("--x", "-600px");
document.documentElement.style.setProperty("--y", "0px");

// home

// *********    Efecto mundo  ******************************
let mundo = document.getElementById("mundo");
let bg_stone = document.getElementById("bg-stone");
let bg_stone_2 = document.getElementById("bg-stone-2");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  mundo.style.top = value * 0.25 + 130 + "px";
  bg_stone_2.style.left = value * 0.29 + "px";
  if (value * 0.25 + 105 < 190) {
    bg_stone.style.bottom = value * 0.25 + 105 + "px";
  }
});
// *********************************************************

// navbar

navbar.addEventListener('click', (element) => {
  element.target.classList.forEach((className) => {
    if(className === 'show-buttons'){
      navbarbuttons.classList.toggle("navbar-visible");
    }
    if(className === 'nvHome'){
      fnHome()
    }
    if(className === 'nvAbautUs'){
      fnAbautUs()
    }
    if(className === 'nvPortfolio'){
      fnPortfolio()
    }
    if(className === 'nvBlog'){
      fnBlog()
    }
    if(className === 'nvContac'){
      fnContact()
    }
  })
})

aHomeAbaut.onclick = fnAbautUs

window.addEventListener("load", function () {
  pageloader.classList.toggle("hide-loader");
});
function inactiveClass(idItem) {
  switch (idItem) {
    case itemHome:
      itemAbautUs.className = inactiveClassHome.replace("active", "");
      itemPortfolio.className = inactiveClassHome.replace("active", "");
      itemBlog.className = inactiveClassHome.replace("active", "");
      break;

    case itemAbautUs:
      itemHome.className = itemHome.className.replace("active", "");
      itemPortfolio.className = itemPortfolio.className.replace("active", "");
      itemBlog.className = itemBlog.className.replace("active", "");
      break;

    case itemPortfolio:
      itemHome.className = itemHome.className.replace("active", "");
      itemAbautUs.className = itemAbautUs.className.replace("active", "");
      itemBlog.className = itemBlog.className.replace("active", "");
      break;

    case itemBlog:
      itemHome.className = itemHome.className.replace("active", "");
      itemAbautUs.className = itemAbautUs.className.replace("active", "");
      itemPortfolio.className = itemPortfolio.className.replace("active", "");
      break;
  }
}

async function fnHome() {
  window.location.href = "./index.html";
}

// about us navigation and efects

function fnAbautUs() {
  pageloader.classList.remove("hide-loader");

  const url = "../html/aboutus.html";
  dvContent.innerHTML = "";

  fetch(url)
    .then((response) => response.text())
    .then((text) => {
      dvContent.innerHTML = text;

      //Efecto Scanner//
      const abusScolumn1 = document.querySelector(".aboutus-column:nth-child(1)");
      const abusScolumn2 = document.querySelector(".aboutus-column:nth-child(2)");
      const abusScolumn3 = document.querySelector(".aboutus-column:nth-child(3)");
      const containerScanner1 = document.querySelector(".aboutUs-container-scanner1");
      const containerScanner2 = document.querySelector(".aboutUs-container-scanner2");
      const containerScanner3 = document.querySelector(".aboutUs-container-scanner3");

      //Observador 1//
      const observerOf1 = (entradas) => {
        entradas.forEach((element) => {
          if (element.isIntersecting) {
            containerScanner1.style.setProperty("animation-name", "scanner");
          }
        });
      };

      const observer1 = new IntersectionObserver(observerOf1, {
        root: null,
        rootMargin: "0px",
        threshold: 0.8,
      });

      //Observador 2//
      const observerOf2 = (entradas) => {
        entradas.forEach((element) => {
          if (element.isIntersecting) {
            containerScanner2.style.setProperty("animation-name", "scanner");
          }
        });
      };

      const observer2 = new IntersectionObserver(observerOf2, {
        root: null,
        rootMargin: "0px",
        threshold: 0.8,
      });

      //Observador 3//
      const observerOf3 = (entradas) => {
        entradas.forEach((element) => {
          if (element.isIntersecting) {
            containerScanner3.style.setProperty("animation-name", "scanner");
          }
        });
      };

      const observer3 = new IntersectionObserver(observerOf3, {
        root: null,
        rootMargin: "0px",
        threshold: 0.8,
      });

      ///////////////

      observer1.observe(abusScolumn1);
      observer2.observe(abusScolumn2);
      observer3.observe(abusScolumn3);
    });

  dvContent.className = "container";

  inactiveClass(itemAbautUs);

  itemAbautUs.classList.toggle("active");

  setTimeout(function () {
    pageloader.classList.toggle("hide-loader");
  }, 500);
}

// portfolio navigation

function fnPortfolio() {
  pageloader.classList.remove("hide-loader");

  const url = "../html/portfolio.html";
  dvContent.innerHTML = "";

  fetch(url)
    .then((response) => response.text())
    .then((text) => {
      dvContent.innerHTML = text;
      carouselSlidesArray = document.querySelectorAll(".slides-content");
      carouselContainer = document.querySelector(".portfolio-carousel-slides");
      let cantidad = carouselSlidesArray.length * 600;
      document.documentElement.style.setProperty("--z", cantidad + "px");
      document.querySelector(".portfolio-button-previous").onclick = btnPrevious;
      document.querySelector(".portfolio-button-next").onclick = btnNext;
    });

  dvContent.className = "container";
  inactiveClass(itemPortfolio);
  itemPortfolio.classList.toggle("active");

  setTimeout(function () {
    pageloader.classList.toggle("hide-loader");
  }, 500);
}

// blog navigation

function fnBlog() {
  pageloader.classList.remove("hide-loader");

  const url = "../html/blog.html";
  dvContent.innerHTML = "";

  fetch(url)
    .then((response) => response.text())
    .then((text) => {
      dvContent.innerHTML = text;
    });

  dvContent.className = "container";
  inactiveClass(itemBlog);
  itemBlog.classList.toggle("active");

  setTimeout(function () {
    pageloader.classList.toggle("hide-loader");
  }, 500);
}

async function fnContact() {
  const dvFooter = document.getElementById("footer");
  dvFooter.scrollIntoView();
}

async function fnCertik() {
  window.open("https://www.certik.com/projects/xvortex", "_blank");
}

// portolio carousel navigation

function btnNext() {
  document.documentElement.style.setProperty("--x", "-1200px");
  let first = document.querySelector(".slides-content:nth-child(1)");
  let second = document.querySelector(".slides-content:nth-child(3)");
  carouselContainer.style.transition = "all .5s";
  setTimeout(() => {
    carouselContainer.style.transition = "none";
    carouselContainer.insertAdjacentElement("beforeend", first);
    document.documentElement.style.setProperty("--x", "-600px");
  }, 500);
  if (second.classList[1] === "portfolio-content-LifeOut") {
    document.documentElement.style.setProperty("--y", "0px");
  }
  if (second.classList[1] === "portfolio-content-metafighter") {
    document.documentElement.style.setProperty("--y", "-250px");
  }
  if (second.classList[1] === "portfolio-content-gnss") {
    document.documentElement.style.setProperty("--y", "-500px");
  }
}

function btnPrevious() {
  document.documentElement.style.setProperty("--x", "0px");
  let last =
    document.querySelectorAll(".slides-content")[
      carouselSlidesArray.length - 1
    ];
  let second = document.querySelector(".slides-content:nth-child(1)");
  carouselContainer.style.transition = "all .5s";
  setTimeout(() => {
    carouselContainer.style.transition = "none";
    carouselContainer.insertAdjacentElement("afterbegin", last);
    document.documentElement.style.setProperty("--x", "-600px");
  }, 500);
  if (second.classList[1] === "portfolio-content-netvrk") {
    document.documentElement.style.setProperty("--y", "0px");
  }
  if (second.classList[1] === "portfolio-content-kawaiI") {
    document.documentElement.style.setProperty("--y", "-250px");
  }
  if (second.classList[1] === "portfolio-content-aaaEvo") {
    document.documentElement.style.setProperty("--y", "-500px");
  }
}
