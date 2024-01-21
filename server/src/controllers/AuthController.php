<?php

class AuthController extends BaseController {
  private UsersGateway $gateway;

  function __construct() {
    parent::__construct();
    $this->gateway = new UsersGateway($this->db);
  }

  function response(): void {
    if (empty($this->url[3])) {
      // ! continue there
      // $this->processCollection();

      return;
    }
    
    $this->processResource($this->url[3]);
  }

  private function processResource(string $id) {
    $user = $this->gateway->getUser($id);
    if (!$user) {
      http_response_code(404);
      parent::responseBase(['msg' => "User with id {$id} not found"]);

      return;
    }

    if ($this->method === 'GET') {
      parent::responseBase($user);

      return;
    }

    if ($this->method === 'PUT') {
      $data = json_decode(file_get_contents('php://input'), true);
      $errors = $this->validateCreateData($data);
      if (isset($errors)) {
        http_response_code(422);
        parent::responseBase(['errors' => $errors]);

        return;
      }

      $rows = $this->gateway->updateUser($user, $data);
      $response = [
        'msg' => "User with the id '{$id}' updated",
        'rows' => $rows
      ];

      parent::responseBase($response);

      return;
    }

    if ($this->method === 'DELETE') {
      $rows = $this->gateway->deleteUser($id);
      $response = [
        'msg' => "User with {$id} deleted",
        'rows' => $rows
      ];

      parent::responseBase($response);

      return;
    }

    http_response_code(405);
    header('Allow: GET, PUT, DELETE');
  }

  private function validateCreateData(array | null $data ): array {
    if (empty($data))
      return ['Request without data'];

    $errors = [];

    if (empty($data['username']))
      $errors[] = 'Username is required';

    if (empty($data['password']))
      $errors[] = 'Password is required';

    if (empty($data['age'])) {
      $errors[] = 'Age is required';
    } elseif (!filter_var($data['age'], FILTER_VALIDATE_INT)) {
      $errors[] = 'Age must be integer';
    } 

    if (array_key_exists('email',$data)) {
      if (!str_contains($data['email'], '@'))
        $errors[] = 'Invalid email address';
    }

    return $errors;
  }

}