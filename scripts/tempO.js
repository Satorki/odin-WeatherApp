import { getParameters } from "./wheatherAPIdata.js";

async function showTempCelc() {
    try {
        const currentData = await getParameters();
        const tempNumber = document.querySelector("#tempNumber");
        tempNumber.textContent = currentData.current.temp_c;
    } catch (error) {
        console.log(error);
    }
}
async function showTempFahr() {
    try {
        const currentData = await getParameters();
        const tempNumber = document.querySelector("#tempNumber");
        tempNumber.textContent = currentData.current.temp_f;
    } catch (error) {
        console.log(error);
    }
}


function toggleTempUnit() {
    const tempUnitOutput = document.querySelector("#tempUnit");
    const tempUnitBtn = document.querySelector("#tempButton");
    tempUnitBtn.addEventListener("click", () => {
      if (tempUnitOutput.textContent === "°C") {
        showTempFahr()
        tempUnitOutput.textContent = "°F";
      } else {
        showTempCelc()
        tempUnitOutput.textContent = "°C";
      }
    });
  }
  
  export {toggleTempUnit, showTempCelc, showTempFahr}