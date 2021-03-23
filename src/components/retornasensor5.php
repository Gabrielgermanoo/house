<?php
$servername = "localhost";
$username = "id16282715_root";
$password = "p#SV|2~ya*4/c~a0";
$dbname = "id16282715_bdiot";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
   die("Connection failed: " . $conn->connect-error);
}

$sensores="";
$sql = "SELECT sitSensor FROM  tblEstadoSensor order by codSensor";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
   while($row = $result->fetch_assoc()) {
      $sensores =$sensores . $row["sitSensor"] . ";";
   }
} else {
  echo "0 results";
}
echo $sensores;
$conn->close();
?>