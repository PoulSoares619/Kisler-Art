const abrirMenu = () =>{
    document.getElementById('nav_open').style.width = "250px";
    document.getElementById('sombra-fundo').style.position = "fixed"
    document.getElementById('sombra-fundo').classList.remove('hidden')
}
const fechaMenu = () =>{
    document.getElementById('nav_open').style.width = "0px";
    //document.getElementById('sombra-fundo').style.display = "hidden"
    document.getElementById('sombra-fundo').classList.add('hidden')
}