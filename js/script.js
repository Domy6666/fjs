// start topic 1
function bancomat () {
let money =+document.money.a.value;
let answer=document.getElementById("answer");
if(isNaN(money)){
  string='Is not a number'
}else if (+money < 10 ||+money > 3000){
string="Fail, you can withdraw up to $3,000 at a time";
}else if(+money%10!=0){
string= `Take your money: ${money - money%10}$. Bank rest is ${money%10}$.`
}else {
string=`Take your money: ${money}$.`
}
answer.innerHTML = string
}
// finish topic 1 

//start topic 2 
function marks () {
let voto = +

if (voto === null) {
 alert("Ciao")
}
if (voto <1 || voto > 10) {
 document.write("Hai sbagliato quindi arrividerci e  spero che non ci vediamo più");
}
else if (voto <= 4 ) {
 document.write("Quel ragazzo ha preso  una insufficienza");
  } 
else if (voto <= 7 ) {
 document.write("Quel ragazzo ha preso un voto normale");
  }
else {
 document.write("Sei stato molto bravo")
}
}
// finish topic 2