//  Chemin relatif : reponses/script-05.js


let last = $('td[colspan="3"]').parent();

let trs = $('tr:first').nextUntil(last, "tr");

let result = 0;

$(trs).each((key, val) => {
    let tds = $(val).find('td');
    $(tds[3]).text(+$(tds[1]).text() * +$(tds[2]).text());
    result += +$(tds[3]).text();
}).promise().done(function () { $(last).find("td:last").text(result) });











