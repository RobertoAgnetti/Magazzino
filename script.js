let magazzino = [
    {nome:"Mela", codice:"001", prezzo:1.5, quantità: 31},
    {nome:"Latte", codice:"002", prezzo:2, quantità: 10}
];

function aggiungiProdotto() {
    let prodotto = {nome: document.getElementById("nome").value, codice: document.getElementById("codice").value, prezzo: parseFloat(document.getElementById("prezzo").value), quantità: parseInt(document.getElementById("quantità").value)};

    //annulla la perazione


    /*const prodottoEsiste = magazzino.some(item => item.codice === prodotto.codice);
    if (prodottoEsiste) {
        alert("Il prodotto con questo codice esiste già!");
        return;
    }*/

    // Trova il prodotto nel magazzino
    const prodottoEsistente = magazzino.find(item => item.codice === prodotto.codice);

    if (prodottoEsistente) {
        // Modifica il prodotto esistente
        prodottoEsistente.nome = prodotto.nome;
        prodottoEsistente.prezzo = prodotto.prezzo;
        prodottoEsistente.quantità = prodotto.quantità;
    } else {
        // Aggiungi il nuovo prodotto
        magazzino.push(prodotto);
    }

    mostraProdotti()
}

function rimuoviProdotto(){
    const rimuovere = document.getElementById("annulla").value;

    for( let i = 0; i<magazzino.length; i++) {
        if (magazzino[i].codice == rimuovere) {
            magazzino.splice(i,1);
            break;
        }
    }
    mostraProdotti();
}

function prezzoTotale() {
    let prezzo = 0;

    for( let i = 0; i<magazzino.length; i++) {
        prezzo += magazzino[i].prezzo * magazzino[i].quantità;
    }

    alert("il prezzo totale è "+ prezzo);
    mostraProdotti();
}

function prodottiDaRiordinare() {
    let ordinare = [];

    for( let i = 0; i<magazzino.length; i++) {
        if (magazzino[i].quantità<5) {
            ordinare.push(magazzino[i].codice)
        } 
    }

    if(ordinare[0] == null) {
        alert("Non ci sono prodotti da riordinare");
    } else {
        alert("il codice dei prodotti da riordinare sono: "+ordinare);
        mostraProdotti()
    }

    

}


function mostraProdotti() {
    const tabella = document.getElementById('tabellaProdotti');
    tabella.innerHTML = ''; 

    magazzino.forEach(prodotto => {
        const riga = document.createElement('tr');
        riga.innerHTML = `
            <td>${prodotto.codice}</td>
            <td>${prodotto.nome}</td>
            <td>€${prodotto.prezzo.toFixed(2)}</td>
            <td>${prodotto.quantità}</td>
        `;
        tabella.appendChild(riga);
    });
}

mostraProdotti();