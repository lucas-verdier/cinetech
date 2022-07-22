<?php

namespace App\Controllers;

use App\Controllers\MainController as Render;

class IndexController {

    static function home()
    {
        $pageTitle = 'Accueil';
        $name      = 'home';
        $css       = 'home';
        $js        = 'home';

        $params = array(
            'name' => $pageTitle,
            'css'  => $css,
            'js'   => $js
        );

        return Render::render($name, $params);
    }

    static function detail($type, $id) {
        $pageTitle = 'Détail';
        $name      = 'detail';
        $css       = 'detail';
        $js        = 'detail';

        $params = array(
            'name' => $pageTitle,
            'css'  => $css,
            'js'   => $js
        );

        return Render::render($name, $params);
    }

}

