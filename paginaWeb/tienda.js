function buscarEnGoogle() {
    var query = document.querySelector('#query').value;
    var url = `https://www.google.com/search?q=${query}`;
    window.location.href = url;
}

/*EL BLOQUE DEBAJO SE PUEDE REPETIR PARA ARMAR MÁS TARJETAS*/

document.addEventListener("DOMContentLoaded", function() {
    var textoJoyeria1 = document.getElementById("textoJoyeria1");
    var valor1 = "Corazón precioso de Ruby y Plata \n Valor: $19.000";
    textoJoyeria1.textContent = valor1;

    var textoJoyeria2 = document.getElementById("textoJoyeria2");
    var valor2 = "Planeta de oro y marmol \ Valor: $29.000";
    textoJoyeria2.textContent = valor2;

    var textoJoyeria3 = document.getElementById("textoJoyeria3");
    var valor3 = "Punica granatum de oro y gemas \n Valor: $90.300";
    textoJoyeria3.textContent = valor3;

    var textoJoyeria4 = document.getElementById("textoJoyeria4");
    var valor4 = "Nuez de oro \n Valor: $59.000";
    textoJoyeria4.textContent = valor4;

    var textoJoyeria5 = document.getElementById("textoJoyeria5");
    var valor5 = " \n Valor: $19.000";
    textoJoyeria5.textContent = valor5;

    var textoJoyeria6 = document.getElementById("textoJoyeria6");
    var valor6 = "Axolote de Jade Blanco \n Valor: $199.100";
    textoJoyeria6.textContent = valor6;

    var textoJoyeria7 = document.getElementById("textoJoyeria7");
    var valor7 = "Casita misteriosa de plata \n Valor: $29.300";
    textoJoyeria7.textContent = valor7;

    var textoJoyeria8 = document.getElementById("textoJoyeria8");
    var valor8 = "Colmena de cristal \n Valor: $15.000";
    textoJoyeria8.textContent = valor8;

    var textoJoyeria9 = document.getElementById("textoJoyeria9");
    var valor9 = "Sol de oro y cristal \n Valor: $79.000";
    textoJoyeria9.textContent = valor9;

    var textoJoyeria10 = document.getElementById("textoJoyeria10");
    var valor10 = "Anillo de oro y lapislazuli \n Valor: $179.000";
    textoJoyeria10.textContent = valor10;

    var textoJoyeria11 = document.getElementById("textoJoyeria11");
    var valor11 = "Anillo de oro y esmeralda \n Valor: $99.000";
    textoJoyeria11.textContent = valor11

    var textoJoyeria12 = document.getElementById("textoJoyeria12");
    var valor12 = "Collar estrella de oro y piedras \n Valor: $180.000";
    textoJoyeria12.textContent = valor12;
});

