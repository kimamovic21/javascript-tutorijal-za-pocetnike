//Globalne i lokalne varijable

var proba = 123;

function printanje() {
    var proba = "Neka druga varijabla";
    document.write(proba);
}

function drugaFunkcija() {
    document.write(proba);
}

printanje();
drugaFunkcija();



