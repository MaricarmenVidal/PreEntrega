
function Plato(id, nombre, descripcion, precio, categoria){
    this.id=id
    this.nombre = nombre,
    this.descripcion = descripcion,
    this.precio = precio,
    this.categoria = categoria
}

const tequeños = new Plato (1, "Tequeños", "Deliciosos tequeños rellenos con queso", 4, "Entrada")
const miniCausitas = new Plato (2, "Mini Causitas", "Causitas clásicas coronadas con tartar de bonito y acompañadas de las mejores cremas", 6, "Entrada")
const sopa = new Plato (3, "Sopa", "Sopa de menestras con verduras", 7, "Entrada")
const lomoSaltado = new Plato (4, "Lomo Saltado", "Trozos de carne con cebolla, tomate y papas fritas", 15, "Plato de fondo")
const aeropuerto = new Plato (5, "Aeropuerto", "Arroz salteado con chancho, cecina y pollo", 17, "Plato de fondo")
const cevicheMixto = new Plato (6, "Ceviche Mixto", "Ceviche de mariscos y pescado servidos con choclo, camote y cancha", 20, "Plato de fondo")
const chichaMorada = new Plato (7, "Chicha Morada", "Concentrado de maíz morado, piña, manzana, membrillo, clavo de olor, canela y aceite esencial de limón", 7, "Bebidas")
const limonadaTropical = new Plato (8, "Limonada Tropical", "Fresa, piña golden y zumo de limón", 6, "Bebidas")
const teEmoliente = new Plato (9, "Té Emoliente", "Membrillo, cebada, piña y dulce de especias de la casa", 5, "Bebidas")


const platos = [tequeños, miniCausitas, sopa, lomoSaltado, aeropuerto, cevicheMixto, chichaMorada, limonadaTropical, teEmoliente]


let entrada = Number(prompt("Para su entrada, ingrese un número del 1 al 3"))
let platoDeFondo = Number(prompt("Para su plato de fondo, ingrese un número del 4 al 6"))
let bebidas = Number(prompt("Para su bebida, ingrese un número del 7 al 9"))


const entradaPedida = platos.find ((en)=>en.id===entrada)
console.log(entradaPedida)
const platoDeFondoPedido = platos.find ((pf)=>pf.id===platoDeFondo)
console.log(platoDeFondoPedido)
const bebidaPedida = platos.find ((be)=>be.id===bebidas)
console.log(bebidaPedida)


document.write(
    "<h1> ¡Bienvenid@ a Nacion 1821! </h1>"+
    "<p> Su entrada será: " + entradaPedida.nombre + "<br>" + entradaPedida.descripcion + "<br>" + "Su entrada cuesta: S/. " + entradaPedida.precio + "</p>" + "<p> Su plato de fondo será: " + platoDeFondoPedido.nombre + "<br>" + platoDeFondoPedido.descripcion + "<br>" + "Su plato de fondo cuesta: S/. " + platoDeFondoPedido.precio + "</p>" + "<p> Su bebida será: " + bebidaPedida.nombre + "<br>" + bebidaPedida.descripcion + "<br>" + "Su bebida cuesta: S/. " + bebidaPedida.precio + "</p>"
)

function costoTotal (){
    const suma= entradaPedida.precio + platoDeFondoPedido.precio + bebidaPedida.precio
    document.write("<p> El total de su pedido es: S/. " + suma)
}
costoTotal()
