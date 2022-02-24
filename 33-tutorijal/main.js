// Spajanje nizova

var stariji_pj = new Array("Lisp", "Prolog", "Asembler");
var noviji_pj = new Array("PHP", "Javascript", "Rust");

var svi_pj = stariji_pj.concat(noviji_pj);

document.write(svi_pj[0]);

var najnoviji_pj = new Array("Go");

var total = svi_pj.concat(najnoviji_pj);

alert(total[4]);
