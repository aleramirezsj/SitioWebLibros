console.log("el archivo javascript ya está importado");

const urlApi="https://biblioisp20-92ed.restdb.io/rest/libros?apikey=64f8c70b68885429270bfe7d";

const applibros = {
    listarLibros: ()=>{
        //tomamos la referencia del contenedor donde se mostrarán los libros
        const contenedor=document.getElementById("contenedorLibros");
        
        //cremos una variable vacía que contendrá todo el código HTML que vamos a insertar
        let contenidoHTML = "";
        
        fetch(urlApi)
        .then(respuesta=>respuesta.json())
        .then(libros=>{
            console.log(libros);

            for (const libro of libros) {
                contenidoHTML += `
                <div>
                    <img src="${libro.portada_url}" class="img-thumbnail"/>
                    <details>
                        <summary>${libro.nombre}</summary>
                        ${libro.sinopsis}
                    </details>

                </div>
                `;
            };
            contenedor.innerHTML=contenidoHTML;
        })
        
    },
    agregarLibro: ()=>{
        const txtNombre=document.getElementById("txtNombre");
        const txtPaginas=document.getElementById("txtPaginas");
        const txtAutor=document.getElementById("txtAutor");
        const txtEditorial=document.getElementById("txtEditorial");
        const txtPortadaUrl=document.getElementById("txtPortadaUrl");
        const txtSinopsis=document.getElementById("txtSinopsis");
        const txtGenero=document.getElementById("txtGenero");
        
        const nuevoLibro = {
            "nombre": txtNombre.value,
            "paginas": txtPaginas.value,
            "autor": txtAutor.value,
            "editorial": txtEditorial.value,
            "portada_url": txtPortadaUrl.value,
            "sinopsis": txtSinopsis.value,
            "genero": txtGenero.value
          };  
        console.log(nuevoLibro);  
    }
}
applibros.listarLibros();
