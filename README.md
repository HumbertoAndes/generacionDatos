#Taller Semana 7


Para esta entrega se implementaron los siguientes tipos de casos de prueba:


1. Casos de prueba con datos generados previamente (20 casos)
2. Casos de prueba con datos pseudo aleatorios dinámicos(20 casos)
3. Casos de prueba con escenarios generados aleatoriamente (20 casos)

A continuación, detallamos las estrategias utilizadas para la generación de datos en cada caso:

##1.Generación de datos previa mediante pool de datos*
Se utilizó la herramienta Mockaroo para la creación de datos de prueba anticipada. Para cada caso, se definió un template específico que generó un archivo CSV con 100 registros,el cual se incluyó en el proyecto Cypress. Durante la ejecución de cada caso de prueba, se importó este archivo y se seleccionaron registros aleatoriamente para su uso.

##2.Generación de datos pool (pseudo) aleatorio dinámico*
