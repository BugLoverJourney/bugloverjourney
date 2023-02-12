<?php

class BaseController {
  protected int $statusCode;
  protected string $msg;

  protected function __construct(int $statusCode = 200, string $msg = '') {
    http_response_code($statusCode);

    $this->statusCode = $statusCode;
    $this->msg = $msg;
  }

  private static function process($res): void {
    echo json_encode($res);
  } 

  protected function responseBase($data = null): void {
    // Otherwise CORS will trap request on preflight call, preventing main request to be processed.
    if ($_SERVER['REQUEST_METHOD']=== "OPTIONS")
      http_response_code(205);

    if ($this->statusCode !== 200) {
      $res = array(
        "statusCode" => $this->statusCode,
        "msg" => $this->msg,
      );

      self::process($res);
      return;
    }
    
    $res = array(
      "statusCode" => $this->statusCode,
      "data" => $data
    );

    self::process($res);
  }
}

?>