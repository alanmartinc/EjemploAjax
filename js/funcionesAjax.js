
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




function TraerBotones(numero)
{

	switch(numero)
	{
		
		case 1:
		$("#main-nav").html('<li><a onclick="MostrarError()" class="btn">Ajax<br> Error!!!</a></li><li><a onclick="MostrarSinParametros()" class="btn">Ajax<br>S/Parametros</a> </li> <li><a onclick="MostrarSinRetornarPromesa(\'foto\')" class="btn">Ajax Foto<br>(parametros<br> y POST) </a> </li><li><a onclick="MostrarSinRetornarPromesa(\'video\')" class="btn">Ajax Video<br>(parametros<br> y POST)</a> </li><li><a onclick="TraerBotones(2)" class="btn btn-success">Mas -> </a> </li>');
		break;
		case 2:
		$("#main-nav").html('<li><a onclick="MostarPais()" class="btn">Ajax<br> Mostrar<br>Argentina</a></li> <li><a onclick="MostarPaises()" class="btn">Ajax<br> Mostrar<br>paises</a></li>		<li><a onclick="TraerBotones(3)" class="btn btn-success"> Ejercicio asincrono-> </a> </li>');
		break;
		case 3:
		$("#main-nav").html('<li><a onclick="MostarRandom()" class="btn">Ajax<br>Random</a></li>				<li><a onclick="GuardarNumero()" class="btn">Ajax<br>Guardar</a></li>					<li><a onclick="MostarRandomlimitadoGet()" class="btn">Ajax<br> Random <br> limitado <br>GET</a></li>								<li><a onclick="MostarRandomlimitadoPost()" class="btn">Ajax<br> Random <br>limitado<br>POST</a></li>		 </li><li><a onclick="TraerBotones(4)" class="btn btn-success">ABM Con Login</a> </li>');
		break;
		case 4:
		$("#main-nav").html('<li><a onclick="MostrarSinRetornarPromesa(\'MostrarGrilla\')" class="btn">Mostrar <br>Grilla<br>-Sesión-</a> </li>							<li><a onclick="MostarLogin()"  class="btn btn-primary"id="BotonLogin" >Login<br>-Sesión-</a> </li>	 </li><li><a onclick="TraerBotones(1)" class="btn btn-success">inicio -> </a> </li>');
		break;

	}
	
	

}
