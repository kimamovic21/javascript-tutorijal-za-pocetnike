//beskonacna petlja

function prva() {
    document.write("bilo sta...");
    druga();
}

function druga() {
    document.write("*****nesta bezveze");
    prva();
}

function treca_koja_poziva() {
    prva();
    druga();
}

treca_koja_poziva();




