function script_1() {
  // Affiche Bonjour monde
  answer = prompt("Quel est ton prénom ?");

  console.log(`Bonjour monde ${answer}`);
  document.getElementById("resultat").innerHTML = `Bonjour monde ${answer}`
}

function script_2() {
  // Un prompt s'affiche avec la question suivante
  num = prompt("De quel nombre veux-tu calculer la factorielle ?")
  if (num < 0) {
    console.log(`erreur : Nombre négatif`);
  }
  else if ( num === 0 ){
    console.log(`${num}! = 1`);
  }
  else {  
    let fact = 1
    for(let count = 1; count <= num; count++){
      fact = fact * count
    }
    console.log(`${num}! = ${fact}`)
    document.getElementById("resultat").innerHTML = (`${num}! = ${fact}`)
  }
}


function script_3() {
  // Pyramide de Mario
  let etages ="";
  etages = prompt("Combien d'étages veux-tu pour ta super pyramide ?");
  
  for(let nb = 1; nb <= etages; nb++ ) {
    console.log(" ".repeat(etages-nb)+"#".repeat(nb));	
    }
  
}

function script_4() {
  // Petits exos sur les array et hashes
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
  // Petits exo pour la bibliothèque !
  const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];


  console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");
    books.sort(function (a, b) {
      return a.rented - b.rented;
    })
    console.log((books[0].rented>0)? true : false);

  console.log("Quel est livre le plus emprunté ?");
    books.sort(function (a, b) {
      return b.rented - a.rented;
    })
    console.log(books[0].title + " avec "+ books[0].rented + " emprunts" );

  console.log("Quel est le livre le moins emprunté ?");
  books.sort(function (a, b) {
    return a.rented - b.rented;
  })
  console.log(books[0].title + " avec "+ books[0].rented + " emprunts" );

  console.log("Trouve le livre avec l'ID: 873495 ;");
  console.log(`${books.filter(function(book){return book.id === 873495})[0].title}`);


  console.log("Supprime le livre avec l'ID: 133712 ;");
  console.log(books2 = books.filter(function(book){return book.id !== 133712}));

  console.log("Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).");
  console.log(books2.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0)));
};

function script_6() {
  // Converti l'ARN en ADN

  const arn1 = "CCGUCGUUGCGCUACAGC";
  const arn2 = "CCUCGCCGGUACUUCUCG";    

  function codon_to_am (codon) {

    let am = "";
    if ((codon == "UCU") || (codon == "UCC") || (codon == "UCA") || (codon == "UCG") || (codon == "AGU") || (codon == "AGC")) {
      am = "Sérine";} 
    else if ((codon == "CCU") || (codon == "CCC") || (codon == "CCA") || (codon == "CCG")) {
      am = "Proline";} 
    else if (codon == "UUA" || codon == "UUG") {
      am = "Leucine";} 
    else if (codon == "UUU" || codon == "UUC") {
      am = "Phénylalanine";} 
    else if (codon == "CGU" || codon == "CGC" || codon == "CGA" || codon == "CGG" || codon == "AGA" || codon == "AGG") {
      am = "Arginine";} 
    else if (codon == "UAU" || codon == "UAC") {
      am = "Tyrosine";}
    return am
  };

  function become (arn) {
    let adn = ""
    for (let i = 0; i<(arn.length)/3; i++){
      adn = adn + " - " + codon_to_am(arn.slice(0+3*i,3+3*i))
      ;
    };
    return(adn)
  };

  console.log(` ${arn1} va devenir ${become(arn1)}`);
  console.log(` ${arn2} va devenir ${become(arn2)}`);
}

function script_7() {
  // Adobot party !

  answer = prompt("Bonjour je suis botado. Comment puis-je ne pas t'aider ?");

  let next_one = true

  if (answer.length === 0 && next_one === true ){ 
    console.log("t'es en PLS ?"); 
    next_one = false;
    };
  
  if (answer.slice(-1)==="?" ){ 
    console.log("Ouais Ouais..."); 
    next_one = false;
    };

  if (answer === answer.toUpperCase() && next_one === true ){ 
    console.log("Pwa, calme-toi..."); 
    next_one = false;
    };

  if (answer.toUpperCase().includes("FORNITE") && next_one === true ){ 
    console.log("on s' fait une partie soum-soum ?"); 
    next_one = false;
    };

  if ( next_one === true ){ 
    console.log("balek.");; 
    };

}