const dvContent = document.getElementById('dvContent');

const cargar = document.getElementById('contenedor_carga')
const menu = document.getElementById('menu-container')
const botones = document.getElementById('navbar-botones')

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

menu.addEventListener('click', () => {
  botones.classList.toggle('visible')
  console.log(botones.classList)
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
  window.location.href = 'index.html';
}

function fnAbautUs() {

  

  cargar.classList.remove('contenedor_carga2')

  const url = 'html/aboutus.html';  
  dvContent.innerHTML = "" 

  fetch(url)
  .then(response=>
      response.text() 
    
  )
  .then(text=> {
    
    dvContent.innerHTML = text    
  })

  dvContent.className = "container"

  inactiveClass(itemAbautUs)

  itemAbautUs.className = itemAbautUs.className + " active"

  setTimeout(function(){
    cargar.classList.toggle('contenedor_carga2')
  }, 500)

}




function fnPortfolio() {

  cargar.classList.remove('contenedor_carga2')

  const url = 'html/portfolio.html'
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
  itemPortfolio.className = itemPortfolio.className + " active"

  setTimeout(function(){
    cargar.classList.toggle('contenedor_carga2')
  }, 500)
}


function fnBlog() {

  cargar.classList.remove('contenedor_carga2')

  const url = 'html/blog.html';
  dvContent.innerHTML = "" 


  fetch(url)
  .then(response=> 
    response.text()
  )
  .then(text=> {
  
    dvContent.innerHTML = text
  });

  dvContent.className = "container"
  inactiveClass(itemBlog)
  itemBlog.className = itemBlog.className + " active"

  setTimeout(function(){
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


