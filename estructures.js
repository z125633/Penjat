  /* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

            var Paraula = [];
            var vides = 7;
            var Lletres = ["_","_","_","_","_","_","_"];
            //Llista de paraules per al joc i les pistes associades
            var paraules = ["cordes","fetge","forca","jutges","jutjat","mengen","penjat","quinta","setze"];
            var pistes = ["A la quinta forca","A ca un penjat,no hi anomenis cordes",
                           "Setze jutges d'un jutjat mengen fetge d'un penjat"];
            var paraulespistes = [1,2,0,2,2,2,1,0,2];
            //Escull una paraula aleatòriament
            var aleatori = Math.floor(Math.random() * paraules.length);
            var paraula = paraules[aleatori];
            var pista = pistes[paraulespistes[aleatori]];
            //Marcam cada lletra amb un "_"
              for (var i = 0; i < paraula.length; i++) {
                  Paraula[i]= "_";
              }
            function mostrarpista(){
                window.alert(pista);
            }
            function comprovar(){   
            var lletra = document.getElementById("lletra").value;
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
          
            if (paraula.includes(lletra)){
            var pos = paraula.indexOf(lletra);
            Paraula[pos] = lletra;
            for (var i = pos; i < paraula.length; i++){
                if (paraula[i] === lletra)
                    Paraula[i] = lletra;
            }  
              
            document.getElementById("miau").play();
            window.alert("Has encertat :D");
            
            // Afegim lletra a Paraula i actualitzam la pantalla.
            // paraula = paraula + lletra + " ";
            
            document.getElementById("paraula").innerHTML= Paraula;
            document.getElementById("timer").play();
            
            }else{
            window.alert("Has fallat :C");
            
            // Afegim lletra a Lletres i actualitzam la pantalla.
      
            Lletres[7-vides]=lletra;
            document.getElementById("lletres").innerHTML= Lletres;
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
                document.body.style.backgroundImage="url('img/Jungle.png')";
                document.body.style.backgroundImage="url('img/ahorcado.jpg')";
                window.alert("En pau descansi – RIP!");
                document.getElementById("belltollx3").play();
                document.getElementById("rotar").hidden=false;
                document.getElementById("moix").hidden=true;
                document.getElementById("ahorcado").hidden=true;
                Aturatot();
              }
            if(Paraula.indexOf("_")=== -1){
                window.alert("has guanyat :D");
                document.getElementById("cheer").play();
                document.body.style.backgroundImage="url('img/Party.png')";
                document.getElementById("caminar").hidden=false;
                document.getElementById("rotar").hidden=true;
                document.getElementById("moix").hidden=true;
                document.getElementById("ahorcado").hidden=false;
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
            document.getElementById("rotar").hidden=true;
              document.getElementById("ahorcado").hidden=true;
            
                if (!confirm('Anam a la quinta forca?')) {
            document.body.style.backgroundImage= "url('img/fondo1.png')";
            document.getElementById("moix").hidden=true;
                    document.getElementById("caminar").hidden=true;
            document.body.style.display="block";
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
    
