 /* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
// Diferents idiomes per la GUI
    const Idiomes_dft = [
        {
            "IdIdioma": "ca",
            "Titol": "Versió amb Estructures de Dades Joc del Penjat",
            "Versio": "Versió β Joc del Penjat",
            "Input": "Escriu una lletra minúscula",
            "Pregunta": "Anam a la quinta forca?",
            "Comprovar": "Comprovar",
            "Paraula": "Paraula:",
            "Sopes": "Demanes sopes?",
            "Pista": "Pista",
            "Vides": "Vides:",
            "Moix": "Un moix en té set?",
            "Lletres": "Lletres:",
            "Ets": "Ets de lletres?",
            "URLpistes": "URLpistes:",
            "Dita": "Dita",
            "Dita1": "A la quinta forca, ",
            "Dita2": "A ca un penjat, no hi anomenis cordes, ",
            "Dita3": "Setze jutges d'un jutjat mengen fetge d'un penjat, …",
            "Credits": "Crèdits:",
            "YouTube": "Joc Penjat on Scratch",
            "Wikis": "Penjat",
            "Idioma": "en Català",
            "Diccionari": "Diccionari",
            "Teclat": "Mostra o Amaga",
            "Incorrecte": "Caràcter incorrecte!",
            "Repetida": "Lletra repetida!",
            "Encertat": "Has encertat!",
            "Guanyat": "i has guanyat!",
            "Fallat": "Has fallat!",
            "Perdut": "i has perdut!",
            "Descansi": "En pau descansi – RIP!",
            "Puntuacio": "Puntuació:"
        },
        {
            "IdIdioma": "es",
            "Titol": "Versión con Estructuras de Datos Juego del Ahorcado",
            "Versio": "Versión β Juego del Ahorcado",
            "Input": "Escribe una letra minúscula",
            "Pregunta": "Vamos al quinto pino?",
            "Comprovar": "Comprobar",
            "Paraula": "Palabra:",
            "Sopes": "Te rindes?",
            "Pista": "Pista",
            "Vides": "Vidas:",
            "Moix": "Un gato tiene siete?",
            "Lletres": "Letras:",
            "Ets": "Eres de letras?",
            "URLpistes": "URLpistas:",
            "Dita": "Dicho",
            "Dita1": "Al quinto pino, ",
            "Dita2": "En casa de un ahorcado, no hables de cuerdas,",
            "Dita3": "Dieciséis jueces de un juzgado comen hígado de un ahorcado, …",
            "Credits": "Crèditos:",
            "YouTube": "Juego Ahorcado on Scratch",
            "Wikis": "Ahorcado",
            "Idioma": "en Español",
            "Diccionari": "Diccionario",
            "Teclat": "Muestra o Esconde",
            "Incorrecte": "Carácter incorrecto!",
            "Repetida": "Letra repetida!",
            "Encertat": "Has acertado!",
            "Guanyat": "y has ganado!",
            "Fallat": "Has fallado!",
            "Perdut": "y has perdido!",
            "Descansi": "En paz descanse - RIP!",
            "Puntuacio": "Puntuación:"
        },
        {
            "IdIdioma": "en",
            "Titol": "Hangman Game Data Structures Version",
            "Versio": "Hangman Game β Version",
            "Input": "Write a lowercase letter",
            "Pregunta": "Are we going to the boondocks?",
            "Comprovar": "Check it",
            "Paraula": "Word:",
            "Sopes": "You give up?",
            "Pista": "Clue",
            "Vides": "Lives:",
            "Moix": "A cat has seven?",
            "Lletres": "Letters:",
            "Ets": "Are you in liberal arts?",
            "URLpistes": "URLclues:",
            "Dita": "Saying",
            "Dita1": "To the boondocks,",
            "Dita2": "In a hanged man's home, don't talk about ropes,",
            "Dita3": "Sixteen judges of a court eat the liver of a hangman, …",
            "Credits": "Credits:",
            "YouTube": "Hangman Game on Scratch",
            "Wikis": "Hangman",
            "Idioma": "in English",
            "Diccionari": "Dictionary",
            "Teclat": "Show or Hide",
            "Incorrecte": "Wrong character!",
            "Repetida": "Repeated letter!",
            "Encertat": "You're right!",
            "Guanyat": "and you have won!",
            "Fallat": "You have failed!",
            "Perdut": "and you have lost!",
            "Descansi": "Rest in peace - RIP!",
            "Puntuacio": "Score:"
        },
        {
            "IdIdioma": "fr",
            "Titol": "Version avec Base de Données Jeu du Pendu",
            "Versio": "Version γ Jeu du Pendu",
            "Input": "Ecrire une lettre minuscule",
            "Pregunta": "Allons-nous aux banlieue?",
            "Comprovar": "Vérifier",
            "Paraula": "Mot:",
            "Sopes": "Tu abandonnes?",
            "Pista": "Indice",
            "Vides": "Vies:",
            "Moix": "Un chat en a sept?",
            "Lletres": "Lettres:",
            "Ets": "Êtes-vous dans les lettres?",
            "URLpistes": "URLindices:",
            "Dita": "Dit",
            "Dita1": "Aux banlieue,",
            "Dita2": "Chez un pendu, ne parle pas de cordes,",
            "Dita3": "Seize juges d'un tribunal mangent le foie d'un pendu, …",
            "Credits": "Crédits:",
            "YouTube": "Jeu Pendu sur Scratch",
            "Wikis": "Pendu",
            "Idioma": "en Français",
            "Diccionari": "Dictionnaire",
            "Teclat": "Afficher ou Masquer",
            "Incorrecte": "Caractère non valide!",
            "Repetida": "Lettre répétée!",
            "Encertat": "Vous as raison!",
            "Guanyat": "et vous avez gagné!",
            "Fallat": "Vous avez échoué!",
            "Perdut": "et vous avez perdu!",
            "Descansi": "Repose en paix - RIP!",
            "Puntuacio": "Score:"
        }
    ]
    var Idiomes = Idiomes_dft;
    var Idioma = Idiomes.find(Idioma => Idioma.IdIdioma == "ca");
    
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
                
            function idiomarepetida(){
             window.alert(Idioma.Repetida);
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
                window.alert("En pau descansi – RIP!");
                document.getElementById("belltollx3").play();
                document.getElementById("rotar").hidden=false;
                document.getElementById("moix").hidden=true;
                document.getElementById("ahorcado").hidden=true;
                document.getElementById("caminar").hidden=true;
                Aturatot();
              }
            if(Paraula.indexOf("_")=== -1){
                window.alert("has guanyat :D");
                document.getElementById("cheer").play();
                document.body.style.backgroundImage="url('img/Party.png')";
                document.getElementById("rotar").hidden=true;
                document.getElementById("moix").hidden=true;
                document.getElementById("imatges").hidden=true;
                document.getElementById("ahorcado").hidden=false;
                document.getElementById("caminar").hidden=false;
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
            document.getElementById("caminar").hidden=true;
            
                if (!confirm('Anam a la quinta forca?')) {
            document.body.style.backgroundImage= "url('img/fondo1.png')";
            document.getElementById("moix").hidden=false;
                    document.getElementById("caminar").hidden=true;
            document.body.style.display="block";
                   }
            AlaWeb_SQLite("ca");
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
    
// Funció per carregar la base de dades penjat.db
    function AlaWeb_SQLite(IdIdioma) {
        window.alert("AlaWeb_SQLite IdIdioma = '" + IdIdioma + "'");
        config = {
            locateFile: filename => `/dist/${filename}`
        };

        // Recuperam de la base de dades els TextosGUI per tots els Idiomes
        alasql('ATTACH SQLITE DATABASE penjat("db/penjat.db"); USE penjat; \n\
                SELECT * FROM TblTextosGUI;',
        //    [], function(idiomes) {Print_Data(Idiomes = idiomes.pop());}
            [], function(idiomes) {SQL_TblTextosGUI(IdIdioma, idiomes.pop());}
        );
    }

    function SQL_TblTextosGUI(IdIdioma, IdIdioma1) {}

    // Print data  
    function Print_Data(res) {
        for (var i in res)
        {
           // console.log("row " + i);
           // document.getElementById("res").innerHTML += "<br>";
           for (var j in res[i])
             {
              // console.log(" " + res[i][j]);
              // document.getElementById("res").innerHTML += res[i][j] + ", ";
              window.alert("res[" + i + "][" +j + "] = " + res[i][j]);
             }
        }
    }
function CanviarIdioma(IdIdioma){
        AlaWeb_SQLite(IdIdioma);
        Idioma = Idiomes.find(Idioma => Idioma.IdIdioma == IdIdioma);
       
        document.title = Idioma.Titol;
        document.getElementById("Versio").innerHTML = Idioma.Versio;
        document.getElementById("lletra").placeholder = Idioma.Input;
    
    /*
        document.getElementById("comprovar").innerHTML = Idioma.Comprovar;
        document.getElementById("Paraula").innerHTML = Idioma.Paraula;
        document.getElementById("Sopes").innerHTML = Idioma.Sopes;
        document.getElementById("pista").innerHTML = Idioma.Pista;        
        document.getElementById("Vides").innerHTML = Idioma.Vides;
        document.getElementById("Moix").innerHTML = Idioma.Moix;
        document.getElementById("Lletres").innerHTML = Idioma.Lletres;
     */
    
        // Escull una nova paraula aleatòriament
        window.alert("Nova paraula aleatòria / Nueva palabra aleatoria / New random word!");
        // window.alert("[" + paraula + "]=[" + pista + "]");
}
