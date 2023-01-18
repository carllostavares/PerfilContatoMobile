<!DOCTYPE html>
<html lang="pt-br" class="light">
    <head>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap" rel="stylesheet">

        <meta charset="UTP-8">
        <meta http-equiv="X-UX-Comptible" content="IE=edge">
        <meta name="viewport" content="width=device-width, inital-scale=1.0">
        <title> Document</title>
        <link rel="stylesheet" href="./style.css">
    </head>
 <body>
    <div id="container"> 
        <div id="profile">
        <img src="./assets/imgPerfil.jpg" alt="FotoUsuário">
        <p>@kopilando</p>
        </div>

        <div id="switch" onclick ="toggleMode()">
            <button></button>
            <span></span>
        </div>

        <ul>
            <li>
                <a href="#" target="_blank">Sobre Mim</a>
            </li>

            <li>
                <a href="https://github.com/carllostavares" target="_blank">Ver Potfólio</a>
            </li>

            <li>
                <a href="#" target="_blank">Entrar no LinkedIn</a>
            </li>
                
            <li>
                <a href="#" target="_blank">Visualizar Currículo</a>
            </li>
        </ul>
        <div id="social-links">

            <a href="https://github.com/carllostavares" target="_blank">
            <ion-icon  name = "logo-github"></ion-icon >
            </a>

            <a href="" target="_blank">
            <ion-icon  name = "logo-instagram"></ion-icon >
            </a>

            <a href="" target="_blank">
            <ion-icon  name = "logo-linkedin"></ion-icon >
            </a>

            <a href="" target="_blank">
            <ion-icon  name = "logo-youtube"></ion-icon > 
            </a>

        </div>
        <footer>
            Obrigado por estar aqui !
        </footer>
    </div>
   <script  type = "module"  src = "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"> </script> 
   <script  nomodule  src = "https://unpkg .com/ionicons@5.5.2/dist/ionicons/ionicons.js"> </script>

   <script src="./script.js"></script>

</body>


</html>
