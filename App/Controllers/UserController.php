<?php

namespace App\Controllers;

use App\Controllers\MainController as Render;
use App\Models\User as User;

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

    static function registerForm() {
        $pageTitle = 'Inscription';
        $name      = 'register';
        $css       = 'register';
        $js        = 'register';

        $firstname = htmlentities($_POST['firstname']);
        $lastname  = htmlentities($_POST['name']);
        $email     = htmlentities($_POST['email']);
        $password  = htmlentities($_POST['password']);

        $user = new User();
        $new = $user->newUser($firstname, $lastname, $email, $password);

        if ($new) {
            $message = 'Grand succès !';
        } else {
            $message = 'Pas grand succès';
        }

        $params = array(
            'name' => $pageTitle,
            'css'  => $css,
            'js' => $js,
            'message' => $message
        );

        return Render::render($name, $params);
    }

    static function checkUser() {

        $email = htmlentities($_POST['email']);

        $user = new User();
        $exist = $user->findOneUserBy($email);

        if ($exist) {
            echo json_encode('!empty');
        } else {
            echo json_encode('empty');
        }

    }
}


