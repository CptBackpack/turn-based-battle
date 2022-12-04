<?php

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


$router->get('/test', function() {
    return response()->json(['nice' => 'very', 'disconnect' => 'true'], 200);
});

$router->post('/auth/signin', function () {
    // 401 not auth
    // 200 ok
    return response()->json(['accessToken' => 'tZiKxFKDcn'], 200);
});


$router->post('/logout', function() {
    return response()->json(['logout' => 'yes'], 200);
});