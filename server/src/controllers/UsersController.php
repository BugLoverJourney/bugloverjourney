<?php

class UsersController extends BaseController {
  private bool $ok;
  private UsersGateway $gateway;

  function __construct() {
    parent::__construct();
    $this->ok = true;
    $this->msg = "Test resulted without problem.";
    $this->gateway = new UsersGateway($this->db);
  }

  public function response(): void {
    parent::responseBase($this->gateway->getUsers());
  }
}