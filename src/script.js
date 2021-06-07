function itemsByCategory(category) {
  let arr = [];
  for (let item of window.items) {
    if (item.category === category) {
      arr.push(item);
    }
  }
  return arr;
}

function toDollar(number) {
  number /= 100;
  return '$' + new Intl.NumberFormat('en-CA').format(number);
}

function itemToFigure(item) {
  let figure = document.createElement('figure');
  let img = document.createElement('img');
  img.setAttribute('src', item.imageUrl);
  img.setAttribute('class', 'img-fluid');
  img.setAttribute('alt', item.name);
  img.setAttribute('onclick', 'imageView( " ' + item.imageUrl + ' " )');
  let figcaption = document.createElement('figcaption');
  figcaption.innerHTML =
    '<b>' +
    item.name +
    '</b> - ' +
    item.description +
    '<br>' +
    toDollar(item.price) +
    '<br>' +
    '(' +
    item.category +
    ')';
  figure.appendChild(img);
  figure.appendChild(figcaption);
  return figure;
}

function figuresToDiv(category) {
  document.querySelector('#welcome').style.display = 'none';
  let imageGrid = document.querySelector('#imageGrid');
  let backToMenu = document.querySelector('#backToMenu');
  let figures = document.querySelectorAll('figure');
  for (let i = 0; i < figures.length; i++) {
    imageGrid.removeChild(figures[i]);
  }
  if (category === 'all') {
    for (let item of window.items) {
      backToMenu.style.visibility = 'hidden';
      imageGrid.appendChild(itemToFigure(item));
    }
  } else if (category === 'breakfast' || category === 'lunch' || category === 'dessert') {
    backToMenu.style.visibility = 'visible';
    for (let item of itemsByCategory(category)) {
      imageGrid.appendChild(itemToFigure(item));
    }
  }
}

function click_all() {
  figuresToDiv('all');
}
function click_breakfast() {
  figuresToDiv('breakfast');
}
function click_lunch() {
  figuresToDiv('lunch');
}
function click_dessert() {
  figuresToDiv('dessert');
}

let all = document.querySelector('#all');
all.addEventListener('click', click_all);

let breakfast = document.querySelector('#breakfast');
breakfast.addEventListener('click', click_breakfast);

let lunch = document.querySelector('#lunch');
lunch.addEventListener('click', click_lunch);

let dessert = document.querySelector('#dessert');
dessert.addEventListener('click', click_dessert);

document.querySelector('#popupbg').addEventListener('click', closeImage);
document.querySelector('#popupWindow').addEventListener('click', closeImage);
document.querySelector('#welcome').addEventListener('click', click_welcome);

function click_welcome() {
  imageView('images/welcome.jpg');
}

function imageView(imgsrc) {
  document.querySelector('#popupImage').src = imgsrc;
  document.querySelector('#popupImage').className = 'img-fluid';
  document.querySelector('#popupWindow').style.display = 'block';
  document.querySelector('#popupbg').style.visibility = 'visible';
}

function closeImage() {
  document.querySelector('#popupWindow').style.display = 'none';
  document.querySelector('#popupbg').style.visibility = 'hidden';
}
