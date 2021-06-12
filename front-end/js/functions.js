const url="http://localhost:3000/api/teddies";

displayNumberOfArticles();

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

/* Fonction servant à afficher le nombre d'articles dans le panie */

function displayNumberOfArticles(){
/*
    console.log("Nombre d'articles à afficher:" + localStorage.getItem('numberOfArticles'));
    document.getElementById("nav-cart").innerHTML='<i class="fas fa-shopping-cart"></i> <span class="badge bg-secondary">'+ localStorage.getItem('numberOfArticles') +'</span>';
*/

if (localStorage.getItem('numberOfArticles')){
    console.log("Nombre d'articles à afficher:" + localStorage.getItem('numberOfArticles'));
    document.getElementById("nav-cart").innerHTML='<i class="fas fa-shopping-cart"></i> <span class="badge bg-secondary">'+ JSON.parse(localStorage.getItem('numberOfArticles')) +'</span>';
}
else{
    console.log('Pas encore de panier');
    document.getElementById("nav-cart").innerHTML='<i class="fas fa-shopping-cart"></i> <span class="badge bg-secondary">0</span>';

    /*
    console.log("Nombre d'articles à afficher:" + localStorage.getItem('numberOfArticles'));
    document.getElementById("nav-cart").insertAdjacentHTML('beforeend','<span class="badge bg-secondary">0</span>')
    */
}

}

/* Fonction de transformation d'un prix en centimes à un prix en unité avec 2 chiffres après la virgule */
/* Paramètres: 
                - [NOMBRE] Prix en centimes */
function displayPrice(priceInCents){
    let price=priceInCents/100;
    return price.toFixed(2).replace('.',',');
}

/* Fonction ...*/
function emptyCart(){
    console.log('Vidons le panier');
    localStorage.removeItem('numberOfArticles');
    displayNumberOfArticles();
}

document.getElementById('cross').addEventListener('click',function(){
    console.log('Vidons le panier');
    localStorage.removeItem('numberOfArticles');
    displayNumberOfArticles();
});



