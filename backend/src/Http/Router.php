<?php
namespace App\Http;

class Router
{
	private array $getRoutes = [];

	public function get(string $path, callable $handler): void
	{
		$this->getRoutes[$path] = $handler;
	}

	public function dispatch(string $method, string $path): void
	{
		if ($method === 'GET' && isset($this->getRoutes[$path])) {
			$handler = $this->getRoutes[$path];
			$handler();
			return;
		}

		http_response_code(404);
		echo json_encode(['error' => 'Not found']);
	}
}
