
const entrada = document.getElementById("entrada");
//const cvv = document.getElementById("cvv");
const fecha = document.getElementById("entrada2");
const mensaje = document.getElementById("mensaje");
//const mensaje2 = document.getElementById("mensaje2");
const mensaje3 = document.getElementById("mensaje3");
const mensaje4 = document.getElementById("mensaje4");

const cantidad = document.getElementById("cantidad");
const cc = document.getElementById("cc");

const cvvp =  document.getElementById("cvvPersonalizado");
const cvvv =  document.getElementById("cvv");

const cvvvv = document.getElementsByClassName("cvvvv");
const cv = document.getElementsByClassName("cvv");




cvvp.addEventListener('click',()=>{
    const estado = window.getComputedStyle(cvvv).display;

    if(estado === "" || estado === "none"){
        cvvv.style.display = "flex"
    }else{
         cvvv.style.display = "none";
    }
})

const limpiar = document.getElementById("limpiar");

const generar = document.getElementById("generar");

generar.addEventListener('click', (e)=>{
    if(entrada.value === ""){
        e.target.value = "Gen";
        mensaje.innerHTML = "Dijite un bin";
    }else if(fecha.value === ""){
         mensaje3.innerHTML = "Dijite una fecha";
    }else if(!entrada.value.startsWith(4) && !entrada.value.startsWith(5)){
        mensaje.innerHTML = "Solo se aceptan tarjetas visa o mastercad";
    }else if(entrada.value.length <= 4 || entrada.value.length <= 5){
        mensaje.innerHTML = "solo se aceptan bin de 6 dijitos";
    }else if(fecha.value.slice(0,2) >=13){
        mensaje3.innerHTML = "el mes no puede ser superior a 12";
    }else if(cantidad.value >= 5000){
        alert(`La cantidad no puede ser superior a 5000`);
    }else if(cvvv.value.length < 3){
        alert("Dijite un CVV valido");
    }else{
         e.target.value = "generading...";
        generar.classList.remove("generar");
        generar.classList.add("x");
        setTimeout(()=>{
              generar.classList.remove("x");
                generar.classList.add("generar");
                e.target.value = "Gen";
            Gen();
            LimpiarMensajes();
        },200);
    }
})


function LimpiarMensajes(){
    mensaje.innerHTML = "";
    mensaje3.innerHTML = "";
}

const car = document.getElementById("master");
const carr = document.getElementById("visaa");
const visas  = document.getElementsByClassName("visas");

entrada.addEventListener('input',(e)=>{
     let valor = e.target.value.replace(/\D/g, "");
    if(entrada.value.startsWith(5)){
        car.classList.remove("visas");
        car.classList.add("visasss")
        //alert("visa");
    }else{
         car.classList.remove("visasss");
        car.classList.add("visas")
    }
    
    if(entrada.value.startsWith(4)){
        carr.classList.remove("visas");
        carr.classList.add("visasss2");
    }else{
        carr.classList.remove("visasss2");
         carr.classList.add("visas");
    }

    e.target.value = valor;
})


let lista = [];
let cvv = [];


function Gen(){
    lista = [];
    cvv = [];
    for (let i = 0; i < cantidad.value; i++) {
    const n = Math.floor(1000000000 + Math.random() * 9000000000);
    const m = Math.floor(100 + Math.random() * 900);
    lista.push(n);
    cvv.push(m);
}
    
     let html = ``;
     if(cvvv.value.trim() !== "" && cvvv.value.length === 3){
          for (let i = 0; i < cantidad.value; i++) {
    html += `${Number(entrada.value)}${lista[i]} | ${cvvv.value} | ${fecha.value} `;
}
     }else{
          for (let i = 0; i < cantidad.value; i++) {
    html += `${Number(entrada.value)}${lista[i]} | ${cvv[i]} | ${fecha.value} `;
}
     }

    cc.innerHTML = html;

}



cvvv.addEventListener('input',(e)=>{
    let valor = e.target.value.replace(/\D/g, "");

    e.target.value = valor
})

cantidad.addEventListener('input',(e)=>{
     let valor = e.target.value.replace(/\D/g, "");
     e.target.value = valor;
})



fecha.addEventListener('input',(e) =>{
    let valor = e.target.value.replace(/\D/g, "");
       if (valor.length > 2) { 
        valor = valor.slice(0, 2) + "/" + valor.slice(2);
    }
    e.target.value = valor;
})



limpiar.addEventListener('click',(e)=>{
    if(cc.innerHTML === ``){
        alert("The list is empty");
        
    }else{
        e.target.value = "Cleaning...";
        setTimeout(()=>{
        e.target.value = "Clean"
        cc.innerHTML = ``;
    },200)
    }
})

function LimpiarCampos(){
    entrada.value = ``;
    fecha.value = ``;
    cantidad.value = ``;
}


const bxr = document.getElementById("klk");
const ulli = document.getElementById("navv");
const overlay = document.getElementById("overlay");



  bxr.addEventListener('click', () => {
    const estado =  window.getComputedStyle(ulli).display;
    if(estado ===  "" || estado === "none"){
         ulli.style.display = "flex";
         overlay.style.display = "flex";
    }else{
            ulli.style.display = "none";
            overlay.style.display = "none";
    }
  });

  overlay.addEventListener('click',()=>{
     if(ulli.style.display === "flex" && overlay.style.display === "flex"){
         ulli.style.display = "none";
        overlay.style.display = "none";
     }

  })
