var seasonSelect = document.getElementById("sale");



var products = new XMLHttpRequest(),
categories = new XMLHttpRequest(),


function prolist(){
  console.log(json.parse(products.responseText)
}

function catList(){
  console.log(json.parse(categories.responseText)
}

products.addEventListener("load", proList);
products.open("GET", "products.json");
products.send()

categories.addEventListener("load", catList);
categories.open('GET', 'categories.json');
categories.send()
