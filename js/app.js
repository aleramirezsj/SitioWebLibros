console.log("el archivo javascript ya está importado");

const urlApi="https://biblioisp20-92ed.restdb.io/rest/libros?apikey=2c677ccf2cb62a940092248e128001983dab0";

const libros = {
    listarLibros: ()=>{
        //tomamos la referencia del contenedor donde se mostrarán los libros
        const contenedor=document.getElementById("contenedorLibros");
        const books="<ul><li> Libro1 <li>Libro2 </ul>";
        contenedor.innerHTML=books;
    }
}
libros.listarLibros();
