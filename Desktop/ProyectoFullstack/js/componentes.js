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
                        <a class="nav-link active" href="Inicio.html">
                            Inicio
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="productos.html">
                            Productos
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="ingresa.html">
                            Mi cuenta
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="compras.html">
                            Carrito (0)
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
        <footer class="bg-dark text-white py-4">

            <div class="container">

                <div class="row">

                    <div class="col-md-6">
                        <h5>GameTech</h5>

                        <p>
                            Hardware, accesorios y videojuegos
                            para todos los gamers.
                        </p>
                    </div>

                    <div class="col-md-6 text-md-end">
                        <h5>Contacto</h5>

                        <p class="mb-0">
                            contacto@mystore.cl
                        </p>

                        <p>
                            Viña del Mar, Chile
                        </p>
                    </div>

                </div>

                <hr>

                <p class="text-center mb-0">
                    &copy; 2026 GameTech. Todos los derechos reservados.
                </p>

            </div>

        </footer>
    `;
}

cargarNavbar();
cargarFooter();