
function MostrarError()
{
	$("#error").html("");	
	var funcionAjax=$.ajax({url:"./ServidorPHP/nexoNoExiste.php",type:"post",data:{queHacer:"MostrarTexto"}})
	.then(function(retorno){
		$("#principal").html(retorno);
		$("#informe").html("Correcto!!!");
	})
	.catch(function(retorno){
		$("#principal").html("error :(");
		$("#informe").html("Con error");
		$("#error").html(retorno.responseText);			
	});
	
}
function MostrarSinParametros()
{
	var funcionAjax=$.ajax({url:"./ServidorPHP/nexoTexto.php"});
	$("#error").html("");
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

function MostrarSinRetornarPromesa(queMostrar)
{
	$("#informe").html("<img src='imagenes/ajax-loader.gif' style='width: 30px;'/>");
	$("#error").html("");
	var objetoAjax=$.ajax({
		url:"./ServidorPHP/nexo.php",
		type:"post",
		data:{queHacer:queMostrar}
	})
	.then(function(retorno){
		console.log("volvio MostrarSinRetornarPromesa");
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
	$("#error").html("");
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

function MostarPaises()
{

	$("#informe").html("<img src='imagenes/ajax-loader.gif' style='width: 30px;'/>");
	$("#error").html("");
	var funcionAjax=$.ajax({
		url:"https://restcountries.eu/rest/v2/region/americas",
	
	})
	.then(function(retorno){
		console.info(retorno);
		$("#principal").html(retorno);
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
		$("#principal").html(retorno);
		$("#informe").html("Correcto MostarPais");	
	})
	.catch(function(retorno){
		$("#botonesABM").html(":(");
		$("#informe").html(retorno.responseText);	
	});

}


function MostarRandom()
{

	$("#informe").html("<img src='imagenes/ajax-loader.gif' style='width: 30px;'/>");
	$("#error").html("");
	var funcionAjax=$.ajax({
		url:"./ServidorPHP/php/RetornarRandom.php"
	
	})
	$("#informe").html("");

}

function MostarRandomlimitadoGet()
{

	$("#informe").html("<img src='imagenes/ajax-loader.gif' style='width: 30px;'/>");
	$("#error").html("");
	var funcionAjax=$.ajax({
		url:"./ServidorPHP/php/RetornarRandomlimitadoGet.php",
		type:"get"
	})
	.then(function(retorno){
		console.info(retorno);
		$("#principal").html(retorno);
		$("#informe").html("Correcto MostarRandomlimitadoGet");	
	})
	.catch(function(retorno){
		$("#principal").html("Error:"+retorno.statusText +"<br>"+ retorno.status);
		$("#informe").html("Retorno con error");
		$("#error").html(retorno.responseText);	
	});

}
function MostarRandomlimitadoPost()
{

	$("#informe").html("<img src='imagenes/ajax-loader.gif' style='width: 30px;'/>");
	$("#error").html("");
	var funcionAjax=$.ajax({
		url:"./ServidorPHP/php/RetornarRandomlimitadoPost.php",
		type:"post"
	})
	.then(function(retorno){
		console.info(retorno);
		$("#principal").html(retorno);
		$("#informe").html("Correcto MostarRandomlimitadoPost");	
	})
	.catch(function(retorno){
		console.log(retorno);
		$("#informe").html("Retorno con error");
		$("#principal").html("Error :" +retorno.statusText +"<br>"+ retorno.status);	
		$("#error").html(retorno.responseText);	
	});

}

function MostrarRetornandoPromesa1(queMostrar)
{
	$("#informe").html("<p> Conectando con el servidor...</p><img src='imagenes/ajax-loader.gif' style='width: 30px;'/>");
	$("#error").html("");
	return $.ajax({
		url:"./ServidorPHP/nexo.php",
		type:"post",
		data:{queHacer:queMostrar}
	})
	.then(function(retorno){
		//$("#principal").html(retorno);
		//$("#informe").html("Correcto!!!");
		console.log("volvio MostrarRetornandoPromesa1");
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
	$("#error").html("");
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
function GuardarNumero()
{

	$("#informe").html("<img src='imagenes/ajax-loader.gif' style='width: 30px;'/>");
	$("#error").html("");
	var funcionAjax=$.ajax({
		url:"./ServidorPHP/php/GuardarNumero.php",
		type:"post",
		data:{numero:10}
	})
	.then(function(retorno){
		console.info(retorno);
		$("#principal").html(retorno);
		$("#informe").html("Correcto MostarRandomlimitadoPost");	
	})
	.catch(function(retorno){
		console.log(retorno);
		$("#informe").html("Retorno con error");
		$("#principal").html("Error :" +retorno.statusText +"<br>"+ retorno.status);	
		$("#error").html(retorno.responseText);	
	});

}