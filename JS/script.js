// MENU


function changeOpacity() {
    var scroll = $(window).scrollTop();
    var menu = $("#menu").height();
    var max_scroll = $(window).height() - menu;

    if (scroll <= max_scroll) {
        var opacity = scroll / max_scroll;
        $("#menu").css("background-color", "rgba(200, 16, 46, " + opacity + ")"); 
    } else {
        $("#menu").css("background-color", "rgb(200, 16, 46)");
    }
}

$(document).ready(function() {
    $(window).on("scroll", function() {
        changeOpacity();
    });
});

$(document).ready(function() {
    $(window).on("scroll", function() {
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();

        if (scroll > windowHeight * 0.5) {
            $(".logo").attr("src", "MEDIA/IMG/logo peru.png");

            $("#menu  a").css("color", "white");

        } else {
            $(".logo").attr("src", "MEDIA/IMG/logo_peru_rojo.png");
            
            $("#menu  a").css("color", "rgb(200, 16, 46)");
        }
    });
});


// VENTANA MODAL JS 

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const imgGrande = document.getElementById("imgGrande");
  const fotos = document.querySelectorAll(".foto");

  fotos.forEach((foto) => {
    foto.addEventListener("click", () => {
      modal.style.display = "block";
      imgGrande.src = foto.src;
    });
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});


// TABLAS DE GRAFICO - CHARTS JS

//CLIMA 

document.addEventListener("DOMContentLoaded", () => {

    const ctxClima = document.getElementById('chartclima').getContext('2d');

    const namesClima = [
        'Enero','Febrero','Marzo','Abril','Mayo','Junio',
        'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'
    ];

    const weather = [26, 25, 23, 25, 22, 24, 18, 26, 22, 22, 23, 26];
    const tempMin = [8, 8, 8, 6, 4, 5, 4, 4, 8, 8, 8, 8];

     new Chart(ctxClima, {
        type: 'bar',
        data: {
            labels: namesClima,
            datasets: [
                {
                label: 'Temperatura máxima (°C)',
                data: weather,
                backgroundColor:  'rgba(200, 16, 47, 0.64)',
                borderColor: 'rgb(200, 16, 47)',
                borderWidth: 1.5
                },
                {
                label: 'Temperatura mínima (°C)',
                data: tempMin,
                backgroundColor: 'rgba(16, 47, 200, 0.64)',
                 borderColor: 'rgb(16, 47, 200)',
                borderWidth: 1.5
                }
            ]
        },
        options: {
            responsive: true,
        }
    });
});


// CONCURRENCIA 


document.addEventListener("DOMContentLoaded", () => {
    
    const ctxPersonas = document.getElementById('chart-personas').getContext('2d');
    
    const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    
    const visitantes = [1, 2, 1, 3, 4, 5, 5];

    new Chart(ctxPersonas, {
        type: 'line',
        data: {
            labels: dias,
            datasets: [{
                label: 'Visitantes Diarios (en miles)',
                data: visitantes,
                backgroundColor:  'rgba(200, 16, 47, 0.56)',
                borderColor: 'rgb(200, 16, 47)',
                borderWidth: 3,
                fill: true 
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Visitantes (miles)'
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Concurrencia Estimada Semanal'
                }
            }
        }
    });
});