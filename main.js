main();

function main(){
    $("#container2").hide();


   $("#login").on("click", function(){
            alert(" Clave: " + $("#clave").val() + " Usuario: " + $("#usuario").val());
   })


    
    $("#container1").on("click", function(){
        ocultaTablero("#container1");
        muestraTablero("#container2");
    })
    
    $("#container2").on("click", function(){
        ocultaTablero("#container2");
        muestraTablero("#container1");
    })

}

function ocultaTablero(div){
    $(div).hide();
}

function muestraTablero(div){
    $(div).show();
}