var name = prompt("Qual é o seu nome e sobrenome?");
var firstLetter = name.slice(0,1);
var secondLetterPosition = name.indexOf(" ") + 1;
var secondLetter = name.slice(secondLetterPosition, secondLetterPosition + 1);

document.write("Suas iniciais são: " + firstLetter.toUpperCase() + secondLetter.toUpperCase());
