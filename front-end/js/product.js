let currentUnitPrice=0;
let currentQuantity=1;

console.log(topProducts);

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


/* Fonction de réaction à l'événement modificiaction du choix de couleur par l'utilisateur */
/* Réaction: changement de l'item COLOR dans le localStorage*/
document.getElementById("colorChoice").addEventListener('change', (event) =>{
    console.log(event.target.value);
    localStorage.setItem('color',event.target.value);
    console.log(localStorage.getItem('color'));
});

/* Fonction de réaction à l'événement modificiaction de la quatité par l'utilisateur */
/* Réaction: 
            - conservation de la valeur affichée à 0 si l'utilisateur essaye d'insérer une valeur négative
            - changement de l'item currentProductQuantity dans le localStorage */
document.getElementById("quantityChoice").addEventListener('change', (event) =>{
    console.log(event.target.value);
    if (event.target.value < 0){
        document.getElementById("quantityChoice").value=0;
    } 
    else{
        currentQuantity=event.target.value;
        localStorage.setItem('currentProductQuantity',event.target.value);
        console.log(localStorage.getItem('currentProductQuantity'));
        document.getElementById('totalPrice').textContent=displayPrice(currentUnitPrice*currentQuantity)+' \u20AC';
    }
});

/* Fonction de réaction à l'événement CLICK du bouton d'ajout au panier */
/* Réaction: 
            - conservation de la valeur affichée à 0 si l'utilisateur essaye d'insérer une valeur négative
            - mise à jour de la quantité d'articles dans le localStorage 
            - affichage de la nouvelle quantité pour le badge associé au panier dans le menu navigation */


fetch(url+'/'+id,{method:'GET'})
    .then(function(response){
        if(response.ok){
            return response.json();
            }
        })
        .then(function(value){
            console.log(value);

            currentUnitPrice=value.price;

            document.title="L'ours " + value.name + " par Orinoco";
            /* document.getElementById("main").removeChild(document.querySelector("h1")); */
            document.getElementById("enImage").appendChild(addElement('img',{src: value.imageUrl,class:'img-fluid img-thumbnail'}));
    
                for (let i in value.colors){
                    let option = document.getElementById("colorChoice").appendChild(addElement('option',{value:value.colors[i]}));
                    option.textContent=value.colors[i];
                }
    
                document.getElementById('price').textContent=displayPrice(value.price)+' \u20AC';
                document.getElementById('totalPrice').textContent=displayPrice(value.price*document.getElementById("quantityChoice").value)+' \u20AC';
                
            })
            .catch(function(error){
                alert("Problème de récupération des données");
            })