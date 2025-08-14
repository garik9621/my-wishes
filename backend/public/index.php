<?php
// Simple router for /api/hello
require_once __DIR__ . '/../src/Autoload.php';

use App\Http\Router;

$router = new Router();
$router->get('/api/hello', function() {
    $controller = new App\Controller\HelloController();
    $response = $controller->hello();
    header('Content-Type: application/json');
    echo json_encode($response, JSON_UNESCAPED_UNICODE);
});

$router->dispatch($_SERVER['REQUEST_METHOD'], parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH));
