console.log("Hello world!");
let przycisk = document.querySelector(".btnHeader");
let przyciskHeadera = document.getElementById("btnHeader");
let przyciskKoloru = document.getElementById("btnColor");
let parTest = document.getElementById("paragrafTestowy");
let buttons = document.getElementsByClassName("button");

let heightElement = document.querySelector(".js-height");
let weightElement = document.querySelector(".js-weight");
let formElement = document.querySelector(".js-formBmi");
let formElement2 = document.querySelector(".js-kalkulator");
let bmiElement = document.querySelector(".js-bmi");

let iloscWalutyElement = document.querySelector(".js-ilosc");
let kursWalutyElement = document.querySelector(".js-kurs");
let wynikElement = document.querySelector(".js-wartosc");


przyciskHeadera.addEventListener("click", () => {
    let naglowek = document.querySelector(".naglowek");
    naglowek.remove();
    alert("bum");
});

przyciskKoloru.addEventListener("click", () => {
    alert("bum1");
    parTest.classList.toggle("dark");
    button.classList.toggle("buttonDark");
    buttons.classList.toggle("buttonDark");
});

formElement.addEventListener("input", () => {
    let height = heightElement.value;
    let weight = weightElement.value;

    let bmi = weight / ((height / 100) ** 2);
    
    bmiElement.innerText = bmi.toFixed(2);

});
formElement2.addEventListener("input", () => {
    
    let ilosc = iloscWalutyElement.value;
    let kurs = kursWalutyElement.value;

    let wynik = kurs * ilosc ;
    wynikElement.innerText = wynik.toFixed(2);
});