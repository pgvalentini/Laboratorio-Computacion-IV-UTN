function ingresar(e){
    e.preventDefault();
    var usuario = document.getElementById('usuario').value;
    var pass = document.getElementById('clave').value;
    
    var mensaje = 
        'HTTP://168.194.207.98:8081/tp/login.php?user='+
        usuario + 
        '&pass=' + 
        pass;
        
        var jsonResultante = JSON.parse(get(mensaje));
        if(jsonResultante.respuesta == 'ERROR'){
            alert(jsonResultante.mje);
        }else{
            
            location.href = 'lista.html';
            alert(jsonResultante.mje);
        }
}

function get(url){
    var Httpreq = new XMLHttpRequest();
    Httpreq.open("GET",url,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}

function poblarLista(){
    var body = document.getElementsByTagName("body")[0];
    var tabla   = document.createElement("table");
    var tblBody = document.createElement("tbody");

    for(var i = 0; i < 1; i++){
        var hilera = document.createElement("tr");
        for(var j = 0; j < 5; j++){
            var celda = document.createElement("td");
            switch(j){
                case 0:
                    var textoCelda = document.createTextNode("Id");
                    break;
                case 1:
                    var textoCelda = document.createTextNode("Usuario");
                    break;
                case 2:
                    var textoCelda = document.createTextNode("Bloqueado");
                    break;
                case 3:
                    var textoCelda = document.createTextNode("Apellido");
                    break;
                case 4:
                    var textoCelda = document.createTextNode("Nombre");
                    break;
                default:
                    break;
            }
            
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
        }
        tblBody.appendChild(hilera);
    }

    var jsonResultante = JSON.parse(get("http://168.194.207.98:8081/tp/lista.php?action=BUSCAR"));
        
    for(var i = 0; i < jsonResultante.length; i++){
        var hilera = document.createElement("tr");
        var registros = Object.keys(jsonResultante[i]).length;
        for(var j = 0; j < registros; j++){
            var celda = document.createElement("td");

            var textoCelda = document.createTextNode(Object.values(jsonResultante[i])[j]);
            
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
        }
        if(Object.values(jsonResultante[i])[2] == 'Y'){
            hilera.style.backgroundColor ='#cef8c6';
        }else{
            hilera.style.backgroundColor ='#fd9f8b';
        }
        tblBody.appendChild(hilera);

    }
    

    tabla.appendChild(tblBody);
    body.appendChild(tabla);    
    tabla.setAttribute("border", "2");
}

function poblarListaFiltrada(e){
    e.preventDefault();
    //location.href = 'nuevaLista.html';
    var body = document.getElementsByTagName("body")[0];
    var link = document.getElementById("buscar").value;
    var hijo = document.getElementsByTagName("table")[0];
    body.removeChild(hijo);
    var tabla   = document.createElement("table");
    var tblBody = document.createElement("tbody");

    for(var i = 0; i < 1; i++){
        var hilera = document.createElement("tr");
        for(var j = 0; j < 7; j++){
            var celda = document.createElement("td");
            switch(j){
                case 0:
                    var textoCelda = document.createTextNode("Id");
                    break;
                case 1:
                    var textoCelda = document.createTextNode("Usuario");
                    break;
                case 2:
                    var textoCelda = document.createTextNode("Bloqueado");
                    break;
                case 3:
                    var textoCelda = document.createTextNode("Apellido");
                    break;
                case 4:
                    var textoCelda = document.createTextNode("Nombre");
                    break;
                case 5:
                    var textoCelda = document.createTextNode("Bloquear");
                    break;
                case 6:
                    var textoCelda = document.createTextNode("Desbloquear");
                    break;
                default:
                    break;
            }
            
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
        }
        
        tblBody.appendChild(hilera);
    }

    var jsonResultante = JSON.parse(get("http://168.194.207.98:8081/tp/lista.php?action=BUSCAR&usuario=" + link));
    
    if(Object.keys(jsonResultante).length == 0){
        alert("Su búsqueda no ha arrojado resultados");
    }

    for(var i = 0; i < jsonResultante.length; i++){
        var hilera = document.createElement("tr");
        var registros = Object.keys(jsonResultante[i]).length;
        for(var j = 0; j < registros + 2; j++){
            var celda = document.createElement("td");

            if(j < registros){
                var textoCelda = document.createTextNode(Object.values(jsonResultante[i])[j]);
            }else if (j == registros){
                var textoCelda = document.createElement("button");
                textoCelda.onclick = changeStatusUser(Object.values(jsonResultante[i])[0], 'Y');
                textoCelda.innerHTML = "Bloquear";
            }else if(j == registros + 1){
                var textoCelda = document.createElement("button");
                textoCelda.onclick = changeStatusUser(Object.values(jsonResultante[i])[0], 'N');
                textoCelda.innerHTML = "Desbloquear";
            }
            
            celda.appendChild(textoCelda);
            
            hilera.appendChild(celda);
        }
        
        if(Object.values(jsonResultante[i])[2] == 'Y'){
            hilera.style.backgroundColor ='#cef8c6';
        }else{
            hilera.style.backgroundColor ='#fd9f8b';
        }
        tblBody.appendChild(hilera);
    }
    

    tabla.appendChild(tblBody);
    body.appendChild(tabla);    
    tabla.setAttribute("border", "2");
}

function changeStatusUser(userId, bloqueado, listener){
    fetch('http://168.194.207.98:8081/tp/lista.php?action=BLOQUEAR&idUser='+userId+'&estado='+bloqueado)
        .then(res => {listener()}).catch(err =>{})
}