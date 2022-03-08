export default class CurrentLocation {
    constructor() {
        this._name = "Current Location";
        this._lat = null;
        this._lon = null;
        this._unit = "imperial";
    }
    // method names
    getName() {
        return this._name;
    }

    setName() {
        this._name = name;
    }

    getLat() {
        return this._lat;
    }

    setLat() {
        this._lat = lat;
    }

    getLon() {
        return this._lon;
    }

    setLon() {
        this._lon = lon;
    }

    getUnit() {
        return this._unit;
    }

    setUnit() {
        this._unit = unit;
    }

    toggleUnit() {
        // ternary operator to determine °F vs °C
        this._unit = this._unit === "imperial" ? "metric" : "imperial";
    }
}