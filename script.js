
let nome = ("Inserisci il tuo nome");



const distanzaKm = parseInt(prompt("Quanti chilometri vuole percorrere?"));
console.log("distanzaKm"); 


const etàPasseggero = parseInt(prompt("Quanti anni ha?"));
console.log("etàPasseggero");




const prezzoKm = distanzaKm * 0.21;
console.log("prezzoKm");



let prezzoFinale = prezzoKm;
console.log("prezzoFinale");


if (etàPasseggero < 18) {
    const minorenne = prezzoKm * 0.20;
    console.log(`Lo sconto per viaggiatore minorenne è: 8.4${minorenne}`);
    prezzoFinale = prezzoKm - minorenne;
    console.log("Il prezzo è " + (prezzoKm - minorenne));

} else if (etàPasseggero > 65) {
    const adulto = priceKm * 0.40;
    console.log("adulto è: " + adulto);
    prezzoFinale = prezzoKm - adulto;
    console.log("Il prezzo è " + (prezzoKm - adulto));
}


document.getElementById("nome").innerHTML = `Il prezzo del biglietto è ${prezzoFinale.toFixed(2)}€`;

