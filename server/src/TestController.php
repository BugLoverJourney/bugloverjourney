<?php

class TestController extends BaseController {
  private bool $ok;
  private string $message;
  private int $executionTime;

  function __construct() {
    parent::__construct();
    $this->ok = true;
    $this->message = "Test resulted without problem.";
    $this->executionTime = 1000;
  }

  public function response(): void {
    $data = array(
      "ok" => $this->ok,
      "msg" => $this->message,
      "executionTime" => $this->executionTime,
    );

    parent::responseBase($data);
  }
}

?>