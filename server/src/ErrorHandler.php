<?php
class ErrorHandler {
  public static function handleException(Throwable $exception):void {
    http_response_code(500);

    echo json_encode([
      "code" => $exception->getCode(),
      "message" => $exception->getMessage(),
      "file" => $exception->getFile(),
      "line" => $exception->getLine()
    ]);
  }

  public static function handleError(int $number, string $msg, string $file, int $line):void {
    throw new ErrorException($msg, 0, $number, $file, $line);
  }
}
