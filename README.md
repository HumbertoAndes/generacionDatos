# Taller Semana 7

# Aclaramos que nuestro equipo esta conformado por 2 personas, por ello la distribución de los escenarios

Para esta entrega se implementaron los siguientes tipos de casos de prueba:


1. Casos de prueba con datos generados previamente (20 casos)
2. Casos de prueba con datos pseudo aleatorios dinámicos(20 casos)
3. Casos de prueba con escenarios generados aleatoriamente (20 casos)

A continuación, detallamos las estrategias utilizadas para la generación de datos en cada caso:

## 1.Generación de datos previa mediante pool de datos
Se utilizó la herramienta Mockaroo para la creación de datos de prueba anticipada. Para cada caso, se definió un template específico que generó un archivo CSV con 100 registros,el cual se incluyó en el proyecto Cypress. Durante la ejecución de cada caso de prueba, se importó este archivo y se seleccionaron registros aleatoriamente para su uso.

## 2.Generación de datos pool (pseudo) aleatorio dinámico

##2.Generación de datos pool (pseudo) aleatorio dinámico
Para la generación dinámica de datos pseudoaleatorios, se aprovechó la API de Mockaroo. Se creó una cuenta y un esquema para cada caso de prueba, especificando los nombres y tipos de los campos requeridos, así como la cantidad de registros (100). Después de guardar el esquema, se generó una URL API. En cada caso de prueba en Cypress, esta URL se utilizó para obtener datos en tiempo real. La respuesta de la API se almacenó en un array, del cual se seleccionó un registro al azar para su utilización en las pruebas.

## 3.Generación aleatorio de escenarios de prueba
Para la generación de datos aleatorios directamente en los escenarios de prueba, se empleó la librería Faker. Esta se importó en los archivos correspondientes, donde se implementaron los 40 casos de prueba. Dependiendo de los requisitos de cada escenario, se utilizaron métodos de Faker como word, words, paragraph, paragraphs, email, entre otros, para generar los datos necesarios.

# Instrucciones de Instalación
Cada carpeta contiene 20 casos de prueba implementados conforme a la estrategia de pruebas indicada en la carpeta correspondiente. Para configurar el proyecto en un entorno de instalación, siga estos pasos:

1. Abra una consola y cree una carpeta para descargar el proyecto.
2. Ingrese a la carpeta creada y clone el repositorio usando el comando:
    git clone https://github.com/HumbertoAndes/generacionDatos
3. Ejecute el siguiente comando para instalar Cypress:
    npm install cypress
4. Ejecute el siguiente comando para instalar Faker:
    npm install faker
5. Ejecute el siguiente comando para instalar dependencia para que cypress pueda leer apis:
    npm install cypress-pluging-api
6. Abra Cypress con el siguiente comando:
    cypress open
7. Este comando abrirá la consola de Cypress donde se mostrarán todos los casos de prueba   generados.        