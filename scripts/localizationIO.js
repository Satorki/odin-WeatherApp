function localizationButtonSubmitShow() {
  const locBtnSubmit = document.querySelector("#localizationButtonSubmit");
  locBtnSubmit.classList.remove("locBtnSubmitHide");
  locBtnSubmit.classList.add("locBtnSubmitShow");
}
function localizationButtonSubmitHide() {
  const locBtnSubmit = document.querySelector("#localizationButtonSubmit");
  locBtnSubmit.classList.remove("locBtnSubmitShow");
  locBtnSubmit.classList.add("locBtnSubmitHide");
}

function localizationIOShow() {
  const locOutput = document.querySelector("#localizationIO");
  locOutput.classList.remove("locIOHide");
  locOutput.classList.add("locIOShow");
  locOutput.readOnly = false;
}

function localizationIOHide() {
  const locOutput = document.querySelector("#localizationIO");
  locOutput.classList.remove("locIOShow");
  locOutput.classList.add("locIOHide");
  locOutput.readOnly = true;
}

function toggleLocalizationInputShow() {
  const locBtnOpen = document.querySelector("#localizationButtonOpen");
  const locBtnSubmit = document.querySelector("#localizationButtonSubmit");

  locBtnOpen.addEventListener("click", () => {
    let trigger = locBtnSubmit.classList.contains("locBtnSubmitShow");
    if (trigger) {
      localizationButtonSubmitHide();
      localizationIOHide();
    } else {
      localizationButtonSubmitShow();
      localizationIOShow();
    }
  });
}

function getLocalizationInput() {
  const locOutput = document.querySelector("#localizationIO");
  return locOutput.value;
}

export {
  toggleLocalizationInputShow,
  getLocalizationInput,
  localizationIOHide,
  localizationButtonSubmitHide,
};
