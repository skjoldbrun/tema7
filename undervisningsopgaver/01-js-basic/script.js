let længde = 50;
let bredde = 2;
let areal = længde * bredde;
let resultat;

if (areal < 100) {
  resultat = "Arealet er for lille";
} else if (areal < 200) {
  resultat = "Arealet er OK";
} else {
  resultat = "Arealet er for stort";
}

console.log(resultat);
