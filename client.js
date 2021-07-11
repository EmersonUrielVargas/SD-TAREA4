const btReg = document.getElementById("registrar");
const asid = document.getElementById("asid");
btReg.addEventListener("click", sendData,false);
getData();


function getData(){
    var server = new XMLHttpRequest();
    server.onreadystatechange = function(){
        if(this.readyState == 4 && this.status ==200){
            let data = JSON.parse(server.responseText) 
            showData(data); 
        }
    };
    server.open("GET", "http://localhost:5000/", true);
    server.send();
}


function sendData(){
    var server = new XMLHttpRequest();
    server.open("POST", "http://localhost:5000/", true);
    server.setRequestHeader('Content-type','application/json');
    var name = document.getElementById("nameP").value
    var price = document.getElementById("priceP").value
    let product = {'name':name,'price':price}
    server.send(JSON.stringify(product));
    server.onreadystatechange = function(){
        if(this.readyState == 4 && this.status ==200){
            let data = JSON.parse(server.responseText) 
            showData(data); 
        }
    }
}

function showData(data){
    for(var i = 0; i < data.length;i++){
        var name= document.createElement('H3');
        name.innerHTML = "Producto: "+data[i].name
        asid.appendChild(name);
        var price= document.createElement('H3');
        price.innerHTML = "Precio : "+data[i].price
        asid.appendChild(price);
    } 
}

