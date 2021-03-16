

var alertuno=[1,2,3,4,5];
alert(alertuno.join(","))



setTimeout(function () {
  var numero;
  var sbagliato = true;
  var i = 0;
  while ( i < 5 && sbagliato == true ){
    numero = parseInt(prompt('Inserisci un numero'));
    if (!alertuno.includes(numero)) {
      console.log("hai scordato i numeri");
      sbagliato = false;
    }
    i++;
  }
}, 3000);
