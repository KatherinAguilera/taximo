/*********************Contadores*******************/
let n = 0;
const contb = document.getElementById("contb");
let intervalo=setInterval(function(){
  contb.innerHTML = n;
  n++;
    if (n == 30001) {
      clearInterval(intervalo);
    }
},1);

let u = 120000;
const conta = document.getElementById("conta");
window.setInterval(function(){
  conta.innerHTML = u;
  u=u+50;
},500);

let x = 0;
const contc = document.getElementById("contc");
let intervaloC = setInterval(function(){
  contc.innerHTML = x;
  x++;
  if (n == 2000001) {
    clearInterval(intervaloC);
  }
},1000);

/*********************Slides*******************/

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slides");
  let indicador = document.getElementsByClassName("indicador");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  for (i = 0; i < indicador.length; i++) {
    indicador[i].className = indicador[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  indicador[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000);
}
/*********************Modal***********************/
const $hideButton = document.getElementById('hide');
const $form = document.getElementById('formu');

$hideButton.addEventListener('click', (event) => {
			$form.classList.toggle('active');
});

/*********************API**************************/

fetch('https://api.github.com/users/KrunalLathiya')
.then(response => response.json())
.then(data => {
  console.log(data) // Prints result from `response.json()` in getRequest
})
.catch(error => console.error(error))

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
return parent.appendChild(el);
}

const ul = document.getElementById('api');
const url = 'https://randomuser.me/api/?results=10';
fetch(url)
.then((resp) => resp.json())
.then(function(data) {
let authors = data.results;
return authors.map(function(author) {
  let li = createNode('li'),
      img = createNode('img'),
      span = createNode('span');
  img.src = author.picture.medium;
  span.innerHTML = `${author.name.first} ${author.name.last}`;
  append(li, img);
  append(li, span);
  append(ul, li);
})
})
.catch(function(error) {
console.log(error);
});
