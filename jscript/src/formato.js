function nombre(){
    var mensaje;
    var opcion = prompt("Introduzca su nombre:", "");
    
    if (opcion == null || opcion == "") {
        mensaje = "Has cancelado o introducido el nombre vacío";
    }else {
        mensaje = "Hola " + opcion;
    }
        alert(mensaje);
    }
    
function edad(){
    var mensaje;
    var ed=prompt("Ingresa tu edad actual","");
    ed=parseInt(ed);
    if(ed<18){
        mensaje = "Aun no tienes la edad para conducir";
    }else{
        mensaje = "Ya tienes la edad para conducir";
    }
    alert(mensaje);
}

function fibonacci(){
    var mensaje;
    var opcion = prompt("Introduzca hasta que posicion desea llegar:", "");
	var fibo = [0,1];

    if (opcion==null || opcion=="") {
        mensaje = "No haz introducido ningun numero";
        } else {
            opcion=parseInt(opcion);
            mensaje = "los numeros hasta la posicion #" + opcion +" son:\n";
            
            mensaje= mensaje+("{"+fibo[0]+"} ");
            mensaje= mensaje+("{"+fibo[1]+"} ");
        for(i=2; i < opcion; i++){
            fibo.push(fibo[i-1] + fibo[i-2]);
            mensaje= mensaje+("{"+fibo[i]+"} ");
        }
    }
    alert(mensaje);
}

function categorias(){
    var cal=prompt("Introduzca la calificacion", "");
    var mensaje;

    if (cal==null || cal=="") {
        mensaje = "No haz introducido ningun datro";
    } else {
        cal=parseInt(cal);
        mensaje = "la categoria de la calificacion " + cal +" es:\n";
        if(cal>9){
            mensaje=mensaje+"Sobresaliente";
        }else{
            if(cal>7 && cal<=9){
                mensaje=mensaje+"notable";
            }else{
                if(cal>6 && cal<=7){
                    mensaje=mensaje+"bien";
                }else{
                    if(cal>5 && cal<=6){
                        mensaje=mensaje+"suficiente";
                    }else{
                        if(cal>3 && cal<=5){
                            mensaje=mensaje+"insuficiente";
                        }else{
                            mensaje=mensaje+"muy deficiente";
                        }
                    }
                }
            }
        }
    }
    alert(mensaje);
}

function promedioDef(){
    var mensaje;
    var cant = prompt("Cuantas calificaciones desea ingresar?:", "");

    var total=0;

    if (cant==null || cant=="") {
        mensaje = "No haz introducido ningun numero";
        } else {;
        for(i=0; i < cant; i++){
            total+=parseInt(prompt(("Calificacion #:"+(i+1)+":"), ""));
        }
        total=total/cant;
        mensaje = "El promedio de las calificaciones es :\n"+total;
    }
    alert(mensaje);
}

function promedioInDef(){
    var mensaje;
    var cant =0;

    var total=0;

    do{
        total+=parseInt(prompt(("Calificacion #:"+(cant+1)+":"), ""));
        cant+=1;
    }while(confirm("¿Desea agregar otra calificacion?"));

    total=total/cant;
    mensaje = "El promedio de las calificaciones es :\n"+total;

    alert(mensaje);
}