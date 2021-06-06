const url="http://localhost:3000/api/teddies";

/* Fonction de création d'élément HTLM */
/* Paramètres: 
                - [STRING] nom de l'élément à créer. Exemple: ...
                - [OBJET de STRING] paires nom de l'attribut et valeur(s)*/
function addElement(tagName,attributes){
    const element = document.createElement(tagName);

    for (var i in attributes){
        element.setAttribute(i,attributes[i]);
    }

    return element;
}

/* Fonction de transformation d'un prix en centimes à un prix en unité avec 2 chiffres après la virgule */
/* Paramètres: 
                - [NOMBRE] Prix en centimes */
function displayPrice(priceInCents){
    let price=priceInCents/100;
    return price.toFixed(2).replace('.',',');
}