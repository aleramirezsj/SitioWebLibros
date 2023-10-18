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
                    <h4>${libro.nombre}</h4>
                    <h5>Autor:${libro.autor}</h5>
                    <h5>Género:${libro.genero}</h5>
                    <details>
                        <summary>Mas info</summary>
                        Sinopsis:${libro.sinopsis}<br/>
                        Páginas:${libro.paginas}<br/>
                        Editorial:${libro.editorial}
                    </details>
                    <a href="#" onclick="applibros.editarLibro('${libro._id}')">Editar</a>

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
        fetch(urlApi, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevoLibro)
            })  
            .then(response => {
              console.log(response);
              window.location.href="index.html";
              //return movies.obtenerTodos();
            });
    },
    editarLibro:(idLibroAEditar)=>{
        const urlApi=`https://biblioisp20-92ed.restdb.io/rest/libros/${idLibroAEditar}?apikey=64f8c70b68885429270bfe7d`;

        fetch(urlApi
            ).then(res => res.json())
              .then(libro => {
                document.getElementById("txtNombre").value=libro.nombre;
                document.getElementById("txtPaginas").value=libro.paginas;

              });
    }
}
applibros.listarLibros();
