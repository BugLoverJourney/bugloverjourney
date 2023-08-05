<?php

class BaseController {
  protected string $method;
  protected array $url;
  protected Database $db;

  protected function __construct() {
    $this->method = $_SERVER['REQUEST_METHOD'];
    $this->url = explode('/', $_SERVER['REQUEST_URI']);
    $this->db = new Database($_ENV['DB_HOST'],$_ENV['DB_NAME'],$_ENV['DB_USER'],$_ENV['DB_PWD']);
  }

  private static function process($res): void {
    echo json_encode($res);
  } 

  protected function responseBase(array $data = null): void {
    // Otherwise CORS will trap request on preflight call, preventing main request to be processed.
    if ($this->method === 'OPTIONS') {
      http_response_code(205);
      return;
    }

    self::process($data);
  }
}