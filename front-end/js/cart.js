let contact={firstName:'.',lastName:'.',address:'..',city:'.',email:'a1.2-3_4@bc.de'};
let products=[];
let totalPrice=0;
let colorsCheck={};

/*
console.log("JF   " + localStorage.jf);
console.log("testPanel   " + localStorage.getItem('testPanel'));
*/

for (var i in JSON.parse(localStorage.getItem('cart')))
{    
    let oneTeddy=JSON.parse(localStorage.getItem('cart'))[i];

    document.getElementById('productsList').innerHTML += 
    "<tr>"
    + "<td>" + oneTeddy.name + "</td>"
    + "<td class=\"d-none d-md-block\">" + "." + "</td>"
    + "<td>" + oneTeddy.color + "</td>"
    + "<td class=\"d-none d-md-block\">" + displayPrice(oneTeddy.price) + "</td>"
    + "<td>" + oneTeddy.quantity + "</td>"
    + "<td class=\"d-none d-sm-block\">" + displayPrice(oneTeddy.price*oneTeddy.quantity) + "</td>"
    + "</tr>";

    let coloring;

    switch (oneTeddy.color){
    case 'Dark brown':
        coloring="Saddlebrown";
    break;
    case 'Pale brown':
        coloring="Burlywood";
    break;

    default:
            coloring=oneTeddy.color;
    }

    if (oneTeddy.name in colorsCheck){
        
        colorsCheck[oneTeddy.name].push(oneTeddy.color);

        
        

        document.getElementById('figcaption-'+oneTeddy.name).innerHTML += "<span class=\"badge border\" style=\"background-color:"+coloring+";\"> </span>";
    
    }
    else {

        document.getElementById('productsPicture').innerHTML +=
            "<div class=\"col-4\"> <figure>"
            + "<img src=\"" + oneTeddy.imageUrl + "\" class=\"img-fluid img-thumbnail figure-img\""
            + "</figure> <figcaption id=\"figcaption-" + oneTeddy.name + "\">" + oneTeddy.name + " <span class=\"badge border\" style=\"background-color:" + coloring + ";\"> </span></figcaption> </div>";


        colorsCheck[oneTeddy.name] = ["<span class=\"badge\" style=\"background-color:" + oneTeddy.color + ";\"> </span>"];

    }

    console.log(colorsCheck);

    
    totalPrice+=oneTeddy.price*oneTeddy.quantity;
    /*
    let lien = panelNode.appendChild(addElement('a', { class: 'list-group-item list-group-item-action', href: "product.html"+"?"+oneTeddy._id }));
    lien.textContent = oneTeddy.name;
    */

    for (let i = 0; i < oneTeddy.quantity; i++) {
        console.log(oneTeddy._id);
        products.push(oneTeddy._id);
        console.log(products);
    }
}

document.getElementById('cartPrice').textContent=displayPrice(totalPrice);

/*Fonction enlenvant le comportement par défaut du formulaire*/
document.getElementById("cartForm").addEventListener('submit',function(e){
    e.preventDefault();
})

/* Fonction de réaction à chaque modification de l'entrée EMAIL, permettant de surveiller et de donner une indication à l'utilisateur sur le champ qu'il remplit */
/* Réaction: 
            - modification de la classe du champ pour indiquer que l'entrée actuelle NE correspond PAS au modèle de la réponse attendue
            - modification de la classe du champ pour indiquer que l'entrée actuelle correspond au modèle de la réponse attednue */
            document.getElementById("city").addEventListener('input', (event) =>{
                event.preventDefault();
                event.stopPropagation();

                let mask= new RegExp('^[a-z]{1,}(([ ]*|[-]?)?[a-z]{1,})*$','i');

                if (mask.test(event.target.value))
                {
                    document.getElementById("city").classList.remove("bg-warning");
                    document.getElementById("city").classList.add("bg-success");
                }
                else
                {
                    document.getElementById("city").classList.remove("bg-success");
                    document.getElementById("city").classList.add("bg-warning");
                }
                
            });

/* Fonction de réaction à chaque modification de l'entrée EMAIL, permettant de surveiller et de donner une indication à l'utilisateur sur le champ qu'il remplit */
/* Réaction: 
            - modification de la classe du champ pour indiquer que l'entrée actuelle NE correspond PAS au modèle de la réponse attendue
            - modification de la classe du champ pour indiquer que l'entrée actuelle correspond au modèle de la réponse attednue */
document.getElementById("email").addEventListener('input', (event) =>{
                event.preventDefault();
                event.stopPropagation();

                let mask= new RegExp('^[ ]*[a-z0-9_\.\-]+@{1}[a-z0-9_\.\-]{2,}\.[a-z]{2,4}[ ]*$');
            
                console.log("Je teste");

                if (mask.test(event.target.value))
                {
                    console.log("Eh oh");
                    document.getElementById("email").classList.remove("is-invalid");
                    document.getElementById("email").classList.add("is-valid");
                    document.getElementById("email").classList.remove("bg-warning");
                    /*document.getElementById("email").classList.add("bg-success");*/
                }
                else
                {
                    console.log(event.target.value);
                    document.getElementById("email").classList.remove("is-valid");
                    document.getElementById("email").classList.add("is-invalid");
                    document.getElementById("email").classList.remove("bg-success");
                    document.getElementById("email").classList.add("bg-warning");
                }
                
            });
            
            
/* Fonction de réaction à l'événement CLICK du bouton d'envoi de la commande */
/* Réaction: 
            - vérification que tous les champs obligatoires ont été remplis par l'utilisateur
            - traitement des entrées de l'utilisateur et sauvegarde dans l'objet contact au format attendu par l'API
            - traitement du contenu de la commande et sauvegarde dans le tableau products au format attendu par l'API
            - communication avec l'API et accès à la page de confirmation */
            document.getElementById("order").addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();

                if (document.getElementById("cartForm").checkValidity())
                {
                    console.log("Les entrées du formulaires sont correctes et peuvent être traitées");
                }
                else {
                    console.log("Formulaire invalide");
                }
            
                document.getElementById("cartForm").classList.add("was-validated");
            
            });