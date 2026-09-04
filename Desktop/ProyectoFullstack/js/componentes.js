function cargarNavbar(){
    if(!navbar) return;

    navbar.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand fw-bold" href="inicio.html">
                <h1>Sonido Vivo</h1>
            </a>

            <div>
                <ul class="navbar-nav">
                    <li class="nav-item text">
                        <a class="nav-link" href="Inicio.html">
                            Inicio
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="productos.html">
                            Productos
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="compras.html">
                            Carrito (0)
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="administrador.html">
                            Administrador
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    `;

    marcarPaginaActual();

    function marcarPaginaActual() {
    const paginaActual = window.location.pathname.split("/").pop() || "index.html";

    const enlaces = document.querySelectorAll("#navbar .nav-link");

    enlaces.forEach(enlace => {
        const paginaEnlace = enlace.getAttribute("href");

        if (paginaEnlace === paginaActual) {
            enlace.classList.add("active");
            enlace.setAttribute("aria-current", "page");
        }
    });
}
}

function cargarFooter(){
    const footer = document.querySelector("#footer");
    if (!footer) return;

    footer.innerHTML = `
        <footer class="footer-border p-5  bg-dark">
        <ul>
            <li>
                <a href="https://maps.app.goo.gl/gZx5wtMMATmcMQdz8">
                    <p style="color: #ffffff;">
                        Encuéntranos aqui:
                    </p>
                </a>
            </li>
                    <p style="color: #FFFFFF;">
                        2354 Álvarez Viña del Mar, Valparaíso
                    </p>
            <li>
                <p style="color: #ffffff;">
                    &copy; Sonido vivo | Todos los derechos reservados
                </p>
            </li>
        </ul>
    </footer>
    `;
}

cargarNavbar();
cargarFooter();