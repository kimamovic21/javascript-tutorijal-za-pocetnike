// Kreiranje objekata

function lica(ime, prezime, jmbg) {
    this.ime = ime;
    this.prezime = prezime;
    this.jmbg = jmbg;
}

var kerim = new lica("Kerim", "Imamovic", 01234);
var john = new lica("John", "Doe", 56789);

document.write(kerim.jmbg);
document.write("<br>");
document.write(john.prezime);



