<?php
namespace App\Controller;

use App\Service\HelloService;

class HelloController
{
	private HelloService $service;

	public function __construct()
	{
		$this->service = new HelloService();
	}

	public function hello(): array
	{
		return ['message' => $this->service->getHelloMessage()];
	}
}
