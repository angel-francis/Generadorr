
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

cvvp.addEventListener('click',()=>{
    alert("En proceso");
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
    }else if(cantidad.value > 5000){
        alert(`La cantidad no puede ser superior a 5000`);
    }else{
         e.target.value = "generading...";
        generar.classList.remove("generar");
        generar.classList.add("x");
        setTimeout(()=>{
              generar.classList.remove("x");
                generar.classList.add("generar");
                e.target.value = "Gen";
            Gen();
            //Iterar();
            LimpiarMensajes();
            //LimpiarCampos();
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

entrada.addEventListener('input',()=>{

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
})


let lista = [];
let cvv = [];


function Gen(){

//cc.innerHTML = ``;
    lista = [];
    cvv = [];
    for (let i = 0; i < cantidad.value; i++) {
    const n = Math.floor(1000000000 + Math.random() * 9000000000);
    const m = Math.floor(100 + Math.random() * 900);
    lista.push(n);
    cvv.push(m);
}

    /*.forEach(elemento =>{
        cc.innerHTML += `<li>${entrada.value} / ${elemento} / ${fecha.value}</li>`;
    })*/
      //Este es el bucle que utilice
     /* for(let i=0;i<numero.length;i++){
        cc.innerHTML += `${entrada.value} | ${numero[i]} | ${fecha.value} `;
        //console.log(`${entrada.value} / ${numero[i]} / ${fecha.value}`);

       //console.log(numero[i]);
      }
    
       //obj.filter(k => console.log(`${k.entrada} ${k.fecha}`))*/
     let html = ``;
    let conteo = 0;
  for (let i = 0; i < cantidad.value; i++) {
    //console.log(`${bin.value}${lista[i]} / ${cvv[i]}`)
     conteo ++;
    html += `${Number(entrada.value)}${lista[i]} | ${cvv[i]} | ${fecha.value} `;
    //console.log(`${Number(entrada.value)}${lista[i]} | ${cvv[i]} | ${fecha.value}`)
    //console.log(typeof(Number(entrada.value)))
}
    cc.innerHTML = html;
       //Iterar();
      //LimpiarCampos();
}

/*function Iterar(){
    let html = ``;
    let conteo = 0;
  for (let i = 0; i < cantidad.value; i++) {
    //console.log(`${bin.value}${lista[i]} / ${cvv[i]}`)
     conteo ++;
    //html += `${Number(entrada.value)}${lista[i]} | ${cvv[i]} | ${fecha.value} `;
    console.log(`${Number(entrada.value)}${lista[i]} | ${cvv[i]} | ${fecha.value}`)
    //console.log(typeof(Number(entrada.value)))
}
    cc.innerHTML = html;
}*/






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
    if(ulli.style.display === "none"){
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
