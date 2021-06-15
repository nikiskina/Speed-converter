const UI = {
    speedInput: document.querySelector(".windSpeed"),
    knots: document.querySelector("#knots"),
    MS: document.querySelector("#ms"),
    KmH: document.querySelector("#kmh"),
    convertButton: document.querySelector(".convert"),
    speedInKnots: document.querySelector(".knots"),
    speedInMS: document.querySelector(".ms"),
    speedInKmH: document.querySelector(".kmH")
};

// function calculateSpeed(a, b) {
//    return a * b;
// };

function validateSpeedInput() {
    if (UI.speedInput.value > 223) {
        document.querySelector(".alert").style.display = "block";
        setInterval(function(){
            document.querySelector(".alert").style.display = "none"
        }, 8000);
    } else if (UI.speedInput.value < 0) {
        UI.speedInKnots.innerHTML = "error";
        UI.speedInMS.innerHTML = "error";
        UI.speedInKmH.innerHTML = "error";
    }
}
// function checkRadioInput(){
//     if(!UI.KmH.checked || !UI.knots.checked || !UI.MS.checked);
//        alert("Choose unit")
// };

UI.convertButton.addEventListener("click", () => {
    //patikriname koki unit pasirinko vartotojas
    if (UI.knots.checked) {
        let speedInKnots = UI.speedInput.value;
        let speedInMS = UI.speedInput.value * 0.5144444;
        let speedInKmH = UI.speedInput.value * 1.852;

        UI.speedInKnots.innerHTML = speedInKnots + " knots";
        UI.speedInMS.innerHTML = speedInMS.toFixed(2) + " m/s";
        UI.speedInKmH.innerHTML = speedInKmH.toFixed(2) + " km/h";
    } else if (UI.MS.checked) {
        let speedInKnots = UI.speedInput.value * 1.9438445;
        let speedInMS = UI.speedInput.value;
        let speedInKmH = UI.speedInput.value * 3.6;

        UI.speedInKnots.innerHTML = speedInKnots.toFixed(2) + " knots";
        UI.speedInMS.innerHTML = speedInMS + " m/s";
        UI.speedInKmH.innerHTML = speedInKmH.toFixed(2) + " km/h";
    } else if (UI.KmH.checked) {
        let speedInKnots = UI.speedInput.value * 0.5399568;
        let speedInMS = UI.speedInput.value * 0.277778;
        let speedInKmH = UI.speedInput.value;

        UI.speedInKnots.innerHTML = speedInKnots.toFixed(2) + " knots";
        UI.speedInMS.innerHTML = speedInMS.toFixed(2) + " m/s";
        UI.speedInKmH.innerHTML = speedInKmH + " km/h";
    }
    // checkRadioInput();
    validateSpeedInput();
})
