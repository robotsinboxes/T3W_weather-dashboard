import { 
    addSpinner,
    displayError,
    updateScrConfirmation
} from "./domfunctions.js";
import { 
    setLocationObject,
    getHomeLocation
} from "./datafunctions.js"
import CurrentLocation from "./CurrentLocation.js";
const currentLoc = new CurrentLocation();

// function that runs when app is initialized
const initApp = () => {
    // add listeners 
    const geoButton = document.getElementById("getLocation");
    geoButton.addEventListener("click", getGeoWeather);
    const homeButton = document.getElementById("home");
    homeButton.addEventListener("click", loadWeather);
    // set up 

    // load default weather
    loadWeather();
}

document.addEventListener("DOMContentLoaded", initApp);

const getGeoWeather = (e) => {
    if (e) {
        if (e.type === "click") {
            // add spinner
            const mapIcon = document.querySelector(".fa-map-marker-alt");
            addSpinner(mapIcon);
        }
    }
    // if geo location isn't supported
    if (!navigator.geolocation) return geoError();
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
}

const geoError = (errObj) => {
    const errMsg = errObj ? errObj.message : "Geolocation not supported";
    displayError(errMsg, errMsg);
}

const geoSuccess = (position) => {
    const myCoordsObj = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
        name: `Lat:${position.coords.latitude} Lon:${position.coords.longitude}`
    }
    // set location object
    setLocationObject(currentLoc, myCoordsObj);
    console.log(currentLoc);
    // update data and display
    updateDataAndDisplay(currentLoc);
}

const loadWeather = (e) => {
    const savedLocation = getHomeLocation();
    if (!savedLocation && !e) return getGeoWeather();
    if (!savedLocation && ! e.type === 'click') {
        displayError(
            "No home location saved.",
            "Please save your home location first."
        );
    } else if (savedLocation && !e) {
        displayHomeLocationWeather(savedLocation);
    } else {
        const homeIcon = document.querySelector(".fa-home");
        addSpinner(homeIcon);
        displayHomeLocationWeather(savedLocation);
    }
}

const displayHomeLocationWeather = (home) => {
    if (typeof home === "string") {
        const locationJson = JSON.parse(home);
        const myCoordsObj = {
            lat: locationJson.lat,
            lon: locationJson.lon,
            name: locationJson.name,
            unit: locationJson.unit,
        }
        setLocationObject(currentLoc, myCoordsObj);
        updateDataAndDisplay(currentLoc);
    }
}

const saveLocation = () => {
    if (currentLoc.getLat() && currentLoc.getLon()) {
        const saveIcon = document.querySelector(".fa-save");
        addSpinner(saveIcon);
        const location = {
            name: currentLoc.getName(),
            lat: currentLoc.getLat(),
            lon: currentLoc.getLon(),
            unit: currentLoc.getUnit(),
        };
        localStorage.setItem("defaultWeatherLocation", JSON.stringify(location));
        updateScrConfirmation(`Saved ${currentLoc.getName()} as home location`);
    }
}

const updateDataAndDisplay = async (locationObj) => {
    console.log(locationObj);
    // const weatherJson = await getWeatherFromCoords(locationObj);
    // if (weatherJson) updateDisplay(weatherJson, locationObj);
}

// 2:35 ish