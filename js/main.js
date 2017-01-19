
var pays_select = document.getElementById('pays_select');
var regions_select = document.getElementById('regions_select');
var communes_select = document.getElementById('communes_select');
var sendButton = document.getElementById('sendButton');

pays_select.addEventListener('click', ajax0);
regions_select.addEventListener('click', ajax0);
communes_select.addEventListener('click', ajax0);
sendButton.addEventListener('click', ajax1);





function ajax0() {
    var pays_selectValue = document.getElementById('pays_select').value;
    var regions_selectValue = document.getElementById('regions_select').value;
    var communes_selectValue = document.getElementById('communes_select').value;
    console.log("pays_selectValue : "+ pays_selectValue);
    //var results = document.getElementById('result_' + pays_selectValue);
    var xhr = new XMLHttpRequest();
    
    var pays = encodeURIComponent(pays_selectValue);
    var regions = encodeURIComponent(regions_selectValue);
    var communes = encodeURIComponent(communes_selectValue);
    var url = "";
    if (pays != "") {
        if (regions!= "") {
            if (communes!= "") {
                url = 'lieux.php?pays=' + pays + '&regions=' + regions + '&communes=' + communes;
            }else {
                url = 'lieux.php?pays=' + pays + '&regions=' + regions;
            }
        }else {
            url = 'lieux.php?pays=' + pays;
        }
    }else{
        url = 'lieux.php';
    }
    
    console.log(url);

    xhr.open(
            'GET',
            url
            );

    xhr.onreadystatechange = function () {
        switch (xhr.readyState) {
            case xhr.LOADING:
                console.log("En cours de réception");
                break;
            case xhr.DONE:
                switch (xhr.status) {
                    case 200:
                        var datas = JSON.parse(xhr.responseText);
                        console.log(datas);
                        results.textContent = datas;
                        break;
                    default:
                        console.error(xhr.status + " : " + xhr.statusText);
                        break;
                }
                break;

            default:
                console.log(xhr.readyState);
                break;
        }
    };

    xhr.send(null);
}



function ajax1() {
    var textField = document.getElementById('textField').value;
    console.log("textField valeur : " + textField);

    var results = document.getElementById('result_1');
    var xhr = new XMLHttpRequest();

    var action = encodeURIComponent(textField);
    var url = 'ajax.php?action=' + action;
    console.log(url);
    
    xhr.open(
            'GET',
            url
            );

    xhr.onreadystatechange = function () {
        switch (xhr.readyState) {
            case xhr.LOADING:
                console.log("En cours de réception");
                break;
            case xhr.DONE:
                switch (xhr.status) {
                    case 200:
                        var datas = JSON.parse(xhr.responseText);
                        console.log('data JASON recue : ' + datas);
                        results.textContent = datas;
                        break;
                    default:
                        console.error(xhr.status + " : " + xhr.statusText);
                        break;
                }
                break;

            default:
                console.log(xhr.readyState);
                break;
        }
    };

    xhr.send(null);
}







/*
 
 
 
 var xhr = new XMLHttpRequest();
 
 
 
 
 //http://localhost/www/jsExercice/lieux.php?pays='belgique'
 //http://localhost/www/jsExercice/ajax.php?pays='belgique'
 
 
 //?p1=' + val1 + '&p2=' + val2;
 
 
 //xhr.open('GET', url);
 
 //xhr.send(null);
 
 
 xhr.onreadystatechange = function () {
 switch (xhr.readyState) {
 case xhr.LOADING:
 console.log("Données en cours de réception");
 break;
 case xhr.DONE:
 if (xhr.status == 200) {
 console.log("Données bien reçues");
 var datas = JSON.parse(xhr.responseText); // Si datas JSON
 console.log("le JASON recu est : "+datas);
 } else {
 console.log(xhr.statusText);
 }
 break;
 }
 };
 
 */
