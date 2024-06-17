
firebase.database().ref("temperatura").limitToLast(1)
.on("child_added",function(s) {
        $('#temperatura').empty();
        $('#vtemperatura').empty();
        user = s.val().estado;
        temp=s.val().vtemperatura
        console.log(s.value)
        $('#temperatura').append(user)
        $('#vtemperatura').append(temp)
    })
firebase.database().ref("puerta").limitToLast(1)
.on("child_added",function(s) {
        $('#puerta').empty();
        var user = s.val().estado;
        $('#puerta').append(user);
    })

firebase.database().ref("ventana").limitToLast(1)
.on("child_added",function(s) {
        $('#ventana').empty();
        var user = s.val().estado;
        $('#ventana').append(user);
    })

firebase.database().ref("luz").limitToLast(1)
.on("child_added",function(s) {
        $('#luz').empty();
        $('#dluz').empty();
        var user = s.val().estado;
        distancia=s.val().dluz;
        $('#luz').append(user);
        $('#dluz').append(distancia);
    })
    

$('#temperatura').click(function(){
    firebase.database().ref("temperatura").limitToLast(1)
    .once("child_added",(s) => {
            var user = s.val().estado;
            temp=s.val().vtemperatura;
            var hoy=new Date();
            var hora=hoy.getHours()+':'+hoy.getMinutes()+':'+hoy.getSeconds();
            if (user == "Apagar") {
                firebase.database().ref("temperatura")
                    .push({
                        estado: "Prender",
                        apagado:hora,
                        vtemperatura:temp
                    });     
            }
            else if (user == "Prender") {
                firebase.database().ref("temperatura")
                    .push({
                        estado: "Apagar",
                        prendido:hora,
                        vtemperatura:temp
                        
                    });
            }
          
        })
});

$('#luz').click(function(){
    firebase.database().ref("luz").limitToLast(1)
    .once("child_added",(s) => {
            var user = s.val().estado;
            distancia=s.val().dluz;
            console.log(user);
            var hoy=new Date();
            var hora=hoy.getHours()+':'+hoy.getMinutes()+':'+hoy.getSeconds();
            console.log(hora);
            if (user == "Apagar") {
                firebase.database().ref("luz")
                    .push({
                        estado: "Prender",
                        apagado:hora,
                        dluz:distancia
                    });     
            }
            else if (user == "Prender") {
                firebase.database().ref("luz")
                    .push({
                        estado: "Apagar",
                        prendido:hora,
                        dluz:distancia
                        
                    });
            }
          
        })
});

$('#puerta').click(function(){
    firebase.database().ref("puerta").limitToLast(1)
    .once("child_added",(s) => {
            var user = s.val().estado;
            console.log(user);
            var hoy=new Date();
            var hora=hoy.getHours()+':'+hoy.getMinutes()+':'+hoy.getSeconds();
            console.log(hora);
            if (user == "Cerrar") {
                firebase.database().ref("puerta")
                    .push({
                        estado: "Abrir",
                        cerrado:hora
                    });     
            }
            else if (user == "Abrir") {
                firebase.database().ref("puerta")
                    .push({
                        estado: "Cerrar",
                        abierto:hora
                        
                    });
            }
          
        })
});

$('#ventana').click(function(){
    firebase.database().ref("ventana").limitToLast(1)
    .once("child_added",(s) => {
            var user = s.val().estado;
            console.log(user);
            var hoy=new Date();
            var hora=hoy.getHours()+':'+hoy.getMinutes()+':'+hoy.getSeconds();
            console.log(hora);
            if (user == "Cerrar") {
                firebase.database().ref("ventana")
                    .push({
                        estado: "Abrir",
                        cerrado:hora
                    });     
            }
            else if (user == "Abrir") {
                firebase.database().ref("ventana")
                    .push({
                        estado: "Cerrar",
                        abierto:hora
                        
                    });
            }
          
        })
});

