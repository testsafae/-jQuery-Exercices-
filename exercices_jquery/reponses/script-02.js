//  chemin relatif : reponses/script-02.js

let divs = $("#ce div")
let i = 0;
var l = divs.length

function show() {
    $(divs[i]).show(200);
    i++;
    if (i < l) setTimeout(show, 200);
    else i = 0;
}

(function hide() {
    $(divs[i]).hide(200);
    i++;
    if (i < l) setTimeout(hide, 200);
    else {
        i = 0;
        show();
        console.log("show", i);
    }
})()

