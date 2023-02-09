var imagens = document.querySelectorAll('.small_img');
console.log(imagens)
var modal = document.querySelector('.modal');
var modalImg = document.querySelector('#modal_img');
var btClose = document.querySelector('#bt_close');
var srcVal = '';

imagens.forEach((imagem)=>{
    imagem.addEventListener('click',() => {
        console.log(imagem)
    })
})

/*for(var i = 0; i < imagens.length; i++){
    imagens[i].addEventListener('click', () => {
        srcVal = imagens[i].getAttribute('src');
        modalImg.setAttribute('src', srcVal);
        modal.classList.toggle('modal_active')//deixa o modal visivel no css
    });
    
}*/

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




