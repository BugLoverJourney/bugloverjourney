<?php

class ErrorController extends BaseController {
  public function __construct(int $statusCode, string $msg) {
    parent::__construct($statusCode, $msg);
  }

  public function response(): void {
    parent::responseBase();
  }
}

?>