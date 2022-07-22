<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="/css/<?= $params['css'].".css" ?? 'style.css'; ?>">
    <script src="/js/<?php if(isset($params['js'])){ echo $params['js'].".js" ;}else{
        'home.js';
    } ?>"></script>

    <!--    <link rel="stylesheet" href="../style/header.css">-->
    <title><?= $params['name']." - Cinetech" ?? 'Cinetech'?></title>
</head>
<body>
<header>
    <?php if($_SERVER['REQUEST_URI'] == '/'): ?>
    <img src="/images/cinetechLogo.png" alt="Logo Cinetech">
    <?php else: ?>
        <img src="/images/cinetechLogo.png" alt="Logo Cinetech">
    <?php endif ?>
    <form>
        <input type="search" placeholder="Recherche">
        <button><i class="fa-solid fa-magnifying-glass"></i></button>
    </form>
    <nav>
        <ul>
            <?php if($_SERVER['REQUEST_URI'] == '/'): ?>
            <li><a href="./index.php">Accueil</a></li>
            <li><a href="./view/movies.php">Films</a></li>
            <li><a href="./view/series.php">Séries</a></li>
            <li><a href="./view/register.php"><i class="fa-solid fa-user-astronaut"></i></a></li>
            <?php else: ?>
            <li><a href="../App/Views/homeView.php">Accueil</a></li>
            <li><a href="../App/Views/movies.php">Films</a></li>
            <li><a href="../App/Views/series.php">Séries</a></li>
            <li><a href="../App/Views/registerView.php"><i class="fa-solid fa-user-astronaut"></i></a></li>
            <?php endif ?>
        </ul>
    </nav>
</header>
<main>