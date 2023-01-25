const abrirMenu = () =>{
    document.getElementById('nav_open').style.width = "250px";
    document.getElementById('nav_open').style.boxShadow = "0px 10px 100px 1600px rgba(0, 0, 0, 0.60)";
    
}
const fechaMenu = () =>{
    document.getElementById('nav_open').style.width = "0px";
    document.getElementById('nav_open').style.boxShadow = 'none';
}