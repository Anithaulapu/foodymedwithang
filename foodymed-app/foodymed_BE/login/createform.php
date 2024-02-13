<?php
	require('../DB/connect.php');

	include('../include/header.php');

	header("Access-Control-Allow-Methods: POST");
	$error 	=	require('../include/constanti.php');

	$final_response 	=	"";
	$where 				=	"";

	$postdata       =   file_get_contents('php://input');

    if((isset($postdata)) && (!empty($postdata)))
    {

        $jsonData       = json_decode($postdata, true);
        
        $id       		= (isset($jsonData['id']) && ($jsonData['id'] != ""))			? $jsonData['id'] 			: 0;
         $sesso   		= (isset($jsonData['sesso']) && ($jsonData['sesso'] != ""))	? $jsonData['sesso'] 	: null	;

         $eta      		= (isset($jsonData['eta']) && ($jsonData['eta'] != ""))     ? (int)($jsonData['eta']) 	: null;
         $altezza   		= (isset($jsonData['altezza']) && ($jsonData['altezza'] != ""))	? (int)($jsonData['altezza']) 	: null	;
         $peso   			= (isset($jsonData['peso']) && ($jsonData['peso'] != ""))		? (int)($jsonData['peso']) 	: null	;
         $lavoro_allena   		= (isset($jsonData['lavoro_allena']) && ($jsonData['lavoro_allena'] != ""))	? (int)($jsonData['lavoro_allena']) 	: null	;

         $update_lavoro_allena = "";

        if ($jsonData !== null) {

        	if($id > 0){
        		        		
     			switch($lavoro_allena)
     			{
     				case 1: 	$update_lavoro_allena 	= 	"lavoro = 'sedentario', allenamento = 'nessuno'";
     				break;
     				case 2:	$update_lavoro_allena 	=	"lavoro = 'sedentario', allenamento = '3/4'";
     				break;	
     				case 3:	$update_lavoro_allena 	=	"lavoro = 'sedentario', allenamento = '5'";
     				break;
     				case 4:	$update_lavoro_allena 	=	"lavoro = 'movimento', allenamento = 'nessuno'";
     				break;
     				case 5:	$update_lavoro_allena 	=	"lavoro = 'movimento', allenamento = '3/4'";
     				break;
     				case 6:	$update_lavoro_allena 	=	"lavoro = 'movimento', allenamento = '5'";
     				break;
     				case 7:	$update_lavoro_allena 	=	"lavoro = 'atleta', allenamento = 'professionista'";
     				break;
     				default:
     				break;

     			}

     			if(($lavoro_allena !== "") && ($lavoro_allena !== 0 ))
  				{
     				$update_query 		=	"UPDATE questionario SET $update_lavoro_allena  WHERE id = $id";
					$query_result 		=	mysqli_query($con,$update_query);

					if($query_result)
					{
						$final_response = array('id' => $id);
						$data 		= array('result' => array('success' => '1','message'=>'OK','data' => $final_response));
	  					echo json_encode($data);
					}
					else
					{
						$data 		= array('result' => array('success' => '0','message'=>'OK','data' => $error['connection_error']));
	  					echo json_encode($data);
					}
        		}
        		else
        		{
        			$data 		= array('result' => array('success' => '0','message'=>'OK','data' => $error['parameters_error']));
  					echo json_encode($data);
        		}
        			
        	} 
        	else
        	{
        		$insert_query 		=	"INSERT INTO questionario(sesso, eta, altezza, peso) VALUES('$sesso', $eta, $altezza, $peso)";
        	
        		 
				$query_result 		=	mysqli_query($con,$insert_query);
 				if($query_result)
				{
					$inserted_id 		= mysqli_insert_id($con);
					$final_response = array('id' => $inserted_id);
					$data 		= array('result' => array('success' => '1','message'=>'OK','data' => $final_response));
  					echo json_encode($data);
				}
				else
				{
					$data 		= array('result' => array('success' => '0','message'=>'OK','data' => $error['connection_error']));
  					echo json_encode($data);
				}
        	}
            
        }
        else {
        	$data 		= array('result' => array('success' => '0','message'=>'OK','data' => $error['json']));
  			echo json_encode($data);
        }
    } 
    else {
       	$data 		= array('result' => array('success' => '0','message'=>'OK','data' => $error['parameters_error']));
  		echo json_encode($data);
    }

			

	mysqli_close($con);
	exit();
?>

 <!-- http://localhost/foodymed_BE/login/createform.php -->
<!--  body
 {
    "id":,
   "sesso":"", 
   "eta":, 
   "altezza":, 
   "peso":,
    "lavoro_allena":
} -->


<!-- response:
{
    "result": {
        "success": "1",
        "message": "OK",
        "data": {
            "id": 5
        }
    }
} -->