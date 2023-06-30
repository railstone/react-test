<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ApiLoginController extends AbstractController
{
    #[Route('/api/login', name: 'app_api_login', methods: 'POST')]
    public function index(Request $request): JsonResponse
    {
        $credentials = json_decode($request->getContent(), true);

        if (null === $credentials || empty($credentials['email']) || empty($credentials['password'])) {
            return $this->json([
                'message' => 'Wrong credentials',
            ], JsonResponse::HTTP_UNAUTHORIZED);
        }

        return $this->json([
            'message' => 'You connected to symfony api/login route',
            'user' => $credentials['email'],
        ]);
    }

    #[Route('/api/pages', name: 'app_api_pages', methods: 'GET')]
    public function getPages()
    {
        $pages = [
            [
                'id' => 1,
                'name' => 'Page 1',
                'description' => 'Lorem ipsum dolor sit amet.'
            ],
            [
                'id' => 2,
                'name' => 'Camila Terry',
                'description' => 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
            ]
        ];

        return $this->json($pages);
    
        $response = new Response();

        //$response->headers->set('Content-Type', 'application/json');
        //$response->headers->set('Access-Control-Allow-Origin', '*');

        //$response->setContent(json_encode($users));
        
        ////return $response;
    }


}
