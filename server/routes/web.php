<?php

use Illuminate\Http\Request;

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});


$router->get('/test', function () {
    return response()->json(['nice' => 'very'], 401);
});

$router->post('/auth/login', function (Request $request) {
    // 401 not auth
    // 200 ok

    $username = $request['username'];
    $password = $request['password'];

    $returnObject = [
        'message' => '',
        'status' => 401,
        'accessToken' => false,
    ];

    // check if fields are empty
    if (empty($password) || empty($username)) {
        $returnObject['message'] = 'Empty fields';
        return response()->json(
            [
                'message' => $returnObject['message'],
                'accessToken' => $returnObject['accessToken'],
            ],
            $returnObject['status']
        );
    }


    // check if account is the right one
    if (
        $username != 'admin' ||
        $password != 'admin'
    ) {
        $returnObject['message'] = 'Invalid credentials';
        return response()->json(
            [
                'message' => $returnObject['message'],
                'accessToken' => $returnObject['accessToken'],
            ],
            $returnObject['status']
        );
    }


    // all good. generate token and log user in
    $returnObject['message'] = 'Login successful!';
    $returnObject['accessToken'] = "a3704863b7fb";
    $returnObject['status'] = 200;
    return response()->json(
        [
            'message' => $returnObject['message'],
            'accessToken' => $returnObject['accessToken'],
        ],
        $returnObject['status']
    );
});


$router->get('auth/logout', function () {
    return response()->json(['disconnect' => 'true'], 200);
});
