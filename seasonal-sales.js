var seasonSelect = document.getElementById("sale");
var prodRequest = new XMLHttpRequest();
var catRequest = new XMLHttpRequest();
var prodHtml = "<ul>";

function saleCalc(){
  if(seasonSelect.value === "spring"){
        console.log("enjoy a spring discount")
  }else if(seasonSelect.value === "autumn"){
    console.log("enjoy a fall discount")
  }else if(seasonSelect.value === "winter"){
    console.log("enjoy a winter discount")
  }else{
    console.log('its summer enjoy no discount but the outside!!!')
  }
}

function loadUp(e){
  var data = JSON.parse(e.target.responseText)

  for (var i = 0; i < data.products.length; i++) {
    prodHtml += `<li>${data.products[i].name}</li>`
    console.log(prodHtml)
  }
  document.getElementById("prod").innerHTML=prodHtml;
}

seasonSelect.addEventListener("change", saleCalc)

prodRequest.addEventListener("load", loadUp);
prodRequest.open("GET", "products.json");
prodRequest.send()

catRequest.addEventListener("load", loadUp);
catRequest.open('GET', 'categories.json');
catRequest.send()
