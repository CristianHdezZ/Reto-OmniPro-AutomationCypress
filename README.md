# Cypress, Cucumber para reporte HTML y GitHub Action:
>  Pruebas en login con Cypress + Cucumber

## Pre-requsitos:
1. Instalar Node.js (v 21.7.2 o superior)
2. Clonar este proyecto en su repositorio local
3. Instalar las dependencias que se encuentran el archivo package.json con `npm install`
    ``` gherkin
    "devDependencies": {
        "@badeball/cypress-cucumber-preprocessor": "^15.0.0",
        "@bahmutov/cypress-esbuild-preprocessor": "^2.2.1",
        "@shelex/cypress-allure-plugin": "^2.34.0",
        "cypress": "^12.0.2",
        "cypress-cucumber-preprocessor": "^4.3.1",
        "esbuild": "^0.17.0",
        "jest": "^29.7.0",
        "jest-cucumber": "^4.4.0",
        "multiple-cucumber-html-reporter": "^3.6.1"
    }
    ```   
4. Ejecutar los escenarios de pruebas con `npx cypress run`
5. Generar el reporte HTML con el siguiente comando: `node cucumber-html-report.js`