var form = document.querySelector("form");
var clear = document.querySelector("#clear");
var getData = document.querySelector("#getData");

var securityCode = document.getElementById("security-code");
var cardName = document.getElementById("card-name");
var showCardNumber = document.getElementById("show-card-number");
var showED = document.getElementById("show-ED");
var showSC = document.getElementById("show-SC");
var showName = document.getElementById("show-name");
var cardNumber = document.getElementById("card-number");
var expirationDate = document.getElementById("expiration-date");
var securityCode = document.getElementById("security-code");
var logo = document.getElementById("logo");
var title = document.getElementById("title");
// const inputHandler = function (e) {
//   showCardNumber.innerHTML = e.target.value;
// };
var fields = [cardNumber, expirationDate, securityCode, name];
if (cardNumber.value === "") {
  console.log("true");
}
console.log(cardNumber.value);
function clearFunction() {
  clear.style.backgroundColor = "#49c1a2";
  clear.style.cursor = "pointer";
  clear.disabled = false;
}
function resetFunction() {
  form.reset();
  clear.style.backgroundColor = "gray";
  clear.style.cursor = "no-drop;";
  clear.disabled = true;
  showCardNumber.innerHTML = "";
  showED.innerHTML = "";
  showSC.innerHTML = "";
}

// cardNumber.addEventListener("change", inputHandler);
// cardNumber.addEventListener("propertychange", inputHandler);
function typeCardNumber() {
  showCardNumber.innerHTML = cardNumber.value;
  if (/^4/.test(cardNumber.value)) {
    logo.innerHTML = "VISA";
  } else if (
    /^51/.test(cardNumber.value) ||
    /^52/.test(cardNumber.value) ||
    /^53/.test(cardNumber.value) ||
    /^54/.test(cardNumber.value)
  ) {
    logo.innerHTML = "mastercard";
  } else {
    logo.innerHTML = "TP";
  }

  if (/^400390/.test(cardNumber.value)) {
    title.innerHTML = "Bank of America";
  } else if (/^407110/.test(cardNumber.value)) {
    title.innerHTML = "Wells Fargo";
  } else {
    title.innerHTML = "TabaPay";
  }
}

function typeED() {
  showED.innerHTML = expirationDate.value;
}

var switching = false;

function typeSC() {
  showSC.innerHTML = securityCode.value;
}

function typeName() {
  showName.innerHTML = cardName.value;
}

function flipCard() {
  var j = document.getElementsByClassName("flip-card-inner")[0];
  var k = 0;

  if (j.style.transform) {
    k = +j.style.transform.substring(8, j.style.transform.indexOf("deg"));
  }

  k += 180;
  j.style.transform = "rotateY(" + k + "deg)";
  switching = true;
}

function flipCardBack() {
  if (switching) {
    var j = document.getElementsByClassName("flip-card-inner")[0];
    var k = 0;

    if (j.style.transform) {
      k = +j.style.transform.substring(8, j.style.transform.indexOf("deg"));
    }

    k += 180;
    j.style.transform = "rotateY(" + k + "deg)";
    switching = false;
  } else {
    return;
  }
}

function checkform() {
  var cansubmit = true;
  for (var i = 0; i < 4; i++) {
    if (form[i].value.length == 0) {
      cansubmit = false;
    }
  }

  if (cansubmit) {
    getData.style.backgroundColor = "#49c1a2";
    getData.style.cursor = "pointer";
    getData.disabled = false;
  } else {
    getData.disabled = "disabled";
  }
}

function showFormData() {
  var newLine = "\r\n";
  var message = "CardNumber" + cardNumber.value;
  message += newLine;
  message += "Expiration Date" + expirationDate.value;
  message += newLine;
  message += "Security Code" + securityCode.value;
  message += newLine;
  message += "Customer" + name.value;
  alert(message);
}
