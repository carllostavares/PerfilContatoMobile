function toggleMode(){
    
    const html = document.documentElement
    html.classList.toggle('light')//TODA O IF DE baixo FOI TROCADA PELO '.TOGGLE'

    /*if(html.classList.contains('light')){
        html.classList.remove('light')
    }else{
        html.classList.add('light')
*/

//PEGAR A IMAGEM
 const img = document.querySelector("#profile img")

//SUBSTITUIR A IMAGGEM
if(html.classList.contains('light')) {
//SE TIVER LIGHT MODE, ADICIONAR A IMAGEM LIGHT
img.setAttribute('src', './assets/imgPerfil.png')

}else{
    img.setAttribute('src', './assets/imgPerfil.png')
} 
}
//SE TIVER SEM O LIGHT MODE, MANTER A IMAGEM NORMAAL