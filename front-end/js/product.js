let product = {_id:"default",name:"default",price:0,color:"default",quantity:0};

let currentUnitPrice=0;
let currentQuantity=1;

function getProductIdFromUrl(){
    const iid=window.location.search.toString();
    /* CAS iid == null */

    /* console.log(window.location.search);
    console.log(window.location.search.toString()); */
    const id=iid.replace('?','');
    return id;
    /* console.log(id); */
}

const id = getProductIdFromUrl();

console.log(localStorage.getItem('damien'));

let panelNode = document.getElementById('panel');
console.log("panel   " + localStorage.getItem('panel'));
console.log(JSON.parse(localStorage.getItem('panel')));
console.log("localStorage   " + localStorage.colorSetting);
console.log("localStorage   " + localStorage.getItem('colorSetting'));
for (var i in JSON.parse(localStorage.getItem('panel')))
{    
    let oneTeddy=JSON.parse(localStorage.getItem('panel'))[i];
    let lien = panelNode.appendChild(addElement('a', { class: 'list-group-item list-group-item-action', href: "product.html"+"?"+oneTeddy._id }));
    lien.textContent = oneTeddy.name;
}

/* Fonction de réaction à l'événement modificiaction du choix de couleur par l'utilisateur */
/* Réaction: changement de l'item COLOR dans le localStorage*/
document.getElementById("colorChoice").addEventListener('change', (event) =>{
    event.preventDefault();
    event.stopPropagation();
    console.log(event.target.value);
    localStorage.setItem('color',event.target.value);
    console.log(localStorage.getItem('color'));

    console.log(product);
    product["color"]=event.target.value;
    console.log(product);
});

/* Fonction de réaction à l'événement modificiaction de la quatité par l'utilisateur */
/* Réaction: 
            - conservation de la valeur affichée à 0 si l'utilisateur essaye d'insérer une valeur négative
            - changement de l'item currentProductQuantity dans le localStorage */
document.getElementById("quantityChoice").addEventListener('change', (event) =>{
    event.preventDefault();
    event.stopPropagation();
    console.log(event.target.value);
    if (event.target.value < 0){
        document.getElementById("quantityChoice").value=0;
    } 
    else{
        currentQuantity=event.target.value;
        localStorage.setItem('currentProductQuantity',event.target.value);
        console.log(localStorage.getItem('currentProductQuantity'));
        document.getElementById('totalPrice').textContent=displayPrice(currentUnitPrice*currentQuantity)+' \u20AC';
    
        console.log(product);
        product["quantity"]=event.target.value;
        console.log(product);
    }
});

/* Fonction de réaction à l'événement CLICK du bouton d'ajout au panier */
/* Réaction: 
            - conservation de la valeur affichée à 0 si l'utilisateur essaye d'insérer une valeur négative
            - mise à jour de la quantité d'articles dans le localStorage 
            - affichage de la nouvelle quantité pour le badge associé au panier dans le menu navigation */
document.getElementById("addToCart").addEventListener('submit', function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (localStorage.getItem('cart')) {
        let newQuantity = localStorage.getItem(id) + localStorage.getItem('currentProductQuantity');
        localStorage.setItem(id, newQuantity);
        console.log(localStorage.getItem(id));
    }
    else {
        console.log(product);
        localStorage.setItem('cart', localStorage.getItem('currentProductQuantity'));
    }
});

fetch(url+'/'+id,{method:'GET'})
    .then(function(response){
        if(response.ok){
            return response.json();
            }
        })
        .then(function(value){
            console.log(value);

            currentUnitPrice=value.price;

            product["_id"]= value._id;
            product["name"]= value.name;
            product["price"]= value.price;

            document.title="L'ours " + value.name + " par Orinoco";
            /* document.getElementById("main").removeChild(document.querySelector("h1")); */
            document.getElementById("enImage").appendChild(addElement('img',{src: value.imageUrl,class:'img-fluid img-thumbnail'}));
    
                for (let i in value.colors){
                    let option = document.getElementById("colorChoice").appendChild(addElement('option',{value:value.colors[i]}));
                    option.textContent=value.colors[i];
                }
    
            document.getElementById('price').textContent=displayPrice(value.price)+' \u20AC';
            document.getElementById('totalPrice').textContent=displayPrice(value.price*document.getElementById("quantityChoice").value)+' \u20AC';
                
            localStorage.jf = "Je m'appelle Jean-Francois";
            console.log("JF   " + localStorage.jf);

            })
            .catch(function(error){
                alert("Problème de récupération des données");
            });

let testPanel=[];

fetch(url)
        .then(function(response){
            if(response.ok){
                return response.json();
            }
        })
        .then(function(value){

            let donnees = value;

            /* let controlPanel=[]; */
            for(let i in donnees){
                /*topProducts[donnees[i].name]=donnees[i]._id;*/
                
                testPanel[i]={_id:donnees[i]._id, name:donnees[i].name};
            }
            localStorage.setItem('testPanel',JSON.stringify(testPanel));
            console.log("testPanel   " + localStorage.getItem('testPanel'));
            console.log(JSON.parse(localStorage.getItem('testPanel')));

        })
        .catch(function(error){
            alert("Problème de récupération des données");
        })

console.log("testPanel   " + localStorage.getItem('testPanel'));