document.querySelector("button").addEventListener("click", butttonCliked);

function butttonCliked() {
  let brugerNavn = document.querySelector("#navn").value;
  console.log(`Tillykke dit navn er ${brugerNavn}`);
}
