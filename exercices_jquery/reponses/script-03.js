//  Chemin relatif : reponses/script-03.js
//  Chemin relatif : files/user.json

$.get('https://jquery.daaif.net/exercices/files/users.json', {}, 'txt').
    complete(data => {
        let pre = $('<pre>')
        $(pre).addClass('language-javascript');
        let code = $('<code>');
        $(code).html(pre);
        $(pre).html(data.responseText);
        console.log(data.responseText);
        $('#ce').html(pre);
        Prism.highlightAll();
    });

