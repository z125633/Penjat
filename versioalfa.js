/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

var paraula= "";
             var vides = 7;
             var lletres = "";
            function comprovar(){   
       var lletra =document.getElementById("lletra").value;
      // Convertim les majúsculues a minúscules
        lletra=lletra.toLowerCase();
       // Eliminam els accents o dièresis de les vocals
        switch (lletra) {
           case "à":
           case "á":
             lletra= "a";
             break;
           case "é":
           case "è":
             lletra= "e";
             break;
           case "í":
           case "ì":
             lletra= "i";
             break;
           case "ó": 
           case "ò":
             lletra= "o";
             break;
           case "ú":
           case "ù":
             lletra= "u";
             break;
       }
       if((lletra >= "a") && (lletra <= "m")){
           window.alert("Has encertat :D");
           // Afegim lletra a Paraula i actualitzam la pantalla.
           paraula = paraula + lletra + " ";
           document.getElementById("paraula").innerHTML= paraula;
           document.getElementById("miau").play();
       }else{
           window.alert("Has fallat :C");
           // Afegim lletra a Lletres i actualitzam la pantalla.
            lletres = lletres + lletra + " ";
           document.getElementById("lletres").innerHTML= lletres;
            document.getElementById("clockticking").play();
           document.getElementById("boomcloud").play();
           vides= vides -1;
           MostrarImg();
       }
        // Actualitzam Vides a la pantalla.
              document.getElementById("vides").innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + vides;
              // Comprovam si has perdut o has guanyat.
        if(vides<=0){
                  window.alert("Has perdut :'(");
                  document.getElementById("catfight").play();
                  Aturatot();
                  window.alert("En pau descansi – RIP!");
                  document.getElementById("belltollx3").play();
              }
              if(paraula.length >= 14){
                  window.alert("has guanyat :D");
                  document.getElementById("cheer").play();
                  Aturatot();
              }
              
            }
              function Aturatot(){
                  document.getElementById("lletra").disabled=true;
                  document.getElementById("button").disabled=true;
              
              }
          
              function Amagar(){
                   document.getElementById("ahorcado_6").hidden=true;
                   document.getElementById("ahorcado_5").hidden=true;
                   document.getElementById("ahorcado_4").hidden=true;
                   document.getElementById("ahorcado_3").hidden=true;
                   document.getElementById("ahorcado_2").hidden=true;
                   document.getElementById("ahorcado_1").hidden=true;
                   document.getElementById("ahorcado_0").hidden=true;
                   if (!confirm('Anam a la quinta forca?')) {
                   document.body.style.backgroundImage= "url('img/fondo1.png')";
                   }
               }
               
    function MostrarImg(){
        switch(vides){
        case 6:
                document.getElementById("ahorcado_6").hidden=false;
                    
                break;
            
        case 5:
                document.getElementById("ahorcado_5").hidden=false;
                document.getElementById("ahorcado_6").hidden=true; 
            
                break;
                
        case 4:
                document.getElementById("ahorcado_4").hidden=false;
                document.getElementById("ahorcado_5").hidden=true;
           
                break;
        case 3:
                document.getElementById("ahorcado_3").hidden=false;
                document.getElementById("ahorcado_4").hidden=true;
           
                break;
        case 2:
                document.getElementById("ahorcado_2").hidden=false;
                document.getElementById("ahorcado_3").hidden=true;
            
                break;
        case 1:
                document.getElementById("ahorcado_1").hidden=false;
                document.getElementById("ahorcado_2").hidden=true;
            
                break; 
        case 0:
                document.getElementById("ahorcado_0").hidden=false;
                document.getElementById("ahorcado_1").hidden=true;
            
                break;
        }
    }
    