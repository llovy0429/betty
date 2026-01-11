//==========================================================================================================================================================
//generar listado de paginas dinamicas
//==========================================================================================================================================================
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
        actualizarBotones();
        
    } else {
        container.textContent = 'No hay datos disponibles. Verifique el archivo config.js.';
    }
    
    function configurarNavegacion(totalPaginas) {
    const btnAnterior = document.getElementById('btnAnterior');
    const btnSiguiente = document.getElementById('btnSiguiente');
    
    // Actualizar estado inicial de botones
    actualizarBotones();
    
    btnAnterior.addEventListener('click', function() {
        if (paginaActual > 1) {
            // Ocultar página actual
            document.getElementById("pagina" + paginaActual).style.display = "none";
            paginaActual--;
            
            // Mostrar página anterior
            document.getElementById("pagina" + paginaActual).style.display = "flex";
            
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
            document.getElementById("pagina" + paginaActual).style.display = "flex";
            
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

function crear_pagina(pagina, texto, cont) {
    //crear contenido real
    const contenido = document.createElement('div');
    const text = document.createElement('div');
    contenido.className = "contenido";
    text.className = "texto-animado";
    text.textContent = texto;
    pagina.appendChild(contenido);
    contenido.appendChild(text);
    
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

function formatearFecha(fechaStr) {
    const partes = fechaStr.split('-');
    if (partes.length === 3) {
        let mes;
        if(partes[1] === "01"){mes = "enero"}
        if(partes[1] === "02"){mes = "febrero"}
        if(partes[1] === "03"){mes = "marzo"}
        if(partes[1] === "04"){mes = "abril"}
        if(partes[1] === "05"){mes = "mayo"}
        if(partes[1] === "06"){mes = "junio"}
        if(partes[1] === "07"){mes = "julio"}
        if(partes[1] === "08"){mes = "agosto"}
        if(partes[1] === "09"){mes = "septiebre"}
        if(partes[1] === "10"){mes = "octubre"}
        if(partes[1] === "11"){mes = "noviembre"}
        if(partes[1] === "12"){mes = "diciembre"}
        
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
                paginaMasCercana = i + 1; // +1 porque las páginas empiezan en 1
            }
        }
    }
    
    // Si encontramos al menos una página desbloqueada, devolver la más cercana
    // Si ninguna está desbloqueada (diferenciaMinima sigue siendo Infinity), devolver la primera
    return paginaMasCercana;
}



//==========================================================================================================================================================
//==========================================================================================================================================================



