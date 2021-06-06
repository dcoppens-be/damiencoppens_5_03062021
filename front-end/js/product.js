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
        localStorage.setItem('currentProductQuantity',event.target.value);
        console.log(localStorage.getItem('currentProductQuantity'));
    }
});