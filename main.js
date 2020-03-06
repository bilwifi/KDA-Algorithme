let phrase = "Bonjour tout le monde,je suis Christian Lisangola,développeur logiciels à Kinshasa Digital. Mon numéro de téléphone est le +243840964176 qui un numéro vodacom,et mon adresse email privé est le christian.lisangola@gmail.com. Par le passé j'ai eu à utiliser d'autres numéros de téléphones à l'instar d'un numéro Airtel qui fut le +243971151294 mais qui ne passe plus je suppose et aussi un numéro Tigo,le +243895602911.Ici à Kinshasa Digital,j'utilise une adresse mail d'entreprise qui est le christian@kinshasadigital.com.".toLowerCase();

tableauDesMots = phrase.split(/ |,/);

console.log(tableauDesMots);
function formaterNumeroTelephone(numero){
    if(numero.length >= 10){
        if(numero.startsWith("+243")){
            numeroValide = numero.slice(0,13);
        }else if(numero.startsWith("0")){
            numeroValide = numero.slice(0,10);
        }
        return numeroValide;
    }else{
        return "Numéro incorrect"
    }
    
}




function filtrerNumero(tableauDeNumero,debutNumero="+243"){
    return tableauDeNumero.filter((numero)=>numero.startsWith(debutNumero));
}

//Trouver le nombre des adresses mail et les lister

console.log("Trouver le nombre des adresses mail et les lister");

let adresseEmail = tableauDesMots.filter(mot => mot.includes('@'));
adresseEmail = adresseEmail.map(function(mail){
    if(mail.endsWith(".")){
       mail = mail.slice('0',mail.length-1);
    }
    return mail;
});
let nombreAdresseEmail = adresseEmail.length;
console.log(adresseEmail);
console.log(nombreAdresseEmail);



// Trouver le nombre des numbers de téléphones et les lister
console.log("Trouver le nombre des numbers de téléphones et les lister");


let numerosTelephones = filtrerNumero(tableauDesMots);
numerosTelephones = numerosTelephones.map(numero => formaterNumeroTelephone(numero));
let nombreDeNumeroTelephone = numerosTelephones.length;
console.log(numerosTelephones);
console.log(nombreDeNumeroTelephone);

//collecter tous les numéros de téléphones Vodacom
console.log("collecter tous les numéros de téléphones Vodacom");
let numeroVodacom = filtrerNumero(numerosTelephones,'+24381')
console.log(numeroVodacom);

//collecter tous les numéros de téléphones Tigo(#de Orange)
console.log("collecter tous les numéros de téléphones Tigo(#de Orange)");
let numeroTigo = filtrerNumero(numerosTelephones,'+24389')
console.log(numeroTigo);

//collecter tous les numéros de téléphones Tigo(#de Orange)
console.log("collecter tous les numéros de téléphones Tigo(#de Orange)");

let numeroOrage = filtrerNumero(numerosTelephones,'+24384')
console.log(numeroOrage);

//Lister toutes les adresses de messageries professionnelles
console.log("Lister toutes les adresses de messageries professionnelles");


let adresseEmailPro = adresseEmail.filter(mail => !mail.includes('gmail'));
console.log(adresseEmailPro);

//Lister toutes les adresses de messageries privées
console.log("Lister toutes les adresses de messageries privées");

let adresseEmailPrivee = adresseEmail.filter(mail => mail.includes('gmail'));
console.log(adresseEmailPrivee)


//Trouver le nombre des mots
console.log("Trouver le nombre des mots");



motIgnores = "à,le,une,est,qui,un,aussi,je,qui,mais,et,de,tout,mon,par,d\'un";
motIgnores = motIgnores.split(',')


nombreDesMots = tableauDesMots.filter(mot => !(motIgnores.includes(mot) || numerosTelephones.includes(mot) || adresseEmail.includes(mot)) );
console.log(nombreDesMots.length);