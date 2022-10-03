/**
 * Completer cette fonction
 *
 */

function validate(timeToValidate: string): boolean {
  if (timeToValidate.length > 0 && timeToValidate.length == 5) {
    const timeArray = timeToValidate.split(":");
    if (timeArray.length == 2) {
      const hour = parseInt(timeArray[0]);
      const minutes = parseInt(timeArray[1]);
      if (hour !== NaN && minutes !== NaN) {
        if (hour >= 0 && hour < 24 && minutes >= 0 && minutes < 60) {
          return true;
        }
      }
    }
  }
  console.log("format incorrect");
  return false;
}

/******************************************************
 * LE CODE CI-DESSOUS FAIT FONCTIONNER LA PAGE TU PEUX
 * LE MODIFIER POUR COMPRENDRE COMMENT IL FONCTIONNE
 * MAIS ATTENTION DE NE PAS L'EFFACER...
 ******************************************************
 */

const FORM = document.querySelector("form");
const INPUT_START = document.querySelector("#startRdv");
const INPUT_END = document.querySelector("#endRdv");
const ERROR_MSG = document.querySelector("#error");
// const listElement = [INPUT_START, INPUT_END];

FORM?.addEventListener("submit", function (e: SubmitEvent) {
  e.preventDefault();
  const CURRENT_FORM = e.target as HTMLFormElement;

  console.log(CURRENT_FORM);

  const listInput: HTMLInputElement[] = [
    CURRENT_FORM.startRdv,
    CURRENT_FORM.endRdv,
  ];

  console.log();

  for (const input of listInput) {
    cleanClassList(input);
    if (validate(input.value) === undefined) {
      ERROR_MSG?.classList.remove("invisible");
    } else {
      ERROR_MSG?.classList.add("invisible");
    }

    if (validate(input.value)) {
      input.classList.add("is-valid");
    } else {
      input.classList.add("is-invalid");
    }
  }
});

function cleanClassList(htmlElement) {
  if (htmlElement.classList.contains("is-valid")) {
    htmlElement.classList.remove("is-valid");
  }
  if (htmlElement.classList.contains("is-invalid")) {
    htmlElement.classList.remove("is-invalid");
  }
}
