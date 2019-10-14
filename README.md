calendarioMult
==========
Plugin para generar un directorio capacidad de edicion al 100%.

El siguiente es el manual de uso de la funcion calendarioMult

Debe colocarlo directamente en un servidor para que funcione ya sea uno web o uno local.

Para ver la demo de click aqui Demo(http://plugins.tecnologiaswebsite.com/calendarioMult/)

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
	
	-dir[STRING]: es la direccion de ubicacion del json con el idioma de calendarioMult.

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

- Idioma

	Puede agregar cualquier idioma a calentadioMult solo debe crear un nuevo archivo .JSON con los nuevos nombres de meses y dias de la semana, la estructura es la siguiente:

		{
		"meses": {
		    "1": "Enero",
		    "2": "Febrero",
		    "3": "Marzo",
		    "4": "Abril",
		    "5": "Mayo",
		    "6": "Junio",
		    "7": "Julio",
		    "8": "Agosto",
		    "9": "Septiembre",
		    "10": "Octubre",
		    "11": "Noviembre",
		    "12": "Diciembre"
		},
		"dsemana": {
		    "0": "D",
		    "1": "L",
		    "2": "M",
		    "3": "X",
		    "4": "J",
		    "5": "V",
		    "6": "S"
		}
		}

Todos los aportes son voluntarios.

Si deseas ayudarme para continuar con mis aportes puedes enviarme a mi billetera en BTC

1NrBE31sYvq5F96nD8GGRS5TWXneVnG3yo