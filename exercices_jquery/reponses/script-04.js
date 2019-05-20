//  Chemin relatif : reponses/script-04.js
//  Chemin relatif : files/user.json

let table = $('<table cellpadding="8" width="100%" border="1" />')
    .append($("<th/>").text("EMAIL")).append($("<th/>").text("TOKEN"));

let users = $.getJSON("https://jquery.daaif.net/exercices/files/users.json");

users.done(_ => {
    $.each(users.responseJSON, (key, val) => {
        $("<tr/>").append($("<td/>").text(val["email"])).append($("<td/>").text(val["token"])).appendTo(table);
    })
    $(table).appendTo("#ce");
});






