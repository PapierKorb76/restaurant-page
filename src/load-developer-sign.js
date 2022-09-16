
const body = document.querySelector("body");

export function loadDeveloperSign(){
    const developerSign = document.createElement("p");
    developerSign.innerText = "Developed by PapierKorb ( ͡° ͜ʖ ͡°)";
    developerSign.id = "developer-sign";
    body.append(developerSign);
}