import { skyConditionShow } from "./contitionO.js";
import {
  toggleLocalizationInputShow,
  localizationIOHide,
  localizationButtonSubmitHide,
} from "./localizationIO.js";
import { showTempCelc, toggleTempUnit } from "./tempO.js";

toggleLocalizationInputShow();
toggleTempUnit();

function startAppFunctions() {
  localizationButtonSubmitHide();
  showTempCelc()
  localizationIOHide();
  skyConditionShow()
}

function weatherShow() {
  const locBtnSubmit = document.querySelector("#localizationButtonSubmit");
  const inputLoc = document.querySelector("#localizationIO")
  locBtnSubmit.addEventListener("click", startAppFunctions);
  inputLoc.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      startAppFunctions()
    }
  })
}
weatherShow();
