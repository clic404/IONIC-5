//-- Prepara la conexion slim framework --//

* Bajamos slim framework lo subimos a nuestro servidor 
en este ejemplo se creo una carpeta api en el servidor

* En el servidor nos debe quedar dentro de api una carpeta de esta manera

*** Ejemplo ***

api/slim
api/index.php 
api/config.php
api/.htaccess

*** Fin Ejemplo ***

* En algunos casos dependiendo del servidro los headers de conexion segura cambian
* Mostraremos en este caso el .htaccess 

--- .htaccess ---

<ifModule mod_rewrite.c>

RewriteEngine On


RewriteCond %{REQUEST_FILENAME} !-f

RewriteRule ^(.*)$ index.php/$1 [NC,QSA,L]

</ifModule>

--- fin .htaccess ---

* La Carpeta slim no se modifica el index.php tendra la conexion y consultas en PHP PDO

--- index.php ---

<?php

//Permisos Headers //
if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
}

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");         

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
}

// Final Permiso Headers //

// Requiere conexion al la BD
require 'config.php';
require 'Slim/Slim.php';

\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim();

// Llama el post a la funcion del php
$app->post('/nombre_function','nombre_function');
$app->post('/register','register');



$app->run();

/**********************  Funciones *********************/

function nombre_function(){


}

?>

--- fin index.php ---

* Como observamos en el index el comentario permisos headers se aplica dentro del haders en otros servidores se aplica en el .htaccess

* Prepararemos el config el cual conecta a nuestra BD

--- config.php ---

<?php

error_reporting(0);
session_start();

/* DATABASE CONFIGURACION */
define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'nombre_usuario');
define('DB_PASSWORD', 'clave');
define('DB_DATABASE', 'base_datos');
define("BASE_URL", "http://mi_web/api/");
define("SITE_KEY", 'yourSecretKey');


function getDB() 
{
	$dbhost=DB_SERVER;
	$dbuser=DB_USERNAME;
	$dbpass=DB_PASSWORD;
	$dbname=DB_DATABASE;
	$dbConnection = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);	
	$dbConnection->exec("set names utf8");
	$dbConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	return $dbConnection;
}
/* FIN BASE DE DATOS CONFIGURACION */

/* API KEY ENCRIPTAR ACCESO */
function apiToken($session_uid)
{
$key=md5(SITE_KEY.$session_uid);
return hash('sha256', $key);
}
?>

--- fin config.php ---

