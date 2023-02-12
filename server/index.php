<?php

declare(strict_types=1);

spl_autoload_register(function ($class) {
  require "./src/$class.php";
});

function errorCall(int $statusCode, string $msg) {
  (new ErrorController($statusCode, $msg))->response();
  exit;
}

$url = explode("/", $_SERVER["REQUEST_URI"]);

if ($url[1] !== "api") {
  errorCall(404, "Unpredicted API call"); 
} 

if (!array_key_exists(2,$url)) {
  errorCall(404, "Called API resourse doesn`t exist!");
}

(new TestController())->response();
?>