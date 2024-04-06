
function onClick()
{
    const FormDaMostrare = document.getElementById('DivForm');
    FormDaMostrare.classList.remove('oscura');
    FormDaMostrare.classList.add('mostraBlock');
 
}



function ChangeImage(){
    const image = document.querySelector("#right_footer img")
    image.classList.add('pixel')
    image.src = 'https://cdn.iconscout.com/icon/premium/png-512-thumb/user-green-4510144-3746052.png?f=webp&w=512';
}

function ChangeImage2(){
    const image = document.querySelector("#right_footer img")
    image.classList.add('pixel')
    image.src = 'https://studium.unict.it/dokeos/2024/main/css/dokeos2_unict/images/action/online.png';
}

function onClickV2(){
    const Messaggio = document.querySelector("#DivMessaggio");
    Messaggio.classList.remove('oscura');
    Messaggio.classList.add('mostraBlock');

}



function onClickV3(){
    const Messaggio = document.querySelector("#DivMessaggio");
    Messaggio.classList.remove('mostraBlock');
    Messaggio.classList.add('oscura');

}

function MostraNumDownload1(){
    const immagine = document.querySelector('#play_foto')
    var NumeroDownload = immagine.dataset.download;
    const DivDownload = document.querySelector('#download1');
    DivDownload.textContent = "Numero Download: " + NumeroDownload;
    DivDownload.style.display = "inline-block";
}

function NascondiNumDownload(){

    const DivDownload = document.querySelector('#download1');

    DivDownload.style.display = "none";
}


function MostraNumDownload2(){
    const immagine = document.querySelector('#app_store_foto')
    var NumeroDownload = immagine.dataset.download;
    const DivDownload = document.querySelector('#download2');
    DivDownload.textContent = "Numero Download: " + NumeroDownload;
    DivDownload.style.display = "inline-block"; 
}

function NascondiNumDownload2(){

    const DivDownload = document.querySelector('#download2');

    DivDownload.style.display = "none";
}


function onClickV4(){
    const SaveReg = document.getElementById('DivForm');
    SaveReg.classList.remove('mostraBlock');
    SaveReg.classList.add('oscura');
}




const RegisterButton = document.querySelector("#bottone-child");
RegisterButton.addEventListener("click", onClick);

const SaveRegButton = document.querySelector('#SalvaRegistrazione');
SaveRegButton.addEventListener("click", onClickV4);





const image = document.querySelector("#right_footer img")
image.addEventListener("mouseover", ChangeImage) 

const image2 = document.querySelector("#right_footer img")
image2.addEventListener("mouseout", ChangeImage2) 




const image3 = document.getElementById('informazioni');
image3.addEventListener("click",onClickV2);

const bottoneOK = document.querySelector('.bottone-child-messaggio');
bottoneOK.addEventListener("click", onClickV3);






const imagePlay = document.querySelector('#play_foto');
imagePlay.addEventListener("mouseover", MostraNumDownload1) 

const imagePlay2 = document.querySelector("#play_foto")
imagePlay.addEventListener("mouseout", NascondiNumDownload) 





const imageApp = document.querySelector("#app_store_foto")
imageApp.addEventListener("mouseover", MostraNumDownload2) 

const imageApp2 = document.querySelector("#app_store_foto")
imageApp.addEventListener("mouseout", NascondiNumDownload2)
