//==========================================================================================================================================================
        //Fondo body corazones animados
        //==========================================================================================================================================================
        var love = setInterval(function(){
          var r_num = Math.floor(Math.random() * 40) + 1;
          var r_size = Math.floor(Math.random() * 65) + 10;
          var r_left = Math.floor(Math.random() * 100) + 1;
          var r_bg = Math.floor(Math.random() * 25) + 100;
          var r_time = Math.floor(Math.random() * 5) + 5;

          $('.bg_heart').append("<div class='heart' style='width:"+r_size+"px;height:"+r_size+"px;left:"+r_left+"%;background:rgba(255,"+(r_bg-25)+","+r_bg+",1);-webkit-animation:love "+r_time+"s ease;-moz-animation:love "+r_time+"s ease;-ms-animation:love "+r_time+"s ease;animation:love "+r_time+"s ease'></div>");

          $('.bg_heart').append("<div class='heart' style='width:"+(r_size-10)+"px;height:"+(r_size-10)+"px;left:"+(r_left+r_num)+"%;background:rgba(255,"+(r_bg-25)+","+(r_bg+25)+",1);-webkit-animation:love "+(r_time+5)+"s ease;-moz-animation:love "+(r_time+5)+"s ease;-ms-animation:love "+(r_time+5)+"s ease;animation:love "+(r_time+5)+"s ease'></div>");

          $('.heart').each(function(){
            var top = $(this).css("top").replace(/[^-\d\.]/g, '');
            var width = $(this).css("width").replace(/[^-\d\.]/g, '');
            if(top <= -100 || width >= 150){
              $(this).detach();
            }
          });
        },500);
        //==========================================================================================================================================================
        //==========================================================================================================================================================

        //==========================================================================================================================================================
        //Bloque de paginado
        //==========================================================================================================================================================
        {
        // Configuración de fechas de desbloqueo
        const fechasDesbloqueo = [
            new Date('2000-01-01'), // Página 1 - siempre visible (fecha pasada)
            new Date('2025-02-01'), // Página 2 - 1 de febrero
            new Date('2025-02-02'), // Página 3 - 2 de febrero
            new Date('2025-02-03')  // Página 4 - 3 de febrero
        ];
        
        const paginas = document.querySelectorAll('.pagina');
        const btnSiguiente = document.getElementById('btnSiguiente');
        const btnAnterior = document.getElementById('btnAnterior');
        const indicadores = document.getElementById('indicadores');
        let paginaActual = 0;
        
        // Función para verificar si una página está desbloqueada
        function estaDesbloqueada(numeroPagina) {
            const fechaDesbloqueo = fechasDesbloqueo[numeroPagina];
            const hoy = new Date();
            
            // Establecer horas a 0 para comparar solo días
            const hoySinHora = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate());
            const fechaDesbloqueoSinHora = new Date(
                fechaDesbloqueo.getFullYear(), 
                fechaDesbloqueo.getMonth(), 
                fechaDesbloqueo.getDate()
            );
            
            return hoySinHora >= fechaDesbloqueoSinHora;
        }
        
        // Función para calcular días faltantes
        function calcularDiasFaltantes(numeroPagina) {
            const fechaDesbloqueo = fechasDesbloqueo[numeroPagina];
            const hoy = new Date();
            
            // Establecer horas a 0 para cálculo preciso
            const hoySinHora = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate());
            const fechaDesbloqueoSinHora = new Date(
                fechaDesbloqueo.getFullYear(), 
                fechaDesbloqueo.getMonth(), 
                fechaDesbloqueo.getDate()
            );
            
            const diferenciaMs = fechaDesbloqueoSinHora - hoySinHora;
            const diasFaltantes = Math.ceil(diferenciaMs / (1000 * 60 * 60 * 24));
            
            return diasFaltantes > 0 ? diasFaltantes : 0;
        }
        
        // Función para actualizar el contenido según la fecha
        function actualizarContenidoPorFecha() {
            for (let i = 0; i < paginas.length; i++) {
                const bloqueado = document.getElementById(`contenidoBloqueado${i+1}`);
                const real = document.getElementById(`contenidoReal${i+1}`);
                const diasElement = document.getElementById(`diasFaltantes${i+1}`);
                
                // Para la página 1, siempre mostrar contenido real
                if (i === 0) {
                    if (bloqueado) bloqueado.style.display = 'none';
                    if (real) real.style.display = 'block';
                } else {
                    if (estaDesbloqueada(i)) {
                        // Mostrar contenido real
                        if (bloqueado) bloqueado.style.display = 'none';
                        if (real) real.style.display = 'block';
                    } else {
                        // Mostrar mensaje de "próximamente"
                        if (bloqueado) bloqueado.style.display = 'block';
                        if (real) real.style.display = 'none';
                        
                        // Actualizar contador de días
                        if (diasElement) {
                            const diasFaltantes = calcularDiasFaltantes(i);
                            diasElement.textContent = `${diasFaltantes} día${diasFaltantes !== 1 ? 's' : ''}`;
                        }
                    }
                }
            }
        }
        
        // Crear indicadores
        function crearIndicadores() {
            indicadores.innerHTML = '';
            paginas.forEach((_, index) => {
                const indicador = document.createElement('div');
                indicador.className = 'indicador';
                
                if (index === paginaActual) {
                    indicador.classList.add('activo');
                }
                
                // Marcar indicadores de páginas pendientes
                if (index > 0 && !estaDesbloqueada(index)) {
                    indicador.classList.add('pendiente');
                }
                
                indicador.addEventListener('click', () => irAPagina(index));
                indicadores.appendChild(indicador);
            });
        }
        
        // Ir a una página específica
        function irAPagina(numero) {
            // Ocultar todas las páginas
            paginas.forEach(pagina => {
                pagina.classList.remove('activa');
            });
            
            // Mostrar la página solicitada
            paginas[numero].classList.add('activa');
            paginaActual = numero;
            
            // Actualizar botones
            btnAnterior.style.display = paginaActual === 0 ? 'none' : 'flex';
            btnSiguiente.style.display = paginaActual === paginas.length - 1 ? 'none' : 'flex';
            
            // Actualizar indicadores
            document.querySelectorAll('.indicador').forEach((ind, index) => {
                ind.classList.toggle('activo', index === numero);
            });
        }
        
        // Siguiente página
        btnSiguiente.addEventListener('click', () => {
            if (paginaActual < paginas.length - 1) {
                irAPagina(paginaActual + 1);
            }
        });
        
        // Página anterior
        btnAnterior.addEventListener('click', () => {
            if (paginaActual > 0) {
                irAPagina(paginaActual - 1);
            }
        });
        
        // Navegación con teclado
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight' && paginaActual < paginas.length - 1) {
                irAPagina(paginaActual + 1);
            } else if (e.key === 'ArrowLeft' && paginaActual > 0) {
                irAPagina(paginaActual - 1);
            }
        });
        
        // Actualizar el contador cada día
        function actualizarContadoresDiarios() {
            actualizarContenidoPorFecha();
            crearIndicadores();
            
            // Recalcular cada 24 horas
            setTimeout(actualizarContadoresDiarios, 24 * 60 * 60 * 1000);
        }
        
        // Inicializar
        actualizarContenidoPorFecha();
        crearIndicadores();
        irAPagina(0);
        
        // Iniciar actualización diaria
        actualizarContadoresDiarios();
        }
        //==========================================================================================================================================================
        //==========================================================================================================================================================     

        //==========================================================================================================================================================
        //Animacion de texto
        //==========================================================================================================================================================
        {
            function animar_texto(texto, texto_animado){
            const contenedor = document.getElementById(texto_animado);
            
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
                document.querySelectorAll('.letra-animada, .espacio-animado').forEach(elemento => {
                    elemento.style.opacity = '1';
                    elemento.style.transform = 'translateY(0)';
                });
            }, 500);
            }
            const txt_page1 = "Para ti, en quien mi mundo encuentra su razón de ser. Acompañame en estos 30 días de pensmientos, agradecimientos, recuerdos y deseos para nuestro futuro.";
            animar_texto(txt_page1, "txt_page1")
        }
        //==========================================================================================================================================================
        //==========================================================================================================================================================

        //==========================================================================================================================================================
        //Script loader
        //==========================================================================================================================================================
        {
        let resourcesLoaded = false;
        let loaderHidden = false;
        const criticalResources = [
            'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css',
            'https://code.jquery.com/jquery-3.6.0.min.js'
        ];
        let loadedCount = 0;
        function checkResourceLoaded(url) {
            return new Promise((resolve) => {
                if (url.endsWith('.css')) {
                    const links = document.querySelectorAll(`link[href="${url}"]`);
                    if (links.length > 0) {
                        links[0].onload = () => {
                            loadedCount++;
                            resolve();
                        };
                        links[0].onerror = () => {
                            console.warn(`Error cargando: ${url}`);
                            loadedCount++;
                            resolve();
                        };
                    }
                }
                else if (url.endsWith('.js')) {
                    const scripts = document.querySelectorAll(`script[src="${url}"]`);
                    if (scripts.length > 0) {
                        scripts[0].onload = () => {
                            loadedCount++;
                            resolve();
                        };
                        scripts[0].onerror = () => {
                            console.warn(`Error cargando: ${url}`);
                            loadedCount++;
                            resolve();
                        };
                    }
                }
            });
        }
        function hideLoader() {
            if (!loaderHidden) {
                const loader = document.getElementById('loader');
                loader.classList.add('hidden');
                document.body.classList.add('loaded');
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 500);
                
                loaderHidden = true;
            }
        }
        async function loadCriticalResources() {
            const promises = criticalResources.map(url => checkResourceLoaded(url));
            await Promise.allSettled(promises);
            console.log(`Recursos cargados: ${loadedCount}/${criticalResources.length}`);
            resourcesLoaded = true;
            hideLoader();
        }
        function startTimeout() {
            const maxWaitTime = 20000; // 10 segundos máximo
            setTimeout(() => {
                if (!resourcesLoaded) {
                    console.log('Tiempo máximo alcanzado, ocultando loader');
                    hideLoader();
                }
            }, maxWaitTime);
        }
        document.addEventListener('DOMContentLoaded', () => {
            console.log('DOM cargado');
        });
        window.addEventListener('load', () => {
            console.log('Todos los recursos cargados');
            if (!loaderHidden) {
                hideLoader();
            }
        });
        window.addEventListener('load', loadCriticalResources);
        startTimeout();
        function checkImagesLoaded() {
            const images = document.querySelectorAll('img');
            let imagesLoaded = 0;
            images.forEach(img => {
                if (img.complete) {
                    imagesLoaded++;
                } else {
                    img.addEventListener('load', () => {
                        imagesLoaded++;
                        if (imagesLoaded === images.length) {
                            console.log('Todas las imágenes cargadas');
                        }
                    });
                    img.addEventListener('error', () => {
                        imagesLoaded++;
                        console.warn('Error cargando imagen:', img.src);
                    });
                }
            });
        }
        document.addEventListener('DOMContentLoaded', checkImagesLoaded);
        }