document.addEventListener("DOMContentLoaded", function() {
    const botonesCategoria = document.querySelectorAll('.btn-categoria');
    const seleccionImagen = document.getElementById('seleccion-imagen');
    const opcionesImagen = document.querySelectorAll('.opcion-imagen');
    const personalizacionTarjeta = document.getElementById('personalizacion-tarjeta');
    const vistaPreviaTarjeta = document.getElementById('vista-previa-tarjeta');
    const tarjeta = document.getElementById('tarjeta');
    const imagenTarjeta = document.getElementById('imagen-tarjeta');
    const mensajeTarjeta = document.getElementById('mensaje-tarjeta');
    const nombreTarjeta = document.getElementById('nombre-tarjeta');
    const colorFondoInput = document.getElementById('color-fondo');
    const tamanoLetraInput = document.getElementById('tamano-letra');
    const colorLetraInput = document.getElementById('color-letra');
    const tipoLetraInput = document.getElementById('tipo-letra');
    const mensajeInput = document.getElementById('mensaje');
    const nombreInput = document.getElementById('nombre');

    botonesCategoria.forEach(boton => {
        boton.addEventListener('click', function() {
            const categoriaSeleccionada = this.getAttribute('data-categoria');
            seleccionImagen.style.display = 'block';

            opcionesImagen.forEach(imagen => {
                imagen.style.display = imagen.classList.contains(categoriaSeleccionada) ? 'inline' : 'none';
            });
        });
    });

    opcionesImagen.forEach(imagen => {
        imagen.addEventListener('click', function() {
            imagenTarjeta.src = this.src;
            personalizacionTarjeta.style.display = 'block';
            vistaPreviaTarjeta.style.display = 'block';
        });
    });

    mensajeInput.addEventListener('input', function() {
        mensajeTarjeta.textContent = this.value;
    });

    nombreInput.addEventListener('input', function() {
        nombreTarjeta.textContent = "De: " + this.value;
    });

    colorFondoInput.addEventListener('input', function() {
        tarjeta.style.backgroundColor = this.value;
    });

    tamanoLetraInput.addEventListener('input', function() {
        mensajeTarjeta.style.fontSize = this.value + 'px';
        nombreTarjeta.style.fontSize = this.value + 'px';
    });

    colorLetraInput.addEventListener('input', function() {
        mensajeTarjeta.style.color = this.value;
        nombreTarjeta.style.color = this.value;
    });

    tipoLetraInput.addEventListener('change', function() {
        const fuenteSeleccionada = this.value;
        mensajeTarjeta.style.fontFamily = fuenteSeleccionada;
        nombreTarjeta.style.fontFamily = fuenteSeleccionada;
    });
});
