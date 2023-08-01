<?php
class UsersGateway extends BaseGateway {
  public function __construct(Database $db) {
    parent::__construct($db);
  }

  public function getUsers() {
    $sql = "SELECT * FROM users;";

    $stmt = $this->conn->query($sql);
    $data = [];

    while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
      $data[] = $row;
    }

    return $data;
  }
}