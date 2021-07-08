let data = ""
const btReg = document.getElementById("registrar");
const asid = document.getElementById("asid");
btReg.addEventListener("click", sendData,false);
getData();


function getData(){
    var server = new XMLHttpRequest();
    server.onreadystatechange = function(){
        if(this.readyState == 4 && this.status ==200){
            data = JSON.parse(server.responseText)
            for(var i = 0; i < data.length;i++){
                var name= document.createElement('H3');
                name.innerHTML = "Producto: "+data[i].name
                asid.appendChild(name);
                var price= document.createElement('H3');
                price.innerHTML = "Precio : "+data[i].price
                asid.appendChild(price);
            }  
        }
    };
    server.open("GET", "http://localhost:5000/", true);
    server.send();
}

function addData(){
    var name = document.getElementById("nameP").value
    var price = document.getElementById("priceP").value
    data.push({"name": name, "price" : price})
}

function sendData(){
    addData();
    var name= document.createElement('H3');
    name.innerHTML = "Producto: "+data[data.length -1].name
    asid.appendChild(name);
    var price= document.createElement('H3');
    price.innerHTML = "Precio : "+data[data.length -1].price
    asid.appendChild(price); 
}

