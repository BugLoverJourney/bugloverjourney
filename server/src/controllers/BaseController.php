<?php

class BaseController {
  protected int $statusCode;
  protected string $msg;
  protected string $method;
  protected Database $db;

  protected function __construct(int $statusCode = 200, string $msg = '') {
    http_response_code($statusCode);

    $this->statusCode = $statusCode;
    $this->msg = $msg;
    $this->method = $_SERVER['REQUEST_METHOD'];
    $this->db = new Database("localhost","bugLoverJourney","root","");
  }

  private static function process($res): void {
    echo json_encode($res);
  } 

  protected function responseBase($data = null): void {
    // Otherwise CORS will trap request on preflight call, preventing main request to be processed.
    if ($this->method === "OPTIONS")
      http_response_code(205);

    if ($this->statusCode !== 200) {
      $res = [
        "statusCode" => $this->statusCode,
        "msg" => $this->msg,
      ];

      self::process($res);
      return;
    }
    
    $res = [
      "statusCode" => $this->statusCode,
      "data" => $data
    ];

    self::process($res);
  }
}