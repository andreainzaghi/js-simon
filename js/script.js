
var alertuno= alert(1,2,3,4,5,);





setTimeout(function () {
  var numero;
  for (var i = 0; i < 5; i++){
    numero = parseInt(prompt('Inserisci un numero'));
    if (numero !== alertuno[i]) {
      consol.log("hai scordato i numeri")
    }
  }
}, 3000);
