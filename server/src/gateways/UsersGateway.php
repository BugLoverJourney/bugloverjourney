<?php
class UsersGateway extends BaseGateway {
  function __construct(Database $db) {
    parent::__construct($db);
  }

  function getUsers(): array {
    $sql = "SELECT * FROM users;";

    $stmt = $this->conn->query($sql);
    $data = [];

    while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
      $data[] = $row;
    }

    return $data;
  }

  function getUser(string $id): array | false {
    $sql = "SELECT * FROM users WHERE id = :id;";

    $stmt = $this->conn->prepare($sql);
    $stmt->bindValue(':id', $id, PDO::PARAM_STR); 

    $stmt->execute();

    return $stmt->fetch(PDO::FETCH_ASSOC);
  }

  function createUser(array $data): string {
    $sql = "INSERT INTO users (username, password, age) VALUES (:username, :password, :age); ";

    $stmt = $this->conn->prepare($sql);
    $stmt->bindValue(':username', $data['username'], PDO::PARAM_STR); 
    $stmt->bindValue(':password', $data['password'], PDO::PARAM_STR); 
    $stmt->bindValue(':age', $data['age'], PDO::PARAM_INT); 
    
    $stmt->execute();

    return $this->conn->lastInsertId();
  }

  function updateUser(array $current, array $new): int {
    $sql = "UPDATE users SET username = :username, password = :password, age = :age WHERE id = :id;";

    $stmt = $this->conn->prepare($sql);
    $stmt->bindValue(':username', $new['username'] ?? $current['username'], PDO::PARAM_STR); 
    $stmt->bindValue(':password', $new['password'] ?? $current['password'], PDO::PARAM_STR); 
    $stmt->bindValue(':age', $new['age'] ?? $current['age'], PDO::PARAM_INT); 
    $stmt->bindValue(':id', $current['id'], PDO::PARAM_INT);
    
    $stmt->execute();

    return $stmt->rowCount();
  }

  function deleteUser(int $id): int {
    $sql = "DELETE FROM users WHERE id = :id;";

    $stmt = $this->conn->prepare($sql);

    $stmt->bindValue(':id', $id, PDO::PARAM_INT);
    $stmt->execute();

    return $stmt->rowCount();
  }
}