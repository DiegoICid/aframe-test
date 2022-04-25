 // 0 Significa Aire
 // 1 Significa Pared
 // 2 Significa Player Jugador
 // 3 Significa Premios

 let sound = new Howl({
   src: ['./assets/y2mate (mp3cut.net).mp3']
 });
 
 let soundPasos = new Howl({
   src: ['./assets/345560__inspectorj__footsteps-stones-a.wav']
 });


/*  let mapa1 = [
   [1, 1, 0, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1],
   [1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
   [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
   [1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1],
   [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1],
   [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
   [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
   [1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
   [1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
   [1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
   [1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1],
   [1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1],
   [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
   [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
   [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1],
   [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1],
   [1, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 0, 1],
   [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
 ];
 let mapa = [
   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1],
   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
   [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
   [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
   [1, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
   
 ]; */


 // Define objects
 const TAMANO_PARED = 3;
 const ALTO_PARED = 5;

 // variables

 const wall = document.getElementById("#wall");
 const wallPainted1 = document.getElementById("#wallPainted1");
 const prize = document.getElementById("#prize");
 //const paredes = document.querySelector("#paredes");
 const premios = document.getElementById("#premios");
 const scoreItem = document.querySelector("#score");
 const imp = document.querySelector("#imp-model");

 // Walking through the array

function mapRender(mapa) {
  for (let x = 0; x < mapa.length; x++) {
   for (let z = 0; z < mapa[x].length; z++) {
     //console.log("x es " + x + " z es " + z);
     let posicion =
       (x - mapa.length / 2) * TAMANO_PARED +
       " " +
       1.5 + " " +
       (z - mapa.length / 2) * TAMANO_PARED;
     //console.log(posicion);

     if (mapa[x][z] == 0) {
       // Aire
       continue;
     } else if (mapa[x][z] == 1) {
       // Pared
       muro = document.createElement("a-box");
       wall.appendChild(muro);
       muro.setAttribute("color", "#fff");
       muro.setAttribute("material", "src:#wall");
       muro.setAttribute("width", TAMANO_PARED);
       muro.setAttribute("height", ALTO_PARED);
       muro.setAttribute("depth", TAMANO_PARED);
       muro.setAttribute("position", posicion);
       muro.setAttribute("static-body", "");
     } else if (mapa[x][z] == 2) {
       // Player
       document
         .querySelector("#player")
         .setAttribute("position", posicion);
     } else if (mapa[x][z] == 3) {
       /* premio = document.createElement("a-sphere");
       premios.appendChild(premio);
       premio.setAttribute("position", posicion);
       premio.setAttribute("class", "premio");
       premio.setAttribute("color", "tomato");
       premio.setAttribute("radius", "0.3"); */
       muro = document.createElement("a-box");
       wall.appendChild(muro);
       muro.setAttribute("color", "#fff");
       muro.setAttribute("material", "src:#wallPainted1");
       muro.setAttribute("width", TAMANO_PARED);
       muro.setAttribute("height", ALTO_PARED);
       muro.setAttribute("depth", TAMANO_PARED);
       muro.setAttribute("position", posicion);
       muro.setAttribute("static-body", "");
     }
   }
 }
}

mapRender(mapa);
 
 setTimeout(() => {
   sound.play();

 }, 3000);


// plays footstep sounds while walking
 document.addEventListener('keypress', (event) => {
  /* let name = event.key;
  let code = event.code; */
  if (((event.code == "KeyW") || (event.code == "KeyS")) && (!soundPasos.playing())) {
      soundPasos.play();
  }});
 
 document.addEventListener('keyup', (event) => {
  /* let name = event.key;
  let code = event.code; */
  if ((event.code == "KeyW") || (event.code == "KeyS")) {
      soundPasos.stop();
  }});



 


 let jugador = document.getElementById("player");
 let jugadorPosicion = jugador.getAttribute("position");
 let contador = 0;
 jugador.addEventListener('componentchanged', function (evt) {

   if (evt.detail.name !== 'position') {
     return;
    }
    console.log(evt.detail.newData);
    //soundPasos.play();
   if ((evt.detail.newData.x < -25) && (contador == 0)) {
     contador += 1;
    setTimeout(() => {
      console.log("entrando a la zona");
     mapRender(mapa1);
     
  
    }, 2000);
    //mapRender(mapa1);

     
   }
 
   
   
  });



 

 // x < -24 y z > 5

 // DEJO VIDEO EN 1.18