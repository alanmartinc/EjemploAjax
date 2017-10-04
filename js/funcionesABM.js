function BorrarCD(idParametro)
{
	//alert(idParametro);
		var funcionAjax=$.ajax({
		url:"./ServidorPHP/nexo.php",
		type:"post",
		data:{
			queHacer:"BorrarCD",
			id:idParametro	
		}
	}).then(function(retorno){
		Mostrar("MostrarGrilla");
		$("#informe").html("cantidad de eliminados "+ retorno);	
		
	}).catch(function(retorno){	
		$("#informe").html(retorno.responseText);	
	});	
}

function EditarCD(idParametro)
{
	MostrarRetornandoPromesa2("MostrarFormAlta")
	.then(function(data){
		if ( !data )
		{
			$("#principal").html(":(");
			$("#informe").html("No se pudo cargar");
			
		}
		else
		{
			return data;
		}
	})
	.then(function(data){

		$("#principal").html(data);
		$("#informe").html("Cargando datos..."+"<img src='imagenes/ajax-loader.gif' style='width: 30px;'/>");
		$("#cantante").prop('disabled', true);
		$("#titulo").prop('disabled', true);
		$("#anio").prop('disabled', true);
		traerDatosAModificar(idParametro);
		
	})
	.catch(function(e){
		$("#principal").html(":(");
		$("#informe").html(e.responseText);
	});

	
	
}
function traerDatosAModificar(idParametro)
{
	var funcionAjax=$.ajax({
		url:"./ServidorPHP/nexo.php",
		type:"post",
		data:{
			queHacer:"TraerCD",
			id:idParametro	
		}
	}).then(function(retorno){
	
		var cd =JSON.parse(retorno);	
		$("#idCD").val(cd.id);
		$("#cantante").val(cd.cantante);
		$("#titulo").val(cd.titulo);
		$("#anio").val(cd.año);
		$("#informe").html("Cargado!");
		$("#cantante").prop('disabled', !true);
		$("#titulo").prop('disabled', !true);
		$("#anio").prop('disabled', !true);
	}).catch(function(retorno){	
		$("#informe").html(retorno.responseText);	
	});	
}
function GuardarCD()
{
		var id=$("#idCD").val();
		var cantante=$("#cantante").val();
		var titulo=$("#titulo").val();
		var anio=$("#anio").val();

		var funcionAjax=$.ajax({
		url:"./ServidorPHP/nexo.php",
		type:"post",
		data:{
			queHacer:"GuardarCD",
			id:id,
			cantante:cantante,
			titulo:titulo,
			anio:anio	
		}
	}).then(function(retorno){
			Mostrar("MostrarGrilla");
		$("#informe").html("cantidad de agregados "+ retorno);	
		
	}).catch(function(retorno){	
		$("#informe").html(retorno.responseText);	
	});	
}