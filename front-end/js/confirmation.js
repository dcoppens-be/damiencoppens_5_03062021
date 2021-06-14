fetch(url+'/'+'order',{
    method:'POST',
    headers:{'Accept':'application/json, text/plain, */*',
    'Content-type':'application/json'},
    body:JSON.stringify({contact:{firstName:'A',lastName:'B',address:'C',city:'D',email:'e@orinoco.fr'},products:['5be9c8541c9d440000665243']})
})
    .then(function(response){
        if(response.ok){
            return response.json();
            }
        })
        .then(function(value){
            console.log(value);
        })
        .catch(function(error){
            alert("Problème de récupération des données");
        });