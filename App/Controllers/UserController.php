<?php

namespace App\Controllers;
use App\Controllers\MainController as Render;

class UserController
{
    static function register() {
        $pageTitle = 'Inscription';
        $name      = 'register';
        $css       = 'register';
        $js        = 'register';

        $params = array(
            'name' => $pageTitle,
            'css'  => $css,
            'js' => $js
        );

        return Render::render($name, $params);
    }
}
