//funkcija u funkciji

function prvaFunkcija() {
    document.write("Kerim");
}

function medjuFunkcija() {
    document.write("<br>");
}

function drugaFunkcija() {
    document.write("Imamovic");
}

function pozivaGornjeDvije() {
    prvaFunkcija();
    medjuFunkcija();
    drugaFunkcija();
}

pozivaGornjeDvije();


