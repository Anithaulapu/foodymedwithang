<?php
	
	$host 		=	'127.0.0.1';
	$user  		=	'root';
	$password 	=	'';
	$database  	= 	'foodymed';

	
	$con = mysqli_connect($host,$user,$password,$database);

	if(!$con)
	{
		die(mysqli_connect_error($con));
	}
?>

