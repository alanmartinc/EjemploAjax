
function MostrarError()
{
	var funcionAjax=$.ajax({url:"./ServidorPHP/nexoNoExiste.php",type:"post",data:{queHacer:"MostrarTexto"}})
	.then(function(retorno){
		$("#principal").html(retorno);
		$("#informe").html("Correcto!!!");
	})
	.catch(function(retorno){
			$("#principal").html("error :(");
		$("#informe").html(retorno.responseText);		
	});
	
}
function MostrarSinParametros()
{
	var funcionAjax=$.ajax({url:"./ServidorPHP/nexoTexto.php"});

	$("#informe").html("<p> Conectando con el servidor...</p><img src='imagenes/ajax-loader.gif' style='width: 30px;'/>");
	
	funcionAjax.then(function(retorno){
		$("#principal").html(retorno);
		$("#informe").html("Correcto!!!");
	});

	funcionAjax.catch(function(retorno){
		$("#principal").html(":(");
		$("#informe").html(retorno.responseText);	
	});

}
function MostrarRetornandoPromesa1(queMostrar)
{
	$("#informe").html("<p> Conectando con el servidor...</p><img src='imagenes/ajax-loader.gif' style='width: 30px;'/>");
		//alert(queMostrar);
	return $.ajax({
		url:"./ServidorPHP/nexo.php",
		type:"post",
		data:{queHacer:queMostrar}
	})
	.then(function(retorno){
		//$("#principal").html(retorno);
		//$("#informe").html("Correcto!!!");

		return retorno;
	})
	.catch(function(retorno){
		//$("#principal").html(":(");
		//$("#informe").html(retorno.responseText);
		return retorno.responseText;
	});
}
function MostrarRetornandoPromesa2(queMostrar)
{
	$("#informe").html("<p> Conectando con el servidor...</p><img src='imagenes/ajax-loader.gif' style='width: 30px;'/>");
		//alert(queMostrar);
	var ObjetoAjax= $.ajax({
		url:"./ServidorPHP/nexo.php",
		type:"post",
		data:{queHacer:queMostrar}
	})
	/*
	.then(function(retorno){
		//$("#principal").html(retorno);
		//$("#informe").html("Correcto!!!");

		return retorno;
	})
	.catch(function(retorno){
		//$("#principal").html(":(");
		//$("#informe").html(retorno.responseText);
		return retorno.responseText;
	});
	*/
	return ObjetoAjax;
}
function MostrarSinRetornarPromesa(queMostrar)
{
	$("#informe").html("<img src='imagenes/ajax-loader.gif' style='width: 30px;'/>");
		//alert(queMostrar);
	var objetoAjax=$.ajax({
		url:"./ServidorPHP/nexo.php",
		type:"post",
		data:{queHacer:queMostrar}
	})
	.then(function(retorno){
		$("#principal").html(retorno);
		$("#informe").html("Correcto!!!");	
	})
	.catch(function(retorno){
		$("#principal").html(":(");
		$("#informe").html(retorno.responseText);	
	});

}

function MostarLogin()
{

	$("#informe").html("<img src='imagenes/ajax-loader.gif' style='width: 30px;'/>");
	//alert(queMostrar);
	var funcionAjax=$.ajax({
		url:"./ServidorPHP/nexo.php",
		type:"post",
		data:{queHacer:"MostarLogin"}
	})
	.then(function(retorno){
		$("#principal").html(retorno);
		$("#informe").html("Correcto Form login!!!");	
	})
	.catch(function(retorno){
		$("#botonesABM").html(":(");
		$("#informe").html(retorno.responseText);	
	});

}