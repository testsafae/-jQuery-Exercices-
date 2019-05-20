//  chemin relatif : reponses/script-01.js
// 

// sélectionner la première "div" dans l'element "div" avec l'attribuer "id" egale a "ce"
// et apre changer son coleur de text a le rouge
// on a passe a la fonction "css"  propriete "color" et la valeur "red"
$("#ce div:first").css("color","red");

// la fonction "append" permettre d'ajouter un élément à la fine de l'élément sélectionner
// la fonction "clone", cree une copier a partir de l'element selectione et return le
$("#ce").append($("#ce div:first").clone());

// la fonction "prepend" permetter de ajouter un element a le debut de l;élément sélectionner
$("#ce").prepend($("#ce div:last"));

// on a cree un nouveau "div", et ajouter a la fin de "ce" avec la fonction "appendTo"
// et apre met dans cet element le nombre des "div"s qu'ils sont dans "ce"
// ".length" il contien le nombre des element de tableau qu'il selectione
$("<div>").appendTo("#ce").text($("#ce div").length);

// on a parcourir tous les enfants de l'element "ce", et ajouter ou debut de chaqu'un le numéro de 
// l'index avec une espace
$("#ce div").each((ind, el) => $(el).prepend(ind+" "))
