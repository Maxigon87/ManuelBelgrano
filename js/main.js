(function ($) {
    "use strict";

    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $(".navbar .dropdown")
                    .on("mouseover", function () {
                        $(".dropdown-toggle", this).trigger("click");
                    })
                    .on("mouseout", function () {
                        $(".dropdown-toggle", this).trigger("click").blur();
                    });
            } else {
                $(".navbar .dropdown").off("mouseover").off("mouseout");
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".back-to-top").fadeIn("slow");
        } else {
            $(".back-to-top").fadeOut("slow");
        }
    });
    $(".back-to-top").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
        return false;
    });

    // Date and time picker
    $("#date").datetimepicker({
        format: "L",
    });
    $("#time").datetimepicker({
        format: "LT",
    });

    // Service carousel
    $(".service-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>',
        ],
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
        },
    });

    // Team carousel
    $(".team-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>',
        ],
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            },
        },
    });

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        center: true,
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        dots: true,
        loop: true,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
        },
    });
})(jQuery);

//Contraseña para ingresar a docentes
function verificarClave() {
    const clave = prompt("Por favor, ingresa la contraseña para acceder:");

    if (clave === null || clave === "") {
        // Si el usuario hace clic en Cancelar o no ingresa nada
        alert("Acceso denegado. No se proporcionó la contraseña.");
        return; // Sale de la función sin hacer nada
    }

    if (clave === "3escuelas2025") {
        // Redirige si la clave es correcta
        window.location.href = "docentes.html";
    } else {
        alert("Contraseña incorrecta. Acceso denegado.");
    }
}

//Click globo emergente en drive
function mostrarGlobo() {
    const globo = document.getElementById("globo");
    globo.classList.toggle("show-tooltip");
}

//fecha de index

const fecha = new Date();
const dia = String(fecha.getDate()).padStart(2, "0");
const mes = String(fecha.getMonth() + 1).padStart(2, "0");
const año = String(fecha.getFullYear()).slice(-2);
document.getElementById("fecha").textContent = `${dia}/${mes}/${año}`;

//Cartel de envio de formulario
const form = document.getElementById("contactForm");
const messageDiv = document.getElementById("form-message");

form.addEventListener("submit", function (event) {
    if (form.checkValidity()) {
        // No evitamos el submit real
        messageDiv.style.display = "block"; // Mostramos el cartel
        // Y dejamos que el navegador siga su curso, Netlify lo captura
    } else {
        event.preventDefault(); // Solo prevenimos si hay errores
    }
});

