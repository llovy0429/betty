//==========================================================================================================================================================
//Preparar documento
//==========================================================================================================================================================
{
var fechaDesbloqueo = []

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('pagina-container');
    let paginaActual = 1; // Variable para rastrear la página actual
    
    if (typeof datos !== 'undefined' && Array.isArray(datos)) {
        let cont = 1;
        datos.forEach(item => {
            const pagina = document.createElement('div');
            pagina.className = "pagina";
            pagina.setAttribute("id", "pagina" + cont);
            pagina.setAttribute('style', 'background:#f1941a url('+seleccionarAleatorio(fondos)+');background-size: cover; background-repeat: no-repeat;')
            
            // Solo la primera página será visible inicialmente
            pagina.style.display = "none";
            
            container.appendChild(pagina);
            fechaDesbloqueo[cont-1] = item.fecha;
            crear_pagina(pagina, item.texto, cont);
            cont++;
        });
        
        // Configurar navegación
        const paginaInicial = encontrarPaginaInicial();
        paginaActual = paginaInicial;
        document.getElementById("pagina" + paginaInicial).style.display = "flex";
        configurarNavegacion(datos.length);
        
    } else {
        container.textContent = 'No hay datos disponibles. Verifique el archivo config.js.';
    }
    
    function configurarNavegacion(totalPaginas) {
    const btnAnterior = document.getElementById('btnAnterior');
    const btnSiguiente = document.getElementById('btnSiguiente');
    
    // Función para animar el texto de la página actual
    function animarTextoPaginaActual() {
        const pagina = document.getElementById("pagina" + paginaActual);
        const textoElement = pagina.querySelector(".texto-animado");
        
        if (textoElement && textoElement.dataset.textoOriginal) {
            // Solo animar si el contenido está visible (no bloqueado)
            const contenidoBloqueado = document.getElementById("contenidoBloqueado" + paginaActual);
            if (contenidoBloqueado && contenidoBloqueado.style.display !== "block") {
                animar_texto(textoElement.dataset.textoOriginal, "textoAnimado" + paginaActual);
            }
        }
    }
    
    // Actualizar estado inicial de botones y animar primera página
    actualizarBotones();
    setTimeout(animarTextoPaginaActual, 100); // Pequeño delay para asegurar que el DOM esté listo
    
    btnAnterior.addEventListener('click', function() {
        if (paginaActual > 1) {
            // Ocultar página actual
            document.getElementById("pagina" + paginaActual).style.display = "none";
            paginaActual--;
            
            // Mostrar página anterior
            document.getElementById("pagina" + paginaActual).children[0].children[2].innerHTML = '';
            document.getElementById("pagina" + paginaActual).style.display = "flex";
            
            // Animar texto de la nueva página
            setTimeout(animarTextoPaginaActual, 100);
            
            // Actualizar estado de botones
            actualizarBotones();
        }
    });
    
    btnSiguiente.addEventListener('click', function() {
        if (paginaActual < totalPaginas) {
            // Ocultar página actual
            document.getElementById("pagina" + paginaActual).style.display = "none";
            paginaActual++;
            
            // Mostrar página siguiente
            document.getElementById("pagina" + paginaActual).children[0].children[2].innerHTML = '';
            document.getElementById("pagina" + paginaActual).style.display = "flex";
            
            // Animar texto de la nueva página
            setTimeout(animarTextoPaginaActual, 100);
            
            // Actualizar estado de botones
            actualizarBotones();
        }
    });
    
    function actualizarBotones() {
        // Deshabilitar botón anterior si estamos en la primera página
        btnAnterior.disabled = (paginaActual === 1);
        
        // Deshabilitar botón siguiente si estamos en la última página
        // O si estamos en la página 18 y es antes del 14 de febrero de 2026
        const fechaActual = new Date();
        fechaActual.setHours(0, 0, 0, 0);
        
        if (paginaActual === totalPaginas) {
            // Última página - deshabilitar siguiente
            btnSiguiente.disabled = true;
        } else if (fechaActual < new Date('2026-02-14') && paginaActual === 18) {
            // Página 18 y es antes del 14 de febrero 2026
            btnSiguiente.disabled = true;
        } else {
            btnSiguiente.disabled = false;
        }
    }
    
    verificarFechasDesbloqueo();
}
});
}
//==========================================================================================================================================================
//==========================================================================================================================================================

//==========================================================================================================================================================
//Crear pagina
//==========================================================================================================================================================
{
function crear_pagina(pagina, texto, cont) {
    //crear contenido real
    const contenido = document.createElement('div');
    const text = document.createElement('div');
    const fecha_pagina = document.createElement('div');
    contenido.className = "contenido";
    text.className = "texto-animado";
    fecha_pagina.className = "fecha-pagina";
    fecha_pagina.setAttribute("id", "fechaPagina" + cont);
    fecha_pagina.textContent = formatearFecha(fechaDesbloqueo[cont-1]);
    text.setAttribute("id", "textoAnimado" + cont); // Agregar ID único para cada texto
    pagina.appendChild(contenido);
    contenido.appendChild(agregar_animacion());
    contenido.appendChild(fecha_pagina)
    contenido.appendChild(text);
    // Guardar el texto para animarlo después
    text.dataset.textoOriginal = texto;
    
    //crear contenido bloqueado
    const contenido_bloqueado = document.createElement('div');
    pagina.appendChild(contenido_bloqueado);
    contenido_bloqueado.setAttribute("id", "contenidoBloqueado" + cont);
    contenido_bloqueado.className = "bloqueado";
    
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const p4 = document.createElement('p');
    const dias = document.createElement('div');
    
    p1.textContent = "Esta página estará disponible a partir del:";
    contenido_bloqueado.appendChild(p1);
    p2.textContent = formatearFecha(fechaDesbloqueo[cont-1]);
    contenido_bloqueado.appendChild(p2);
    p3.textContent = "Faltan:";
    contenido_bloqueado.appendChild(p3);
    dias.className = "dias-faltantes";
    dias.setAttribute("id", "diasFaltantes" + cont);
    contenido_bloqueado.appendChild(dias);
    p4.textContent = "para que puedas ver este mensaje.";
    contenido_bloqueado.appendChild(p4);
}

function agregar_animacion(){
    const animacion = document.createElement('dotlottie-wc');
    animacion.setAttribute('src', seleccionarAleatorio(animations));
    animacion.className = 'pagina-animacion';
    //animacion.setAttribute('style', "width: 100px;height: 100px");
    animacion.setAttribute('autoplay', '');
    animacion.setAttribute('loop', '');
    return animacion
}    

function formatearFecha(fechaStr) {
    const partes = fechaStr.split('-');
    if (partes.length === 3) {
        let mes;
        if(partes[1] === "01"){mes = "Enero"}
        if(partes[1] === "02"){mes = "Febrero"}
        if(partes[1] === "03"){mes = "Marzo"}
        if(partes[1] === "04"){mes = "Abril"}
        if(partes[1] === "05"){mes = "Mayo"}
        if(partes[1] === "06"){mes = "Junio"}
        if(partes[1] === "07"){mes = "Julio"}
        if(partes[1] === "08"){mes = "Agosto"}
        if(partes[1] === "09"){mes = "Septiebre"}
        if(partes[1] === "10"){mes = "Octubre"}
        if(partes[1] === "11"){mes = "Noviembre"}
        if(partes[1] === "12"){mes = "Diciembre"}
        
        return `${partes[2]} de ${mes} del ${partes[0]}`;
    }
    return fechaStr; // Devolver original si no tiene el formato esperado
}

function verificarFechasDesbloqueo() {
    const fechaActual = new Date();
    fechaActual.setHours(0, 0, 0, 0);
    
    datos.forEach((item, index) => {
        const fechaDesbloqueoDate = new Date(item.fecha);
        fechaDesbloqueoDate.setHours(0, 0, 0, 0);
        
        const pagina = document.getElementById("pagina" + (index + 1));
        const contenido = pagina.querySelector(".contenido");
        const contenidoBloqueado = document.getElementById("contenidoBloqueado" + (index + 1));
        
        if (fechaActual >= fechaDesbloqueoDate) {
            contenido.style.display = "block";
            contenidoBloqueado.style.display = "none";
        } else {
            contenido.style.display = "none";
            contenidoBloqueado.style.display = "block";
            actualizarContadorRegresivo(item.fecha, index + 1);
        }
    });
}

function actualizarContadorRegresivo(fechaStr, numeroPagina) {
    const fechaDesbloqueo = new Date(fechaStr);
    const diasElement = document.getElementById("diasFaltantes" + numeroPagina);
    
    function actualizar() {
        const ahora = new Date();
        const diferencia = fechaDesbloqueo - ahora;
        
        if (diferencia <= 0) {
            const pagina = document.getElementById("pagina" + numeroPagina);
            const contenido = pagina.querySelector(".contenido");
            const contenidoBloqueado = document.getElementById("contenidoBloqueado" + numeroPagina);
            
            contenido.style.display = "block";
            contenidoBloqueado.style.display = "none";
            diasElement.textContent = "¡Ya está disponible!";
            return;
        }
        
        const dias = Math.ceil(diferencia / (1000 * 60 * 60 * 24));
        diasElement.textContent = dias + (dias === 1 ? " día" : " días");
        setTimeout(actualizar, 1000 * 60 * 60);
    }
    
    actualizar();
}

function encontrarPaginaInicial() {
    const fechaActual = new Date();
    fechaActual.setHours(0, 0, 0, 0);
    
    let paginaMasCercana = 1; // Por defecto, la primera página
    let diferenciaMinima = Infinity; // Inicializar con un valor muy grande
    
    for (let i = 0; i < datos.length; i++) {
        const fechaDesbloqueoDate = new Date(datos[i].fecha);
        fechaDesbloqueoDate.setHours(0, 0, 0, 0);
        
        // Si la fecha ya pasó, esta página está desbloqueada
        if (fechaActual >= fechaDesbloqueoDate) {
            // Calcular diferencia en días (positiva porque ya pasó)
            const diferenciaDias = Math.abs(fechaActual - fechaDesbloqueoDate);
            
            // Si esta página está más cerca que la anterior encontrada
            if (diferenciaDias < diferenciaMinima) {
                diferenciaMinima = diferenciaDias;
                paginaMasCercana = i; // +1 porque las páginas empiezan en 1
            }
        }
    }
    
    // Si encontramos al menos una página desbloqueada, devolver la más cercana
    // Si ninguna está desbloqueada (diferenciaMinima sigue siendo Infinity), devolver la primera
    return paginaMasCercana;
}
}
//==========================================================================================================================================================
//==========================================================================================================================================================

//==========================================================================================================================================================
//Animaciones
//==========================================================================================================================================================
{
function seleccionarAleatorio(array) {
    if (!array || array.length === 0) {
        return null;
    }
    const indiceAleatorio = Math.floor(Math.random() * array.length);
    return array[indiceAleatorio];
}

function animar_texto(texto, texto_animado_id) {
    const contenedor = document.getElementById(texto_animado_id);
    if (!contenedor) return;
    
    // Limpiar contenedor
    contenedor.innerHTML = '';
    
    // Contador lineal de letras (sin importar palabras)
    let contadorLetras = 0;
    
    const palabras = texto.split(' ');
    
    palabras.forEach((palabra, palabraIndex) => {
        // Contenedor para palabra completa
        const palabraSpan = document.createElement('span');
        palabraSpan.className = 'palabra-animada-container';
        palabraSpan.style.display = 'inline-block';
        palabraSpan.style.whiteSpace = 'nowrap';
        
        // Añadir letras con retardo lineal
        for (let i = 0; i < palabra.length; i++) {
            const letraSpan = document.createElement('span');
            letraSpan.className = 'letra-animada';
            letraSpan.textContent = palabra[i];
            letraSpan.style.display = 'inline-block';
            letraSpan.style.opacity = '0';
            letraSpan.style.transform = 'translate(-3px,-20px)';
            letraSpan.style.transition = 'all 0.3s ease';
            
            // Retardo LINEAL - cada letra tiene su propio delay secuencial
            letraSpan.style.transitionDelay = `${contadorLetras * 0.08}s`;
            contadorLetras++;
            
            palabraSpan.appendChild(letraSpan);
        }
        
        contenedor.appendChild(palabraSpan);
        
        // Añadir espacio (usando un span especial)
        if (palabraIndex < palabras.length - 1) {
            const espacio = document.createElement('span');
            espacio.className = 'espacio-animado';
            espacio.innerHTML = '&nbsp;';
            espacio.style.whiteSpace = 'nowrap';
            
            // El espacio también se anima
            espacio.style.opacity = '0';
            espacio.style.transform = 'translateY(20px)';
            espacio.style.transition = 'all 0.3s ease';
            espacio.style.transitionDelay = `${contadorLetras * 0.08}s`;
            contadorLetras++;
            
            contenedor.appendChild(espacio);
        }
    });
    
    // Animar TODAS las letras y espacios
    setTimeout(() => {
        const elementos = contenedor.querySelectorAll('.letra-animada, .espacio-animado');
        elementos.forEach(elemento => {
            elemento.style.opacity = '1';
            elemento.style.transform = 'translateY(0)';
        });
    }, 500);
}
}
//==========================================================================================================================================================
//==========================================================================================================================================================




