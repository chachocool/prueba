console.log("App started...");

let d  = document.getElementById("text1");
let p = document.createElement('p');
p.textContent = 'Texto de prueba';

d.innerHTML = p.outerHTML;

console.log(p.outerHTML);