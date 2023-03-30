// Знаходимо кнопки рейтингу
let radioBtns = Array.from(document.querySelectorAll("input[name='ratingbtn']"));
// Знаходимо кнопку submit
let submit = document.getElementById("submit");

let selectedValue = document.getElementById("selected-value");

let raitingContainer = document.querySelector(".rating-container");

let resultContainer = document.querySelector(".result-container");

submit.addEventListener('click', (event) => {
    // console.log(event);
    // console.log(radioBtns);
    let selectBtn = radioBtns.find((radioBtn) => {
        return radioBtn.checked;
    });
    if (selectBtn) {
        console.log(selectBtn.value);
        selectedValue.innerHTML=selectBtn.value;
        raitingContainer.style.display="none";
        resultContainer.style.display="block";
    }

    
});