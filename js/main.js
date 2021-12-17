const dvContent = document.getElementById('dvContent');

const itemHome = document.getElementById('nvHome');
const itemAbautUs = document.getElementById('nvAbautUs');
const itemPortfolio = document.getElementById('nvPortfolio');
const itemBlog = document.getElementById('nvBlog');
const itemContac = document.getElementById('nvContac');
const aHomeAbaut = document.getElementById('homeAbaut')


// *********    Efecto munfdo  ******************************
    let mundo = document.getElementById('mundo');
    let bg_stone = document.getElementById('bg-stone');
    let bg_stone_2 = document.getElementById('bg-stone-2');

    window.addEventListener('scroll', function () {
      let value = window.scrollY;
      mundo.style.top = value * 0.25 + 130 + 'px';
      bg_stone.style.bottom = value * 0.15 + 150 + 'px';
      bg_stone_2.style.left = value * 0.25 + 'px';
    });
// *********************************************************


async function fetchHtmlAsText(url) {
  const response = await fetch(url);
  return await response.text();
}

function inactiveClass(idItem) {

  switch (idItem) {
    case itemHome:
      itemAbautUs.className = inactiveClassHome.replace("active", "")
      itemPortfolio.className = inactiveClassHome.replace("active", "")
      itemBlog.className = inactiveClassHome.replace("active", "")
      break;

    case itemAbautUs:
      itemHome.className = itemHome.className.replace("active", "")
      itemPortfolio.className = itemPortfolio.className.replace("active", "")
      itemBlog.className = itemBlog.className.replace("active", "")
      break;

    case itemPortfolio:
      itemHome.className = itemHome.className.replace("active", "")
      itemAbautUs.className = itemAbautUs.className.replace("active", "")
      itemBlog.className = itemBlog.className.replace("active", "")
      break;

    case itemBlog:
      itemHome.className = itemHome.className.replace("active", "")
      itemAbautUs.className = itemAbautUs.className.replace("active", "")
      itemPortfolio.className = itemPortfolio.className.replace("active", "")
      break;    
  }

}


async function fnHome() {
  window.location.href = 'index.html';
}

async function fnAbautUs() {
  const url = 'html/aboutus.html';
  dvContent.className = "container"
  dvContent.innerHTML = await fetchHtmlAsText(url)

  inactiveClass(itemAbautUs)
  itemAbautUs.className = itemAbautUs.className + " active"
}

async function fnPortfolio() {
  const url = 'html/portfolio.html';
  dvContent.className = "container"
  dvContent.innerHTML = await fetchHtmlAsText(url);

  inactiveClass(itemPortfolio)
  itemPortfolio.className = itemPortfolio.className + " active"
}


async function fnBlog() {
  const url = 'html/blog.html';
  dvContent.className = "container"
  dvContent.innerHTML = await fetchHtmlAsText(url);

  inactiveClass(itemBlog)
  itemBlog.className = itemBlog.className + " active"

}


async function fnContact() {
  // const url = 'html/contact.html';
  dvContent.className = "container"
  dvContent.innerHTML = await fetchHtmlAsText(url);
  // nvBar.className = 'navbar navbar-expand-lg navbar-dark fondo-morado pt-lg-3 pt-2 aos-init aos-animate';
}


async function fnCertik() {
  window.open('https://www.certik.com/projects/xvortex', '_blank')
}


itemAbautUs.onclick = fnAbautUs;
itemBlog.onclick = fnBlog;
itemContac.onclick = fnContact;
itemHome.onclick = fnHome;
itemPortfolio.onclick = fnPortfolio;
aHomeAbaut.onclick = fnAbautUs
