<?php
$servername = "localhost";
$username = "id16282715_root";
$password = "p#SV|2~ya*4/c~a0";
$dbname = "id16282715_bdiot";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
$sitSensor = $_GET["sitSensor"];
$codSensor = $_GET["codSensor"];


$sql1 = "UPDATE tblEstadoSensor SET sitSensor=$sitSensor WHERE codSensor=$codSensor";

if ($conn->query($sql1) === true){
 echo $conn->error;
} 
else {
  echo "Erro ao atualizar: " . $conn->error;
}


header('location:./pages/Home.tsx');
$conn->close();


?>