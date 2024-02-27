let container = document.querySelector(".contenedor"),
qrInput = document.querySelector(".form input"),
boton = document.querySelector(".form button"),
qrimg = document.querySelector(".qr_code img"),
descargar = document.querySelector("#descargar"),
img = document.querySelector("img");

boton.addEventListener('click', () => {
    let qrvalue = qrInput.value;
    
    if(!qrvalue)return;
        boton.innerHTML="Generando código QR...!";
        qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrvalue}`

         qrimg.addEventListener('load', () => {
            container.classList.add("active")
            boton.innerHTML="Generar código QR"
        })
        
   
})

qrInput.addEventListener('click', () => {
    if(!qrInput.value){
        container.classList.remove("active")
    }
})

descargar.addEventListener('click', () => {
    let imgPath = img.getAttribute("src");
    let nombreArchivo = getFileName(imgPath);

    saveAs(imgPath, nombreArchivo);
})

function getFileName(str) {
    return str.substr(str.lastIndexOf('/') + 1)
}
