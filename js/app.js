//metodo del objeto windows
// window.alert(`prueba de alert`);

//setTimeout- retrasa miliseg una funcion
function saludar(){
    document.write(`<p>Hola mundo 🗺️</p>`);
}

window.setTimeout(saludar, 5000);
setTimeout(()=>{
    document.write(`<p>Hola mundo nuevo 🗺️</p>`);
 }, 3000);

//setInterval