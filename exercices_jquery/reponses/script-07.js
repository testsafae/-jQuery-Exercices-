//  Chemin relatif : reponses/script-08.js

var topp = $(".box").offset().top - $(".box").parent().offset().top
var left = $(".box").offset().left - $(".box").parent().offset().left

$(document).keydown(event => {
    if (event.shiftKey) {
        switch (event.which) {
            case 37: console.log("left", left);
                left -= 10;
                $(".box").css("left", left + "px");
                ; break;
            case 38: console.log("up", topp);
                topp -= 10;
                $(".box").css("top", topp + "px");
                ; break;
            case 39: console.log("right", left);
                left += 10;
                $(".box").css("left", left + "px");
                ; break;
            case 40: console.log("down", topp);
                topp += 10;
                $(".box").css("top", topp + "px");
                break;
        }
    }
});


