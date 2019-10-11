calendarioMult
==========
Plugin para generar un directorio capacidad de edicion al 100%.

El siguiente es el manual de uso de la funcion calendarioMult

- calendarioMult
	Este es la forma de iniciar el calendario.
	
		calendarioMult({
			[Array]
		})

	+Parametros

	Array: Tiene todos los parametros que se necesitan para la creacion, los parametros son los siquientes:
	
	-obj[STRING]: es el id o la clase que va contener nuestro calendario, debe usar los prefijos de Jquery para distingir los ("#", ".").
	-cant[INT] opcional: es la cantidad de meses a mostrar despues del mes inicial si no se coloca automaticamente toma 12.
	
	-mes[INT] opcional: Es el mes inicial para empezar a usar si no se coloca automaticamente toma el actual.
	
	-year[INT] opcional: Es el año inicial del calendario si no se coloca automaticamente toma el actual.
	
	-idioma[STRING] opcional: es el idioma del calendario si no se coloca el idioma oficial es español.
	
	-dir[STRING]: es la direccion de ubicacion del js de calendarioMult.

	EJ.
	
		calendarioMult({
			clase:"#contenidos",
			cant:12,
			mes:1,
			year:2019,
			idioma:"ES_es",
			dir:"/plugins/calendarioMult/"
		})

- calMult_getData
	Se usa para obtener los datos del calentario.
	
		calMult_getData();

	+Parametros
	
	return[Array]: La respuesta es un array con todas las fechas.

	EJ.
	
		calMult_getData();
