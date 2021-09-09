var firstName = prompt('Ismingiz!',"");
var paragrp = document.createElement('h1');
document.body.append(paragrp);
var age = prompt('Yoshingizni kiriting!');
document.body.style.backgroundColor = 'rgb(65, 40, 99)';
var yourAge = 18;
if (age >= yourAge) {
    paragrp.textContent = firstName+ " dasturlsh kursimzga xush kelbsz";
}else {
    paragrp.textContent = "Yoshingiz to`g`ri kelamdi"
}
