// alert("Hello world");

console.log("bonjour");

// type string
var foo = "ceci est une string";


// type number ne pas mettre les guillemets sinon c est un string
var bar = 4;

// type boolean accepte que un ou zero
var bool = true;
var bool = false;

// type undefined n'existe pas
var nombreVariable;


// type null ne contient rien 
var variable = null;

// type array separer des valeurs
var tableau = ["red", "orange", "blue"];

// type object
var objecType = {
    "Nom": "Banny",
    "Prénom": "Ambre",
    "Age": "23",
}

// type function
var variableDeTypeFunction = function () {
    return ("string returnée");

}

console.log(typeof foo);

var header = document.getElementsByTagName('li');
console.log(header);

var selectionParClasse = document.getElementsByClassName('liens');
var nimporteQuoi = document.getElementById('menu');

console.log(nimporteQuoi);

var tchoutchou = document.createElement('div');
tchoutchou.classList.add('foo', 'secondClass');
document.body.appendChild(tchoutchou);


document.getElementById('id_test').onclick = function () {
    console.log('bvfdjpovkfpodvkdfpo');
    document.getElementById('id_test').classList.add('classe_ajoutee');
}
 
// document.getElementsById('main_nav').classList.add('classe_ajoutee');

document.getElementById('burger1').onclick = function () {
    document.getElementById('main_nav').classList.toggle('show');
}


