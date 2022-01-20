let productos=[
    {nombre:"Aguardiente tapa roja",tamano:"1/2 botella",precio:200000,foto:"img/img1.png"},
    {nombre:"Aguardiente tapa azul",tamano:"1/2 botella",precio:220000,foto:"img/img2.png"},
    {nombre:"Tequila Don Julio",tamano:"1 botella",precio:300000,foto:"img/img3.png"},
    {nombre:"Cerveza Aguila",tamano:"1 botella",precio:8000,foto:"img/img4.png"},
    {nombre:"Cerveza Pilsen",tamano:"1 botella",precio:7000,foto:"img/img5.jpg"},
    {nombre:"Ron Medellin",tamano:"1/2 botella",precio:220000,foto:"img/img6.png"},
    {nombre:"Ron Añejo 220 años de Caldas",tamano:"1/2 botella",precio:100000,foto:"img/img7.jpg"},
    {nombre:"Agua",tamano:"1 botella",precio:4000,foto:"img/img8.png"},
    {nombre:"Soda",tamano:"1 botella",precio:6000,foto:"img/img9.jpg"},
    {nombre:"Gatorade",tamano:"1 botella",precio:8000,foto:"img/img10.png"},
    
]
let productos2=[1,2,3,4,5,6]

let fila=document.getElementById("fila")

productos.forEach(function(producto){
    console.log(producto.nombre)

    let columna=document.createElement("div")
    columna.classList.add("col")

    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card")
    tarjeta.classList.add("h-100")

    let imagen=document.createElement("img")
    imagen.classList.add("card-img-top")
    imagen.classList.add("h-50")
    imagen.classList.add("p-3")
    imagen.src=producto.foto
    let nombreProducto=document.createElement("h4")
    nombreProducto.textContent=producto.nombre

    //padres e hijos
    tarjeta.appendChild(imagen)
    tarjeta.appendChild(nombreProducto)

    columna.appendChild(tarjeta)
    fila.appendChild(columna)



})