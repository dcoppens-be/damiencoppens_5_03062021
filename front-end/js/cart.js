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
    + "<td>" + "</td>"
    + "<td>" + oneTeddy.color + "</td>"
    + "<td>" + displayPrice(oneTeddy.price) + "</td>"
    + "<td>" + oneTeddy.quantity + "</td>"
    + "<td>" + displayPrice(oneTeddy.price*oneTeddy.quantity) + "</td>"
    + "</tr>";
    /*
    let lien = panelNode.appendChild(addElement('a', { class: 'list-group-item list-group-item-action', href: "product.html"+"?"+oneTeddy._id }));
    lien.textContent = oneTeddy.name;
    */
}