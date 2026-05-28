document.addEventListener("DOMContentLoaded", function() {
    const uploadInput = document.getElementById("uploadImage");
    const img = document.getElementById("img1");

    const imgSalva = localStorage.getItem("img1");
    if(imgSalva) {
        img.src = imgSalva
    }
    
    uploadInput.addEventListener("change", function (e) {
        const file = e.target.files[0];
        
        if(!file) return;

        const reader = new FileReader();

        reader.onload = function () {
            console.log("carregou");
            img.src = reader.result;
            localStorage.setItem("img1", reader.result);
        };

        reader.readAsDataURL(file);
    });
    const campos = document.querySelectorAll("input [type='text'], textarea");

    campos. forEach((campo, index) => {
        const chave = "campo_" + index;
         
        const textoSalvo = localStorage.getItem (chave);
        if (textoSalvo) {
            campo.value = textoSalvo;
        }
        campo.addEventListener("input", () => {
            localStorage.setItem(chave, campo.value);
        });
    })
});




