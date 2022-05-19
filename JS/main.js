"use strict"

let fileUpload=document.querySelector(".file-upload");
let imageSrc;

fileUpload.addEventListener("change",function(e){
    let uploadFile=e.target.files;
     for (const file of uploadFile) {
         let reader =new FileReader();
         reader.onloadend=(readEvent) =>{
             imageSrc=readEvent.target.result;
         }
         reader.readAsDataURL(file);
     }
})

let submitButton=document.querySelector(".submitBtn");
let dnone=document.querySelector(".profile");
submitButton.addEventListener("click",function(e){
let addInfoArea=document.querySelector(".info-area-prof");
    let form=document.querySelector(".info-area");
    form.classList.add("d-none")
    dnone.classList.remove("d-none") ;

     let infoArea=document.querySelector(".image");
     let addImage=document.createElement("img");
     addImage.setAttribute("src",imageSrc);
     infoArea.append(addImage);

    let inputs=document.querySelectorAll(".form-control");
    let strinArray=["Ad :           ","Soyad :        ","Ata adı  :     ","Doğum Tarixi  :"];
    for(let i=0;i<inputs.length-1;i++){
    let addInfo=document.createElement("div");
    addInfoArea.append(addInfo);
    addInfo.innerText=strinArray[i]+"   "+inputs[i].value;


    }

})