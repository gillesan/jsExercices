console.log("exe ajax");
console.log("********");

var xhr = new XMLHttpRequest();


var val1 = encodeURIComponent("ma valeur préférée");
var val2 = encodeURIComponent("& mon autre valeur");
var url = 'http://localhost/lieux.php?p1=' + val1 + '&p2=' + val2;

xhr.open('GET', url);

xhr.send(null);


xhr.onreadystatechange = function () {
    switch (xhr.readyState) {
        case xhr.LOADING:
            console.log("Données en cours de réception");
            break;
        case xhr.DONE:
            console.log("Données bien reçues");
            break;
    }
};

xhr.onreadystatechange = function () {
    switch (xhr.readyState) {
        case xhr.LOADING:
            console.log("Données en cours de réception");
            break;
        case xhr.DONE:
            if (xhr.status == 200) {
                console.log("Données bien reçues");
                var datas = JSON.parse(xhr.responseText); // Si datas JSON
                
            } else {
                console.log(xhr.statusText);
            }
            break;
    }
};


