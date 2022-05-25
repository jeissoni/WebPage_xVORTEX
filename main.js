const dvContent = document.getElementById('dvContent');

const cargar = document.getElementById('contenedor_carga')
const menu = document.getElementById('menu-container')
const botones = document.getElementById('navbar-botones')

const itemHome = document.getElementById('nvHome');
const itemAbautUs = document.getElementById('nvAbautUs');
const itemPortfolio = document.getElementById('nvPortfolio');
const itemBlog = document.getElementById('nvBlog');
const itemContac = document.getElementById('nvContac');
const aHomeAbaut = document.getElementById('homeAbaut');
let rowBlog;



// *********    Efecto munfdo  ******************************
    let mundo = document.getElementById('mundo');
    let bg_stone = document.getElementById('bg-stone');
    let bg_stone_2 = document.getElementById('bg-stone-2');

    window.addEventListener('scroll', function () {
      let value = window.scrollY;
      mundo.style.top = value * 0.25 + 130 + 'px';
      bg_stone_2.style.left = value * 0.29 + 'px';
      if(value * 0.25 + 105 < 190){
        bg_stone.style.bottom = value * 0.25 + 105 + 'px';
      }
    });
// *********************************************************

document.addEventListener('fullscreenchange', (e) => {
  console.log(e)
})

menu.addEventListener('click', () => {
  botones.classList.toggle('visible')
})

window.addEventListener('load', function(){
  document.getElementById('contenedor_carga').classList.toggle('contenedor_carga2')
})

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
  window.location.href = './index.html';
}

function fnAbautUs() {

  

  cargar.classList.remove('contenedor_carga2')

  const url = './aboutus.html';  
  dvContent.innerHTML = "" 

  fetch(url)
  .then(response=>
      response.text() 
    
  )
  .then(text=> {
    dvContent.innerHTML = text 


//Efecto Scanner//

//const hola = document.querySelector(".aboutus-row")
const abusScolumn1 = document.querySelector(".aboutus-column:nth-child(1)")
const abusScolumn2 = document.querySelector(".aboutus-column:nth-child(2)")
const abusScolumn3 = document.querySelector(".aboutus-column:nth-child(3)")
const containerScanner1 = document.querySelector(".containerScanner1")
const containerScanner2 = document.querySelector(".containerScanner2")
const containerScanner3 = document.querySelector(".containerScanner3")

const observer1 = (entradas) => {
  entradas.forEach((element) => {
    if (element.isIntersecting){
      console.log("hola")
      //hola.style.setProperty("background","#00C4FF")
      containerScanner1.style.setProperty("animation-name","scanner")
      containerScanner2.style.setProperty("animation-name","scanner2")
      containerScanner3.style.setProperty("animation-name","scanner3")
    }
  });
} 

const observer = new IntersectionObserver(observer1, {
  root: null,
  rootMargin: "0px",
  threshold: 1.0
})
///////////////

    observer.observe(abusScolumn1)
    observer.observe(abusScolumn2)
    observer.observe(abusScolumn3)

    
  })

  dvContent.className = "container"

  inactiveClass(itemAbautUs)

  itemAbautUs.classList.toggle('active')

  setTimeout(function(){
    cargar.classList.toggle('contenedor_carga2')
  }, 500)

}




function fnPortfolio() {

  cargar.classList.remove('contenedor_carga2')

  const url = './portfolio.html'
  dvContent.innerHTML = "" 

  fetch(url)
  .then(response=> 
    response.text()
  )
  .then(text=> {
     dvContent.innerHTML = text 
  });

  dvContent.className = "container"
  inactiveClass(itemPortfolio)
  itemPortfolio.classList.toggle('active')

  setTimeout(function(){
    cargar.classList.toggle('contenedor_carga2')
  }, 500)
}


function fnBlog() {

  cargar.classList.remove('contenedor_carga2')

  const url = './blog.html';
  dvContent.innerHTML = "" 


  fetch(url)
  .then(response=> 
    response.text()
  )
  .then(text=> {
  
    dvContent.innerHTML = text
  });

  rowBlog = document.getElementById('blog-row')
  

  dvContent.className = "container"
  inactiveClass(itemBlog)
  itemBlog.classList.toggle('active')

  setTimeout(function(){
    console.log(rowBlog)
    cargar.classList.toggle('contenedor_carga2')
  }, 500)
}

async function fnContact(){  
  const dvFooter = document.getElementById('footer')
  dvFooter.scrollIntoView()
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


