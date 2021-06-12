let controlPanel=[];

/*localStorage.clear();*/

console.log("panel   " + localStorage.getItem('panel'));

/*
localStorage.setItem('damien',"Je m'appelle Damien");
console.log(localStorage.getItem('damien'));
*/

/* Fonction de création d'une carte produit */
/* Paramètres: 
                - [NODE] noeud du parent où la carte doit être ajoutée
                - [STRING] nom du produit. Exemple: ...
                - [STRING] chemin de l'image
                - [STRING] description 
                - [STRING] lien pour le bouton */

function newCard(node, name, imageUrl, description, id, link) {
    let currentNode = node.appendChild(addElement('div', { class: 'col mb-4' }));
    currentNode = currentNode.appendChild(addElement('div', { class: 'card g-2 h-100' }));
    currentNode.appendChild(addElement('img', { class: 'card-img-top h-50', src: imageUrl, style:"object-fit:cover;" }));
    let entete = currentNode.appendChild(addElement('h3', { class: 'card-header text-center' }));
    entete.textContent = name;
    
    let bodyNode = currentNode.appendChild(addElement('div', { class: 'card-body' }));
    /* let titre = bodyNode.appendChild(addElement('h3', { class: 'card-title' }));
    titre.textContent = name; */
    let produit = bodyNode.appendChild(addElement('p', { class: 'card-text text-justify' }));
    produit.textContent = description;
    let lien = bodyNode.appendChild(addElement('a', { class: 'btn btn-primary stretched-link', role: 'button', href: link }));
    lien.textContent = "Détails du produit";

    let footerNode = currentNode.appendChild(addElement('div', { class: 'card-footer' }));
    footerNode.textContent = id;
}


        fetch(url)
        .then(function(response){
            if(response.ok){
                return response.json();
            }
        })
        .then(function(donnees){
            
            /*
            console.log(donnees);
            console.log(donnees.length);
            */

            /* let controlPanel=[]; */
            for(let i in donnees){
                /*topProducts[donnees[i].name]=donnees[i]._id;*/
                
                /*
                newCard(document.getElementById('products'),donnees[i].name,donnees[i].imageUrl,donnees[i].description,donnees[i]._id, "pages/product.html"+"?"+donnees[i]._id );
                */
                newCard(document.getElementById('products'),donnees[i].name,donnees[i].imageUrl,donnees[i].description,donnees[i]._id, "product.html"+"?"+donnees[i]._id );
                controlPanel[i]={_id:donnees[i]._id, name:donnees[i].name};

                /*
                if (localStorage.getItem('panel')){
                    console.log('Debut IF');

                    controlPanel[i]={_id:donnees[i]._id, name:donnees[i].name};
                    console.log("controlPanel" + controlPanel)
                    console.log("Length of controlPanel" + controlPanel.length)
                    localStorage.setItem('panel',JSON.stringify(controlPanel));

                    console.log(localStorage.getItem('panel'));
                    console.log(JSON.parse(localStorage.getItem('panel')));
                    console.log('Ici, commence les choses sérieuses')
                    let tes=JSON.parse(localStorage.getItem('panel')).push({_id:donnees[i]._id, name:donnees[i].name});
                    console.log(tes);
                    let test=[JSON.parse(localStorage.getItem('panel'))[0], JSON.parse(localStorage.getItem('panel'))[1],{_id:donnees[i]._id, name:donnees[i].name} ]
                    console.log(test);

                    localStorage.setItem('panel0',JSON.stringify(test));
                }
                else{
                    controlPanel[i]={_id:donnees[i]._id, name:donnees[i].name};
                    console.log("controlPanel" + i);
                    localStorage.setItem('panel',JSON.stringify(controlPanel));
   

                    console.log('Debut ELSE');
                    console.log(donnees[i]._id);
                    console.log(JSON.stringify(donnees[i]._id));
                    
                    localStorage.setItem('pan',JSON.stringify({_id : donnees[i]._id}));
                    console.log(localStorage.getItem('pan'));
                    console.log(JSON.parse(localStorage.getItem('pan')));
                    console.log(JSON.parse(localStorage.getItem('pan'))._id);

                    localStorage.setItem('el',JSON.stringify({name : donnees[i].name}));
                    console.log(localStorage.getItem('el'));
                    console.log(JSON.parse(localStorage.getItem('el')));
                    console.log(JSON.parse(localStorage.getItem('el')).name);
                    
                    localStorage.setItem('panel0',JSON.stringify([{_id:donnees[i]._id, name:donnees[i].name},{_id:donnees[i]._id, name:donnees[i].name}]));
                }
                console.log(localStorage.getItem('panel'));
                console.log(localStorage.getItem('panel')[0]);
                console.log(localStorage.getItem('panel')[1]);
                console.log(JSON.parse(localStorage.getItem('panel')));
                console.log(JSON.parse(localStorage.getItem('panel'))[0]);
                console.log(JSON.parse(localStorage.getItem('panel'))[0]._id);
                console.log(JSON.parse(localStorage.getItem('panel'))[0].name);
                console.log(JSON.parse(localStorage.getItem('panel'))[1]);

                */

            }
            localStorage.setItem('panel',JSON.stringify(controlPanel));
            console.log("panel   " + localStorage.getItem('panel'));
            console.log(JSON.parse(localStorage.getItem('panel')));
            localStorage.colorSetting = '#a4509b';
            console.log("localStorage   " + localStorage.colorSetting);

        })
        .catch(function(error){
            alert("Problème de récupération des données");
        })

console.log("panel   " + localStorage.getItem('panel'));