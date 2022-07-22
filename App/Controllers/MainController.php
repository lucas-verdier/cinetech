<?php

namespace App\Controllers;

class MainController {

    static function render($name, $params = array()): void
    {
        include "../includes/header.php";
        include "../App/Views/". $name ."View.php";
        include "../includes/footer.php";
    }

    static function regex($value) {
        $uppercase = preg_match('@[A-Z]@', $value);
        $lowercase = preg_match('@[a-z]@', $value);
        $number    = preg_match('@[0-9]@', $value);
        $specialChars = preg_match('@[^\w]@', $value);

        if (!$uppercase || !$lowercase || !$number || !$specialChars || strlen($value) < 8) {
            return false;
        } else {
            return true;
        }
    }
}
