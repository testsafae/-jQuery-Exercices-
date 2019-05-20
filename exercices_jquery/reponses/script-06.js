//  Chemin relatif : reponses/script-06.js
// String.fromCharCode() permet de récupérer le caractère à partir du code

$("#f1").on('keypress', event => {
    console.log(event);
})

$("#f1").on("blur", event => {
    $("div#out").text(event.target.value);
})

$("#f2").on("blur", event => {
    let keys = event.target.value.split('');
    let tab = [];
    $("div#out").text('');
    $.each(keys,(index, key) => {
        if(key <= '9'  && key >= '0'){
            tab.push(key);
        }
    })
    tab = tab.slice(0, tab.length - tab.length % 3 );
    $("div#out").text(tab.join(""));
})

