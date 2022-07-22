<?php

use App\Controllers\MainController as Render;
require '../vendor/autoload.php';

$whoops = new \Whoops\Run;
$whoops->pushHandler(new \Whoops\Handler\PrettyPageHandler);
$whoops->register();

$router = new AltoRouter();

require '../config/routes.php';

$match = $router->match();

if (is_array($match) && is_callable($match['target'])) {
    call_user_func_array($match['target'], $match['params']);
} else {

    $name = '404';
    $css = 'notFound';
    $pageTitle = 'Page 404';
    $param = ['name' =>$pageTitle, 'css'=>$css];
    return Render::render($name, $param);
}


?>