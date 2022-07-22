<?php

session_start();
require('../vendor/autoload.php');

use App\Controllers\IndexController as IndexController;
use App\Controllers\UserController as UserController;

$router = new AltoRouter();

// ACCUEIL

$router->map('GET', '/', function(){
    IndexController::home();
});

// UTILISATEUR

    // INSCRIPTION
$router->map('GET', '/inscription', function(){
    UserController::register();
});