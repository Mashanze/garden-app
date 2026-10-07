// Ask the user for the current season and plant type
let season = prompt(
    "Enter the current season (summer or winter):"
).toLowerCase();

let plantType = prompt(
    "Enter the plant type (flower or vegetable):"
).toLowerCase();

/**
 * Returns gardening advice based on the season.
 * @param {string} season - The current season.
 * @returns {string} Gardening advice for the season.
 */
function getSeasonAdvice(season) {
    if (season === "summer") {
        return "Water your plants regularly and provide some shade.";
    } else if (season === "winter") {
        return "Protect your plants from frost with covers.";
    } else {
        return "No advice for this season.";
    }
}

/**
 * Returns gardening advice based on the plant type.
 * @param {string} plantType - The type of plant.
 * @returns {string} Gardening advice for the plant type.
 */
function getPlantAdvice(plantType) {
    if (plantType === "flower") {
        return "Use fertiliser to encourage blooms.";
    } else if (plantType === "vegetable") {
        return "Keep an eye out for pests!";
    } else {
        return "No advice for this type of plant.";
    }
}

// Generate gardening advice using the reusable functions
let advice = getSeasonAdvice(season) + "\n" + getPlantAdvice(plantType);

// Display the generated advice
console.log(advice);