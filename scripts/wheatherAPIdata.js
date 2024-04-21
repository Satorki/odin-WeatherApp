import { getLocalizationInput } from "./localizationIO.js";

async function getParameters() {
  try {
    const localizationInput = await getLocalizationInput();
    const apiKey = "6177da52a8f4428b8f5103747241704";
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${localizationInput}`,
      { mode: "cors" }
    );
    const currentData = await response.json();
    return currentData;
  } catch (error) {
    console.log(error);
  }
}

export { getParameters };
