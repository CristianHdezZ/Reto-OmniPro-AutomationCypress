const report = require("multiple-cucumber-html-reporter")


// Obtener la fecha y hora actual
var fechaActual = new Date();

// Obtener los componentes de la fecha
var dia = fechaActual.getDate();
var mes = fechaActual.getMonth() + 1; // Nota: Los meses comienzan desde 0, por lo que se suma 1
var año = fechaActual.getFullYear();

// Formatear la fecha como DD-MM-YYYY
var fechaFormateada = (dia < 10 ? '0' : '') + dia + '-' + (mes < 10 ? '0' : '') + mes + '-' + año;

// Obtener los componentes de la hora
var horas = fechaActual.getHours();
var minutos = fechaActual.getMinutes();
var segundos = fechaActual.getSeconds();

// Formatear la hora como HH:MM:SS
var horaFormateada = (horas < 10 ? '0' : '') + horas + ':' + (minutos < 10 ? '0' : '') + minutos + ':' + (segundos < 10 ? '0' : '') + segundos;

// Imprimir la fecha y hora o usarlas según tus necesidades
console.log('Fecha: ' + fechaFormateada);
console.log('Hora: ' + horaFormateada);


report.generate({
    jsonDir: "cypress/cucumber-json", /*Lugar  que va a contener los .json de los resultados de las pruebas */
    reportPath: "./reports/cucumber", /* Definir dónde queremos generar el reportes HTML */ 

    metadata: {
        browser: {
          name: "chrome",
          version: "126.0.6478.182 (Build oficial) (64 bits)",
        },
        device: "Local test machine",
        platform: {
          name: "Windows",
          version: "10",
        },
      },

    customData: {
        title: "Run info",
        data: [
          { label: "Project", value: "Custom project" },
          { label: "Release", value: "1.0.0" },
          { label: "Cycle", value: "B11221.34321" },
          { label: "Execution End Time", value: fechaFormateada + ' ' + horaFormateada},
        ]
     },
     openReportInBrowser: true,
     pageFooter: "Informe del Resultado de Pruebas de la Página Orange HRM ",
     //displayDuration: true,
     //durationInMS: true


})