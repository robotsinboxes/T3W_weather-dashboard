// element = icon
export const addSpinner = (element) => {
    // helper function that animates function
    animateButton(element);
    // 3rd parameter is allowed 
    setTimeout(animateButton, 1000, element);
} 

// helper function, element = icon
const animateButton = (element) => {
    element.classList.toggle("none");
    element.nextElementSibling.classList.toggle("block");
    element.nextElementSibling.classList.toggle("none");
}

export const displayError = (headerMsg, scrMsg) => {
    // helper functions 
    updateWeatherLocationHeader(headerMsg, scrMsg);
    updateScrConfirmation(scrMsg);
}

const updateWeatherLocationHeader = (message) => {
    const h1 = document.getElementById("currentWeather__location");
    h1.textContent = message;
}

export const updateScrConfirmation = (message) => {
    document.getElementById("confirmation").textContent = message;
}