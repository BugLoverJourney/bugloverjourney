<?php

class ErrorController extends BaseController {
  private string $msg;

  function __construct(int $statusCode, string $msg) {
    parent::__construct();
    $this->msg = $msg;
    http_response_code($statusCode);
  }

  function response(array $data = null): void {
    $response = [
      'msg' => $this->msg,
    ];
    parent::responseBase(empty($data) ? $response : array_merge($response, $data));
  }
}