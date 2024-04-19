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
}

function localizationIOHide() {
  const locOutput = document.querySelector("#localizationIO");
  locOutput.classList.remove("locIOShow");
  locOutput.classList.add("locIOHide");
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
toggleLocalizationInputShow();








// function getLocalization() {
//   const localizationButtonSubmit = document.querySelector("#localizationButtonSubmit");
//   const localizationInput = document.querySelector("#localizationOutput")
//   localizationButtonSubmit.addEventListener("click", () => {
//     const localizationInputValue = localizationInput.value
//     return localizationInputValue;
//   });
// }



// async function getParameters(localization) {
//   try {
//     const localizationInput = await localization;
//     const apiKey = "6177da52a8f4428b8f5103747241704";
//     const response = await fetch(
//       `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${localizationInput}`,
//       { mode: "cors" }
//     );
//     const currentData = await response.json();
//     console.log(currentData);
//   } catch (error) {
//     console.log(error);
//   }
// }

// document.addEventListener("click", () => {
//     console.log(getLocalization());
// });

// function skyChange() {
//   const skyOutput = document.querySelector("#skyOutput img");
// }

// function dayNightChange() {}
// function localizationInputChange() {
//     const localizationButtonOpen = document.querySelector("#localizationButtonOpen")
//     const localizationButtonSubmit = document.querySelector("#localizationButtonSubmit")
//     localizationButtonOpen.addEventListener("click", () => {
//       localizationButtonSubmit.classList.add()
//     })
// }
// function temperatureChange() {}
// function temperatureUnitChange() {}

// const apiKey = "6177da52a8f4428b8f5103747241704";
// fetch(
//   `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=london`, {mode: "cors"}
// )
// .then(function(response) {
//   return response.json();
// })
// .then(function(response) {
//   console.log(response.current);
// })
// .catch(function(error) {
//   console.log(error);
// })

// const img = document.querySelector('img');

// async function getCats() {
//     try {
//         const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_ke=0cvagHFFWB3Iwao4Xz4m3VWvThsNlNK8&s=cats', {mode: 'cors'});
//         const catData = await response.json()
//         img.src = catData.data.images.original.url;
//     } catch (error) {
//         console.log(error)
//         img.src = "logo.png"
//     }
// }

// getCats()
