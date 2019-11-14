function script_1() {
  // Affiche Bonjour monde
  answer = prompt("Quel est ton prénom ?");

  console.log(`Bonjour monde ${answer}`);
  document.getElementById("resultat").innerHTML = `Bonjour monde ${answer}`
}

function script_2() {
  // Un prompt s'affiche avec la question suivante
  num = prompt("De quel nombre veux-tu calculer la factorielle ?")
  let fact = 1
  for(let count = 1; count <= num; count++){
    fact = fact * count
  }
  console.log(`${num}! = ${fact}`)
  document.getElementById("resultat").innerHTML = (`${num}! = ${fact}`)
}


function script_3() {
  let etages ="";
  etages = prompt("Combien d'étages veux-tu pour ta super pyramide ?");
  
  for(let nb = 1; nb <= etages; nb++ ) {
    console.log(" ".repeat(etages-nb)+"#".repeat(nb));	
    }
  
}

function script_4() {
  const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];

  console.log("Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70");
    function isBornIn70ies(entrepreneur) {
      return (entrepreneur.year >= 1970) && (entrepreneur.year <= 1979);
    }
    console.log(entrepreneurs.filter(isBornIn70ies));
    //see --> https://www.w3schools.com/jsref/jsref_filter.asp

  console.log("Sors une array qui contient le prénom et le nom des entrepreneurs");
    console.log(entrepreneurs.map ((entrepreneur) => {return entrepreneur.first + " " + entrepreneur.last}));
    //see --> https://www.w3schools.com/jsref/jsref_map.asp

  console.log("Quel âge aurait chaque inventeur aujourd'hui ?");
    console.log(entrepreneurs.map ((entrepreneur) => {return entrepreneur.first + " " + entrepreneur.last + " a " + (2019 - entrepreneur.year) + " ans" }));
    
  console.log("Trie les entrepreneurs par ordre alphabétique du nom de famille.");
    console.log(entrepreneurs.sort((a,b) => (a.last < b.last) ? -1 : ((b.last > a.last) ? 1 : 0)));
    //https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/sort
}

function script_5() {
  console.log("Hello world !");
}

function script_6() {
  console.log("Hello world !");
}

function script_7() {
  console.log("Hello world !");
}