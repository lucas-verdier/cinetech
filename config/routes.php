<?php

session_start();
require('../vendor/autoload.php');
use App\Controllers\IndexController as IndexController;
use App\Controllers\UserController as UserController;

$router = new AltoRouter();

// ACCUEIL

$router->map('GET', '/', function() {
    IndexController::home();
});

$router->map('GET', '/detail/[*:type]=[*:id]', function ($type, $id) {
    IndexController::detail($type, $id);
});



// UTILISATEUR

    // INSCRIPTION
$router->map('GET', '/inscription', function() {
    UserController::register();
});
$router->map('POST', '/inscription', function() {
    UserController::registerForm();
});
$router->map('POST', '/inscription/check', function() {
    UserController::checkUser();
});