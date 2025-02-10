<?php
header("Access-Control-Allow-Origin: *"); // Allow CORS
header("Content-Type: application/json");

$servername = "localhost";
$username = "globaros_crmAdmin"; // Your HostGator DB username
$password = "your_db_password";
$dbname = "globaros_recrm"; // Your DB name

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die(json_encode(["error" => "Database connection failed"]));
}

// Handle GET Request (Fetch Properties)
if ($_SERVER["REQUEST_METHOD"] === "GET") {
    $sql = "SELECT * FROM properties"; // Your MySQL table
    $result = $conn->query($sql);

    $properties = [];
    while ($row = $result->fetch_assoc()) {
        $properties[] = $row;
    }

    echo json_encode($properties);
}

// Close connection
$conn->close();
?>
