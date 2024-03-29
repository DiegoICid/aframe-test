<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Laverinto VR</title>
    <script src="https://aframe.io/releases/0.5.0/aframe.min.js"></script>
    <!--     <script src="https://aframe.io/releases/1.3.0/aframe.min.js"></script> -->
    <script src="//cdn.rawgit.com/donmccurdy/aframe-extras/v2.6.1/dist/aframe-extras.min.js"></script>
    <script src="https://cdn.rawgit.com/ngokevin/kframe/d7bd9968/components/sun-sky/dist/aframe-sun-sky.min.js"></script>
  </head>
  <body>
    <a-scene>
      <a-assets>
        <img src="piso.jpeg" alt="" id="piso" />
        <img src="pared.jpeg" alt="" id="pared" />
      </a-assets>

    <a-scene>
      <!-- imagenes para la pared y el suelo -->
      <a-assets>
        <img src="pared.jpg" alt="" id="suelo" />
        <img src="suelo.jpeg" alt="" id="pared" />
      </a-assets>
      <!-- camara jugador -->
      <a-entity
        id="jugador"
        camera
        kinematic-body
        universal-controls
        position="0 1.6 0"
      >
        <!-- Seleccionar el premio -->
        <a-cursor fuse="true" fuse-timeout="800"></a-cursor>
        <!-- Score -->
        <a-text
          value=""
          width="4"
          id="score"
          color="black"
          position="0 -.5 -1"
          anchor="center"
          align="center"
        ></a-text>
      </a-entity>
      <!-- Posicion del sol -->
      <a-sun-sky material="sunPosition: 0 1 0;"></a-sun-sky>

      <a-entity id="#paredes"></a-entity>
      <a-entity id="#premios"></a-entity>
      <a-grid static-body src="#piso"></a-grid>
    </a-scene>

    <script>
      // 0 Significa Aire
      // 1 Significa Pared
      // 2 Significa Player Jugador
      // 3 Significa Premios

      let mapa = [
        [1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
        [1, 0, 0, 3, 0, 0, 0, 0, 1, 1],
        [1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 3, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 3, 1],
        [1, 0, 1, 1, 0, 1, 1, 1, 1, 1],
        [1, 3, 0, 1, 2, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
      ];

      // Definimos objetos
      const TAMANO_PARED = 5;
      const ALTO_PARED = 3;

      let muro;
      let premio;

      const paredes = document.querySelector("#paredes");
      const premios = document.querySelector("#premios");
      const scoreItem = document.querySelector("#score");

      for (let x = 0; x < mapa.length; x += 1) {
        for (let z = 0; z < mapa[x].length; z += 1) {
          // Esto es salto de fe (creanme esto es asi)
          //(x 1.5 z)
          let posicion =
            (x - mapa.length / 2) * TAMANO_PARED +
            " " +
            1.5 +
            (z - mapa.length / 2) * TAMANO_PARED;

          if (mapa[x][z] == 0) {
            // Aire
            continue;
          } else if (mapa[x][z] == 1) {
            // Pared
            muro = document.createElement("a-box");
            paredes.appendChild(muro);
            muro.setAttribute("color", "fff");
            muro.setAttribute("material", "src:#pared");
            muro.setAttribute("width", TAMANO_PARED);
            muro.setAttribute("height", ALTO_PARED);
            muro.setAttribute("depth", TAMANO_PARED);
            muro.setAttribute("position", posicion);
            muro.setAttribute("static-body", "");
          } else if (mapa[x][z] == 2) {
            // Player
            document
              .querySelector("#jugador")
              .setAttribute("position", posicion);
          } else if (mapa[x][z] == 3) {
            premio = document.createElement("a-sphere");
            premios.appendChild(premio);
            premio.setAttribute("position", posicion);
            premio.setAttribute("class", "premio");
            premio.setAttribute("color", "tomato");
            premio.setAttribute("radius", "0.3");
          }
        }
      }
    </script>
  </body>
</html>




----------------

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Laverinto VR</title>
    <script src="https://aframe.io/releases/0.5.0/aframe.min.js"></script>
    <!--     <script src="https://aframe.io/releases/1.3.0/aframe.min.js"></script> -->
    <script src="//cdn.rawgit.com/donmccurdy/aframe-extras/v2.6.1/dist/aframe-extras.min.js"></script>
    <script src="https://cdn.rawgit.com/ngokevin/kframe/d7bd9968/components/sun-sky/dist/aframe-sun-sky.min.js"></script>
  </head>
  <body>
    <a-scene>
      <a-assets>
        <img src="piso.jpeg" alt="" id="piso" />
        <img src="pared.jpeg" alt="" id="pared" />
      </a-assets>

      <!-- Posicion del sol -->
      <a-sun-sky material="sunPosition: 0 1 0;"></a-sun-sky>

      <a-entity id="paredes"></a-entity>
      <a-entity id="premios"></a-entity>
      <a-grid static-body src="#piso"></a-grid>
    </a-scene>

    <script>
      // 0 Significa Aire
      // 1 Significa Pared
      // 2 Significa Player Jugador
      // 3 Significa Premios

      let mapa = [
        [1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
        [1, 0, 0, 3, 0, 0, 0, 0, 1, 1],
        [1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 3, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 3, 1],
        [1, 0, 1, 1, 0, 1, 1, 1, 1, 1],
        [1, 3, 0, 1, 2, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
      ];

      // Definimos objetos
      const TAMANO_PARED = 5;
      const ALTO_PARED = 3;

      let muro;
      let premio;

      const paredes = document.querySelector("#paredes");
      console.log(paredes);
      const premios = document.querySelector("#premios");
      console.log(premios);

      const scoreItem = document.querySelector("#score");
      console.log(scoreItem);

      for (let x = 0; x < mapa.length; x += 1) {
        for (let z = 0; z < mapa[x].length; z += 1) {
          // Esto es salto de fe (creanme esto es asi)
          //(x 1.5 z)
          let posicion =
            (x - mapa.length / 2) * TAMANO_PARED +
            " " +
            1.5 +
            (z - mapa.length / 2) * TAMANO_PARED;

          if (mapa[x][z] == 0) {
            // Aire
            continue;
          } else if (mapa[x][z] == 1) {
            // Pared
            muro = document.createElement("a-box");
            paredes.appendChild(muro);
            muro.setAttribute("color", "#fff");
            muro.setAttribute("material", "src: #pared");
            muro.setAttribute("width", TAMANO_PARED);
            muro.setAttribute("height", ALTO_PARED);
            muro.setAttribute("depth", TAMANO_PARED);
            muro.setAttribute("position", posicion);
            muro.setAttribute("static-body", "");
          } else if (mapa[x][z] == 2) {
            // Player
            document
              .querySelector("#jugador")
              .setAttribute("position", posicion);
          } else if (mapa[x][z] == 3) {
            premio = document.createElement("a-sphere");
            premios.appendChild(premio);
            premio.setAttribute("position", posicion);
            premio.setAttribute("class", "premio");
            premio.setAttribute("color", "tomato");
            premio.setAttribute("radius", "0.3");
          }
        }
      }
    </script>
  </body>
</html>



---------------












//Anda

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Laberinto</title>
    <script src="https://aframe.io/releases/0.5.0/aframe.min.js"></script>
    <script src="//cdn.rawgit.com/donmccurdy/aframe-extras/v2.6.1/dist/aframe-extras.min.js"></script>
    <script src="https://cdn.rawgit.com/ngokevin/kframe/d7bd9968/components/sun-sky/dist/aframe-sun-sky.min.js"></script>
  </head>
  <body>
    <a-scene>
      <!-- imagenes para la pared y el suelo -->
      <a-assets>
        <img src="pared.jpeg" alt="" id="suelo" />
        <img src="piso.jpeg" alt="" id="pared" />
      </a-assets>
      <!-- camara jugador -->
      <a-entity
        id="jugador"
        camera
        kinematic-body
        universal-controls
        position="0 1.6 0"
      >
        <!-- Seleccionar el premio -->
        <a-cursor fuse="true" fuse-timeout="800"></a-cursor>
        <!-- Score -->
        <a-text
          value=""
          width="4"
          id="score"
          color="black"
          position="0 -.5 -1"
          anchor="center"
          align="center"
        ></a-text>
      </a-entity>
      <!-- Posicion del sol -->
      <a-sun-sky material="sunPosition: 0 1 0;"></a-sun-sky>
      <!-- Los objetos  -->
      <a-entity id="muros"></a-entity>
      <a-entity id="premios"></a-entity>
      <a-grid static-body src="#suelo"></a-grid>
    </a-scene>
    <script>
      // 0 significa nada
      // 1 significa muro
      // 2 significa jugador
      // 3 significa premio
      let mapa = [
        [1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
        [1, 0, 0, 3, 0, 0, 0, 0, 1, 1],
        [1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 3, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 3, 1],
        [1, 0, 1, 1, 0, 1, 1, 1, 1, 1],
        [1, 3, 0, 1, 2, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
      ];

      const TAMANO_PARED = 5;
      const ALTO_PARED = 3;
      let muro;
      let premio;

      let muros = document.querySelector("#muros");
      let premios = document.querySelector("#premios");
      let scoreEl = document.querySelector("#score");

      // dibujar el mapa
      for (let x = 0; x < mapa.length; x++) {
        for (let z = 0; z < mapa[x].length; z++) {
          // Esto es un salto de fe (creanme que es asi)
          //(x 1.5 z)
          let posicion =
            (x - mapa.length / 2) * TAMANO_PARED +
            " " +
            1.5 +
            " " +
            (z - mapa[x].length / 2) * TAMANO_PARED;

          if (mapa[x][z] == 0) {
            // Aire
            continue;
          } else if (mapa[x][z] == 1) {
            // Pared
            muro = document.createElement("a-box");
            muros.appendChild(muro);
            muro.setAttribute("color", "fff");
            muro.setAttribute("material", "src: #pared");
            muro.setAttribute("width", TAMANO_PARED);
            muro.setAttribute("height", ALTO_PARED);
            muro.setAttribute("depth", TAMANO_PARED);
            muro.setAttribute("position", posicion);
            muro.setAttribute("static-body", "");
          } else if (mapa[x][z] == 2) {
            // jugador
            document
              .querySelector("#jugador")
              .setAttribute("position", posicion);
          } else if (mapa[x][z] == 3) {
            premio = document.createElement("a-sphere");
            premios.appendChild(premio);
            premio.setAttribute("position", posicion);
            premio.setAttribute("class", "premio");
            premio.setAttribute("color", "tomato");
            premio.setAttribute("radius", "0.3");
          }
        }
      }
    </script>
  </body>
</html>



--------

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Laverinto VR</title>
    <script src="https://aframe.io/releases/0.5.0/aframe.min.js"></script>
    <!--     <script src="https://aframe.io/releases/1.3.0/aframe.min.js"></script> -->
    <script src="//cdn.rawgit.com/donmccurdy/aframe-extras/v2.6.1/dist/aframe-extras.min.js"></script>
    <script src="https://cdn.rawgit.com/ngokevin/kframe/d7bd9968/components/sun-sky/dist/aframe-sun-sky.min.js"></script>
  </head>
  <body>
    <a-scene>
      <a-assets>
        <img src="piso.jpeg" alt="" id="piso" />
        <img src="pared.jpeg" alt="" id="pared" />
      </a-assets>

      <a-entity
        id="jugador"
        camera
        kinematic-body
        universal-controls
        position="0 1.6 0"
      >
        <!-- Seleccionar el premio -->
        <a-cursor fuse="true" fuse-timeout="800"></a-cursor>
        <!-- Score -->
        <a-text
          value=""
          width="4"
          id="score"
          color="black"
          position="0 -.5 -1"
          anchor="center"
          align="center"
        ></a-text>
      </a-entity>

      <!-- Posicion del sol -->
      <a-sun-sky material="sunPosition: 0 1 0;"></a-sun-sky>

      <a-entity id="paredes"></a-entity>
      <a-entity id="premios"></a-entity>
      <a-grid static-body src="#piso"></a-grid>
    </a-scene>

    <script>
      // 0 Significa Aire
      // 1 Significa Pared
      // 2 Significa Player Jugador
      // 3 Significa Premios

      let mapa = [
        [1, 1, 1, 1, 1, 1, 1, 2, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
        [1, 0, 0, 3, 0, 0, 0, 0, 1, 1],
        [1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 3, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 3, 1],
        [1, 0, 1, 1, 0, 1, 1, 1, 1, 1],
        [1, 3, 0, 1, 0, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
      ];

      // Definimos objetos
      const TAMANO_PARED = 5;
      const ALTO_PARED = 3;

      let muro;
      let premio;

      const paredes = document.querySelector("#paredes");
      console.log(paredes);
      const premios = document.querySelector("#premios");
      console.log(premios);

      const scoreEl = document.querySelector("#score");
      console.log(scoreEl);

      for (let x = 0; x < mapa.length; x += 1) {
        for (let z = 0; z < mapa[x].length; z += 1) {
          // Esto es salto de fe (creanme esto es asi)
          //(x 1.5 z)
          let posicion =
            (x - mapa.length / 2) * TAMANO_PARED +
            " " +
            1.5 +
            " " +
            (z - mapa.length / 2) * TAMANO_PARED;
          if (mapa[x][z] == 0) {
            // Aire
            continue;
          } else if (mapa[x][z] == 1) {
            // Pared
            muro = document.createElement("a-box");
            paredes.appendChild(muro);
            muro.setAttribute("material", "src: #pared");
            muro.setAttribute("width", TAMANO_PARED);
            muro.setAttribute("height", ALTO_PARED);
            muro.setAttribute("depth", TAMANO_PARED);
            muro.setAttribute("position", posicion);
            muro.setAttribute("static-body", "");
          } else if (mapa[x][z] == 2) {
            // Player
            document
              .querySelector("#jugador")
              .setAttribute("position", posicion);
          } else if (mapa[x][z] == 3) {
            premio = document.createElement("a-sphere");
            premios.appendChild(premio);
            premio.setAttribute("position", posicion);
            premio.setAttribute("class", "premio");
            premio.setAttribute("color", "tomato");
            premio.setAttribute("radius", "0.3");
          }
        }
      }

      premios = Array.from(document.querySelectorAll(".premio"));
      let score = premios.length;

      scoreEl.setAttribute("value", "Encontra " + score + " Premios");
      scoreEl.setAttribute("color", "#881166");

      premios.forEach(function (premio) {
        premio.addEventListener("click", function () {
          premio.setAttribute("visible", "false");
          score = score - 1;
          scoreEl.setAttribute("value", "Encontra " + score + " Premio");

          if (score <= 0) {
            scoreEl.setAttribute("value", "Ya tenes todos los premios");
          }
        });
      });
    </script>
  </body>
</html>