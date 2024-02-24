'use strict';

let slider_conteiner = document.querySelector(".slider_conteiner");

let imagenes = slider_conteiner.querySelectorAll(".img_sl")
let index = 1;

setInterval(()=>{
    let percentage = index * -100;
    slider_conteiner.style.transform = "translateX("+ percentage + "%)";
    index ++; 
    if(index > imagenes.length -1){
        index = 0;
    }
}, 3000)