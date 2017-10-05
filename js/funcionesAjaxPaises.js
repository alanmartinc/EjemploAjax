
function MostarPaises()
{

	$("#informe").html("<img src='imagenes/ajax-loader.gif' style='width: 30px;'/>");
	$("#error").html("");
	var funcionAjax=$.ajax({
		url:"https://restcountries.eu/rest/v2/region/americas",
	
	})
	.then(function(retorno){
		console.info(retorno);
		$("#principal").html(retorno+"aca deberia mostrar los datos de todos los paises de america");
		$("#informe").html("Correcto MostarPaises ");	
	})
	.catch(function(retorno){
		$("#botonesABM").html(":(");
		$("#informe").html(retorno.responseText);	
	});

}

function MostarPais()
{

	$("#informe").html("<img src='imagenes/ajax-loader.gif' style='width: 30px;'/>");
	$("#error").html("");
	var funcionAjax=$.ajax({
		url:"https://restcountries.eu/rest/v2/name/argentina",
	
	})
	.then(function(retorno){
		console.info(retorno);
		$("#principal").html(retorno+"aca deberia mostrar los datos de argentina");
		$("#informe").html("Correcto MostarPais");	
	})
	.catch(function(retorno){
		$("#botonesABM").html(":(");
		$("#informe").html(retorno.responseText);	
	});

}

