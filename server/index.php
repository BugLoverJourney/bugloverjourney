<?php

declare(strict_types=1);

spl_autoload_register('myAutoLoader');

function myAutoLoader (string $class) {
  if (str_contains($class, 'Controller')) {
    require "./src/controllers/$class.php";

    return;
  }

  if (str_contains($class, 'Gateway')) {
    require "./src/gateways/$class.php";

    return;
  }

  require "./src/$class.php";
}

set_error_handler('ErrorHandler::handleError');
set_exception_handler('ErrorHandler::handleException');

function errorCall(int $statusCode, string $msg) {
  (new ErrorController($statusCode, $msg))->response();
  exit;
}

header('Content-type: application/json');

$url = explode('/', $_SERVER['REQUEST_URI']);

if ($url[1] !== 'api') {
  errorCall(404, 'Unpredicted API call'); 
}

require_once realpath(__DIR__ . '/../../vendor/autoload.php');

use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable(__DIR__ . '/..');
$dotenv->load();

switch ($url[2]) {
  case  'login':
    (new AuthController())->response();
    break;
  case 'users':
    (new UsersController())->response();
    break;
  default:
    errorCall(404, 'Called API resource doesn`t exist!');
}
