<?php

class BaseGateway {
  protected PDO $conn;

  protected function __construct(Database $database) {
    $this->conn = $database->getConnection();
  }
}