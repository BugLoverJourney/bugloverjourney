<?php

declare(strict_types=1);

spl_autoload_register("myAutoLoader");

function myAutoLoader (string $class) {
  if (str_contains($class, "Controller")) {
    require "./src/controllers/$class.php";

    return;
  }

  if (str_contains($class, "Gateway")) {
    require "./src/gateways/$class.php";

    return;
  }

  require "./src/$class.php";
}

set_exception_handler("ErrorHandler::handleException");

function errorCall(int $statusCode, string $msg) {
  (new ErrorController($statusCode, $msg))->response();
  exit;
}

header("Content-type: application/json");

$url = explode("/", $_SERVER["REQUEST_URI"]);

if ($url[1] !== "api") {
  errorCall(404, "Unpredicted API call"); 
} 

if (!array_key_exists(2,$url)) {
  errorCall(404, "Called API resource doesn`t exist!");
}

(new UsersController())->response();